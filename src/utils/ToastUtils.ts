import { ToastUtilityFunctions, ToastContextValue } from "../types";

/**
 * A variable to hold the toast provider context value.
 * This will be initialized when the `initialize` function is called.
 */
let toastProvider: ToastContextValue | null = null;

/**
 * ToastUtils Object
 * An object containing utility functions for managing toast notifications.
 * These functions allow for easy addition of toast notifications of different types.
 */
export const ToastUtils: ToastUtilityFunctions = {
  /**
   * Initialize the toast provider.
   * This function sets the toast provider context value.
   *
   * @param {ToastContextValue} provider - The toast provider context value.
   */
  initialize: (provider: ToastContextValue) => {
    toastProvider = provider;
  },

  /**
   * Add a success toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} duration - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification, or an empty string if the provider is not initialized.
   */
  success: (title, message, duration) =>
    toastProvider?.addToast({ title, message, type: "success", duration }) ||
    "",

  /**
   * Add an error toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} duration - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification, or an empty string if the provider is not initialized.
   */
  error: (title, message, duration) =>
    toastProvider?.addToast({ title, message, type: "error", duration }) || "",

  /**
   * Add a warning toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} duration - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification, or an empty string if the provider is not initialized.
   */
  warning: (title, message, duration) =>
    toastProvider?.addToast({ title, message, type: "warning", duration }) ||
    "",

  /**
   * Add an info toast notification.
   *
   * @param {string} title - The title of the toast notification.
   * @param {string} message - The message of the toast notification.
   * @param {number} duration - The duration (in milliseconds) for which the toast is visible.
   * @returns {string} The unique ID of the added toast notification, or an empty string if the provider is not initialized.
   */
  info: (title, message, duration) =>
    toastProvider?.addToast({ title, message, type: "info", duration }) || "",
};
