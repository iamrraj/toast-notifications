/**
 * Type for toast notification variants
 */
export type ToastType = "success" | "error" | "warning" | "info";

/**
 * Type for toast theme variants
 */
export type ToastTheme = "light" | "dark";

/**
 * Interface for toast notification properties
 */
export interface ToastProps {
  /** The title of the toast notification */
  title: string;
  /** The message content of the toast notification */
  message: string;
  /** The type of toast notification */
  type?: ToastType;
  /** Duration in milliseconds before the toast auto-dismisses */
  duration?: number;
  /** The theme of the toast (light or dark) */
  theme?: ToastTheme;
  /** Additional CSS classes for custom styling */
  className?: string;
  /** Callback function when the toast is closed */
  onClose: () => void;
}

/**
 * Interface for toast styles based on type and theme
 */
export interface ToastTypeStyles {
  icon: React.FC<{ className?: string }>;
  light: {
    bgColor: string;
    textColor: string;
    progressColor: string;
    borderColor: string;
  };
  dark: {
    bgColor: string;
    textColor: string;
    progressColor: string;
    borderColor: string;
  };
}

/**
 * Interface for toast context value
 */
export interface ToastContextValue {
  addToast: (toast: AddToastProps) => string;
  removeToast: (id: string) => void;
}

/**
 * Interface for adding a new toast
 */
export interface AddToastProps {
  title: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

/**
 * Interface for toast notification item with ID
 */
export interface ToastItem extends AddToastProps {
  id: string;
}

/**
 * Interface for toast utility functions
 */
/**
 * Interface for toast utility functions
 */
export interface ToastUtilityFunctions {
  /**
   * Initialize the toast provider.
   * This function sets the toast provider context value.
   *
   * @param {ToastContextValue} provider - The toast provider context value.
   */
  initialize: (provider: ToastContextValue) => void;

  /**
   * Add a success toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} [duration] - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification.
   */
  success: (title: string, message: string, duration?: number) => string;

  /**
   * Add an error toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} [duration] - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification.
   */
  error: (title: string, message: string, duration?: number) => string;

  /**
   * Add a warning toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} [duration] - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification.
   */
  warning: (title: string, message: string, duration?: number) => string;

  /**
   * Add an info toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} [duration] - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification.
   */
  info: (title: string, message: string, duration?: number) => string;
}
