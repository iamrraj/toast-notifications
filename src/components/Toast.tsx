import React, { useState, useEffect, FC } from "react";
import { CheckCircle2, XCircle, AlertCircle, Info, X } from "lucide-react";
import { ToastProps } from "../types";

/**
 * Toast Component
 * A customizable toast notification component that displays messages with different types and themes.
 *
 * @param {ToastProps} props - The properties for the Toast component.
 * @param {string} props.title - The title of the toast notification.
 * @param {string} props.message - The message of the toast notification.
 * @param {string} [props.type="info"] - The type of the toast notification (success, error, warning, info).
 * @param {number} [props.duration=3000] - The duration (in milliseconds) for which the toast is visible.
 * @param {string} [props.theme="light"] - The theme of the toast notification (light, dark).
 * @param {string} [props.className=""] - Additional CSS classes for custom styling.
 * @param {function} props.onClose - The callback function to be called when the toast is closed.
 * @returns {JSX.Element} The Toast component.
 */
const Toast: FC<ToastProps> = ({
  title,
  message,
  type = "info",
  duration = 3000,
  theme = "light",
  className = "",
  onClose,
}) => {
  const [progress, setProgress] = useState<number>(100);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Set up the interval to update the progress bar
    const interval = setInterval(() => {
      setProgress((prev) => (prev <= 0 ? 0 : prev - 100 / (duration / 10)));
    }, 10);

    // Set up the timer to hide the toast after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    // Clean up the interval and timer on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  // Define the types of toast notifications and their corresponding styles
  const types = {
    success: {
      icon: CheckCircle2,
      light: {
        bgColor: "bg-green-50",
        textColor: "text-green-800",
        progressColor: "bg-green-500",
        borderColor: "border-green-200",
      },
      dark: {
        bgColor: "bg-green-900",
        textColor: "text-green-100",
        progressColor: "bg-green-500",
        borderColor: "border-green-700",
      },
    },
    error: {
      icon: XCircle,
      light: {
        bgColor: "bg-red-50",
        textColor: "text-red-800",
        progressColor: "bg-red-500",
        borderColor: "border-red-200",
      },
      dark: {
        bgColor: "bg-red-900",
        textColor: "text-red-100",
        progressColor: "bg-red-500",
        borderColor: "border-red-700",
      },
    },
    warning: {
      icon: AlertCircle,
      light: {
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-800",
        progressColor: "bg-yellow-500",
        borderColor: "border-yellow-200",
      },
      dark: {
        bgColor: "bg-yellow-900",
        textColor: "text-yellow-100",
        progressColor: "bg-yellow-500",
        borderColor: "border-yellow-700",
      },
    },
    info: {
      icon: Info,
      light: {
        bgColor: "bg-blue-50",
        textColor: "text-blue-800",
        progressColor: "bg-blue-500",
        borderColor: "border-blue-200",
      },
      dark: {
        bgColor: "bg-blue-900",
        textColor: "text-blue-100",
        progressColor: "bg-blue-500",
        borderColor: "border-blue-700",
      },
    },
  };

  // Destructure the icon and styles based on the type and theme
  const {
    icon: Icon,
    [theme]: { bgColor, textColor, progressColor, borderColor },
  } = types[type];

  return (
    <div
      className={`fixed top-4 right-4 w-96 rounded-lg shadow-lg border transition-all duration-300 ease-in-out
        ${bgColor} ${textColor} ${borderColor} ${className}
        ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
    >
      <div className="p-4">
        <div className="flex items-start">
          <Icon className="w-5 h-5 mt-0.5 mr-3" />
          <div className="flex-1">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm mt-1">{message}</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 hover:opacity-70"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-b-lg overflow-hidden">
        <div
          className={`h-full ${progressColor} transition-all duration-100 ease-linear`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Toast;
