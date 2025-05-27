# React Button Components with Tailwind CSS

This project demonstrates how to build a flexible set of button components in React using [Tailwind CSS v3](https://tailwindcss.com/), [classnames](https://www.npmjs.com/package/classnames), [tailwind-merge](https://www.npmjs.com/package/tailwind-merge), and [react-icons](https://react-icons.github.io/react-icons/).

## Project Overview

The main goal of this project is to create a reusable `<Button />` component that can easily switch between different visual styles (primary, secondary, success, warning, danger, outline, rounded, etc.) by simply changing its props. This is achieved by combining the power of Tailwind CSS utility classes with the `classnames` and `tailwind-merge` libraries.

---

## Features

- **Tailwind CSS v3** for utility-first styling.
- **classnames** for conditional class string construction.
- **tailwind-merge** to resolve conflicting Tailwind classes (e.g., `text-white` vs. `text-blue-500`).
- **react-icons** for easily adding SVG icons to buttons.
- **Reusable Button component** with multiple style variations via props.

---

## Installation

1. **Clone the repository:**

   ```
   git clone <your-repo-url>
   cd react-comp
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

   This will install:

   - `react`
   - `tailwindcss@^3`
   - `classnames`
   - `tailwind-merge`
   - `react-icons`
   - and other required packages.

3. **Initialize Tailwind CSS (if not already done):**

   ```
   npx tailwindcss init -p
   ```

   This creates `tailwind.config.js` and `postcss.config.js`.

4. **Configure Tailwind:**
   Edit your `tailwind.config.js` file to include your source files:
   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
5. **Import Tailwind in your CSS:**
   In your `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Start the development server:**
   ```
   npm start
   ```

---

## How the Button Component Works

The `Button` component uses the `classnames` library to conditionally apply Tailwind CSS classes based on the props you provide. For example, passing `primary` as a prop will apply the `bg-blue-500` and `text-white` classes, while passing `danger` will apply `bg-red-500` and `text-white`.

**Example usage:**

```jsx
<Button primary>Primary Button</Button>
<Button danger outline rounded>Danger Outline Rounded</Button>
<Button success>Success</Button>
```

### What does `classnames` do?

The [`classnames`](https://www.npmjs.com/package/classnames) library allows you to build up a string of class names based on object keys and their boolean values. This makes it easy to conditionally apply classes in your React components.

**Example:**

```js
className("btn", {"btn-primary": isPrimary, "btn-danger": isDanger});
```

If `isPrimary` is true, `"btn btn-primary"` will be the result.

### How is `classnames` used in `Button.jsx`?

In `Button.jsx`, we use `classnames` to build a string of Tailwind classes based on which props are passed to the button. Then, we use `tailwind-merge` to resolve any conflicting Tailwind classes (for example, if both `text-white` and `text-blue-500` are present, `tailwind-merge` ensures the correct one is applied).

**Excerpt from `Button.jsx`:**

```jsx
import className from "classnames";
import {twMerge} from "tailwind-merge";

function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
}) {
  const classes = twMerge(
    className("flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return <button className={classes}>{children}</button>;
}
```

---

## Using React Icons

You can easily add icons to your buttons using the `react-icons` library:

```jsx
import {FaBeer} from "react-icons/fa";

<Button primary>
  <FaBeer />
  Cheers!
</Button>;
```

---

## Summary

- **Tailwind CSS** provides utility classes for styling.
- **classnames** lets you conditionally apply classes based on props.
- **tailwind-merge** ensures that conflicting Tailwind classes are resolved correctly.
- **react-icons** makes it easy to add SVG icons to your buttons.
- The `Button` component is highly reusable and customizable via props.

---

Feel free to explore and extend the button component for your own needs!
