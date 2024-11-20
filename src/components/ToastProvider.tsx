import React, {
  createContext,
  useState,
  useCallback,
  FC,
  useEffect,
} from "react";
import Toast from "./Toast"; // Import the Toast component for rendering notifications
import { ToastContextValue, ToastItem } from "../types"; // Import type definitions
import { ToastUtils } from "../utils/ToastUtils"; // Import utility functions for global toast management

// Create a context to manage toast notifications
// This will be used to provide `addToast` and `removeToast` methods throughout the app
export const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State to hold the list of currently visible toasts
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  /**
   * Function to add a new toast notification.
   * - Generates a unique ID for each toast.
   * - Adds the toast to the state, ensuring it gets rendered.
   */
  const addToast = useCallback(
    ({ title, message, type, duration }: Omit<ToastItem, "id">): string => {
      const id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
      setToasts((prev) => [...prev, { id, title, message, type, duration }]); // Add the new toast to the state
      return id;
    },
    []
  );

  /**
   * Function to remove a toast notification by its ID.
   * - Filters the state to remove the toast with the given ID.
   */
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id)); // Remove the toast from the state
  }, []);

  /**
   * Effect to initialize the ToastUtils.
   * - Provides `addToast` and `removeToast` methods to ToastUtils for global use.
   * - Ensures ToastUtils can work outside of the React component tree.
   */
  useEffect(() => {
    ToastUtils.initialize({ addToast, removeToast }); // Initialize the utility with context methods
  }, [addToast, removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {/* Wrap the children with the ToastContext provider */}
      {children}

      {/* Render the list of active toasts */}
      <div className="fixed top-4 right-4 z-50 space-y-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id} // Use the unique ID as the key
            {...toast} // Spread the toast properties (title, message, etc.)
            onClose={() => removeToast(toast.id)} // Pass a callback to remove the toast
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
