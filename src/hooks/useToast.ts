import { useContext } from "react";
import { ToastContextValue } from "../types";
import { ToastContext } from "../components/ToastProvider";

/**
 * useToast Hook
 *
 * A custom React hook that provides access to the `ToastContext`.
 * This hook allows components to interact with the toast notification system,
 * enabling the addition and removal of toast notifications.
 *
 * @example
 * // Example usage inside a functional component
 * const { addToast, removeToast } = useToast();
 *
 * addToast({
 *   title: "Success",
 *   message: "Your action was successful",
 *   type: "success",
 *   duration: 3000,
 * });
 *
 * @returns {ToastContextValue} The context value, which includes:
 * - `addToast`: A function to add a new toast notification.
 * - `removeToast`: A function to remove an existing toast notification by its ID.
 *
 * @throws {Error} If the hook is used outside of a `ToastProvider`.
 * Ensure that the component using this hook is wrapped within a `ToastProvider`.
 */
export const useToast = (): ToastContextValue => {
  // Access the ToastContext using the useContext hook.
  // This retrieves the value provided by the nearest `ToastProvider` in the component tree.
  const context = useContext(ToastContext);

  // If no `ToastProvider` is found in the component tree, throw an error.
  // This ensures that the `useToast` hook is only used in components wrapped by a `ToastProvider`.
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  // Return the context value, which contains methods to manage toast notifications.
  return context;
};
