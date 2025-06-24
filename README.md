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
- **Fragments** let you group multiple elements without adding extra nodes to the DOM.

---

## Installation

1. **Clone the repository:**

   ```
   git clone git@github.com:luisc8487/navigation-routing-system.git
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

6. **Import your CSS in your entry file:**
   Make sure to import your `index.css` file in your main entry file (usually `src/index.jsx` or `src/index.js`) so that Tailwind's styles are applied throughout your app:

   ```js
   // src/index.jsx
   import "./index.css";
   // ...other imports and ReactDOM.render/App code...
   ```

7. **Start the development server:**

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

## Handling Special `className` Cases with the Spread Operator

The `Button` component is designed to be highly flexible. One important feature is the ability to pass a custom `className` prop to the button, allowing you to add extra Tailwind or custom classes from the parent component. This is achieved using the **spread operator** (`...rest`) in the `Button.jsx` file.

### How it Works

When you use the spread operator in the component props, like this:

```jsx
function Button({children, ...rest}) {
  // ...existing code...
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
```

It collects all additional props (such as `className`, `onClick`, etc.) and passes them directly to the `<button>` element. This means you can add custom classes or event handlers when using the `Button` component.

### Example from `App.jsx`

Here’s how you can add a custom margin to a button using the `className` prop:

```jsx
<Button success rounded outline className="mb-5" onClick={handleClick}>
  <GoBell />
  Click me!
</Button>
```

- `className="mb-5"` adds a bottom margin to the button.
- `onClick={handleClick}` attaches a click event handler.
- All these props are passed to the `<button>` element inside the `Button` component thanks to the spread operator.

### How `className` is Merged

Inside `Button.jsx`, the `className` from the parent is merged with the component’s own classes using `classnames` and `tailwind-merge`:

```jsx
const classes = twMerge(
  className(rest.className, "flex items-center px-3 py-1.5 border", {
    // ...conditional Tailwind classes...
  })
);
```

- `rest.className` ensures any custom classes from the parent are included.
- `twMerge` resolves any conflicting Tailwind classes, so your custom styles and the component’s styles work together seamlessly.

---

## Why use a Fragment?

- **No extra DOM nodes**: Unlike a `<div>`, a Fragment doesn't render anything in the DOM. This keeps your HTML clean.
- **Return multiple elements**: In React, a component must return a single parent element. Fragments let you return multiple elements side by side.

### Example:

```jsx
import {Fragment} from "react";

function MyComponent() {
  return (
    <Fragment>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </Fragment>
  );
}
```

This is especially useful in tables, where adding extra `<div>`s would break the table structure. Using a Fragment allows you to return multiple `<td>` elements from a component without wrapping them in an invalid element.

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
- The spread operator allows the `Button` component to accept and forward any extra props, including `className`, making it easy to customize buttons from the parent component. The combination of `classnames` and `tailwind-merge` ensures all classes are merged and applied correctly.
- **react-icons** makes it easy to add SVG icons to your buttons.
- The `Button` component is highly reusable and customizable via props.
- **`Fragment`** in **`Table.jsx`** to the group elements (like `<tr>` or `<td>`) without introducing unnecessary DOM nodes, which is important for valid table markup.

---

Feel free to explore and extend the button component for your own needs!
