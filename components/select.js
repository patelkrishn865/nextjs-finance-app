import { forwardRef } from "react";

export default forwardRef(function Select(props, ref) {
  return (
    <select
      ref={ref}
      {...props}
      className={`
        w-full rounded-md shadow-sm
        border border-[var(--label)]
        bg-[var(--bg)] text-[var(--text)]
        px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors
        ${props.className || ""}
      `}
    />
  );
});
