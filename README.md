Here's an updated and more detailed version of your README file for the React Toast Notifications library:

---

# React Toast Notifications

A modern, highly customizable toast notification library for React applications with TypeScript support. Designed for simplicity, flexibility, and ease of use.

## Features

- 🎨 **Fully Customizable**: Easily adapt styles and themes to match your application's design.
- 🌗 **Light and Dark Mode**: Built-in support for light and dark themes.
- 🎯 **Notification Types**: Predefined styles for success, error, warning, and info notifications.
- ⚡ **Auto-Dismiss**: Automatically hides notifications after a configurable duration.
- ⏱️ **Progress Bar**: Displays a progress bar for auto-dismissed notifications.
- 🔧 **Flexible API**: Use hooks, context, or utility functions to trigger notifications.
- 📱 **Responsive Design**: Optimized for all screen sizes.
- 💪 **TypeScript Support**: Strongly typed for a seamless developer experience.
- 🎁 **Minimal Dependencies**: Only depends on React and lucide-react for icons.

---

## Installation

### Using npm

```bash
npm install @yourusername/toast-notifications
```

### Using yarn

```bash
yarn add @yourusername/toast-notifications
```

---

## Quick Start

### 1. Wrap Your App with `ToastProvider`

To enable toast notifications throughout your application, wrap your root component with `ToastProvider`.

```tsx
import { ToastProvider } from "@iamrraj/toast-notifications";

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. Trigger Notifications with `useToast`

Use the `useToast` hook in your components to show notifications.

```tsx
import { useToast } from "@iamrraj/toast-notifications";

function MyComponent() {
  const toast = useToast();

  const showNotification = () => {
    toast.success("Success!", "Operation completed successfully");
    toast.error("Error!", "Something went wrong");
    toast.warning("Warning!", "Please check your input");
    toast.info("Info", "New updates available");
  };

  return <button onClick={showNotification}>Show Toast</button>;
}
```

### 3. Use Utility Functions for Global Access

If you need to trigger notifications outside of React components, use the `ToastUtils`.

```tsx
import { ToastUtils } from "@iamrraj/toast-notifications";

// Trigger a success notification globally
ToastUtils.success("Success!", "Operation completed successfully");
```

---

## API Reference

### `ToastProvider`

The `ToastProvider` is a context provider that wraps your application and provides access to the toast notification system.

| Prop       | Type        | Default   | Description                              |
| ---------- | ----------- | --------- | ---------------------------------------- |
| `children` | `ReactNode` | -         | The child components of your app         |
| `theme`    | `string`    | `'light'` | Theme for toasts (`'light'` or `'dark'`) |

---

### Toast Methods

The following methods are available through the `useToast` hook or `ToastUtils`:

- `toast.success(title, message, duration?)`
- `toast.error(title, message, duration?)`
- `toast.warning(title, message, duration?)`
- `toast.info(title, message, duration?)`

| Parameter  | Type     | Default | Description                                         |
| ---------- | -------- | ------- | --------------------------------------------------- |
| `title`    | `string` | -       | Title of the notification                           |
| `message`  | `string` | -       | Message content of the notification                 |
| `duration` | `number` | `3000`  | Time (in ms) before the notification auto-dismisses |

---

## Customization

### Styling with Tailwind CSS

The library uses Tailwind CSS by default. Customize the styles by modifying your Tailwind configuration.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        toast: {
          success: "#4CAF50",
          error: "#F44336",
          warning: "#FF9800",
          info: "#2196F3",
        },
      },
    },
  },
};
```

You can also override the styles of individual toasts by passing a `className` prop.

```tsx
<Toast
  title="Custom Toast"
  message="With custom styling"
  className="your-custom-classes"
/>
```

---

### Theming

Switch between light and dark themes using the `theme` prop in `ToastProvider`.

```tsx
<ToastProvider theme="dark">
  <YourApp />
</ToastProvider>
```

---

## Examples

### Basic Example

```tsx
import React from "react";
import { ToastProvider, useToast } from "@iamrraj/toast-notifications";

const App = () => {
  const toast = useToast();

  const notify = () => {
    toast.success("Success!", "Your operation was successful!");
  };

  return (
    <ToastProvider>
      <button onClick={notify}>Show Success Notification</button>
    </ToastProvider>
  );
};

export default App;
```

---

## Contributing

We welcome contributions! Feel free to submit issues or pull requests on [GitHub](https://github.com/iamrraj/toast-notifications).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

MIT © [Rahul Raj]

---

## Change Log

### v1.0.0

- Initial release with support for:
  - Success, error, warning, and info toasts
  - Light and dark themes
  - Auto-dismiss and progress bar
  - Custom styling and theming support

---
