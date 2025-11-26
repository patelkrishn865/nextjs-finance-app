export default function Label({ className = "", ...props }) {
    return (
      <label
        {...props}
        className={`block font-medium text-[var(--text)] ${className}`}
      />
    );
  }
  