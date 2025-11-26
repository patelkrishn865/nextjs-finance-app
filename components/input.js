import { forwardRef } from "react";

export default forwardRef(function Input(props, ref) {
  const styles = {
    checkbox: `
      rounded 
      border-[var(--label)]
      bg-[var(--bg)]
      text-[var(--text)]
      shadow-sm
      disabled:opacity-75
    `,
    file: "file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:dark:text-gray-400",
    default: `
      w-full rounded-md shadow-sm 
      border border-[var(--label)]
      bg-[var(--bg)] text-[var(--text)]
      px-3 py-2 
      focus:outline-none focus:ring-2 focus:ring-blue-500
      transition-colors
      disabled:opacity-75
    `,
  };

  return (
    <input
      ref={ref}
      {...props}
      className={`${styles[props.type] ?? styles.default} ${
        props.className
      }`}
    />
  );
});
