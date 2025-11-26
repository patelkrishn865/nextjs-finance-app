export const variants = {
  default: `
    bg-[var(--text)]
    text-[var(--bg)]
    rounded-md
    border border-[var(--label)]
    hover:opacity-90
    transition-colors
    disabled:opacity-50
  `,

  outline: `
    bg-[var(--bg)]
    text-[var(--text)]
    border border-[var(--text)]
    rounded-md
    hover:bg-[var(--text)]
    hover:text-[var(--bg)]
    transition-colors
    disabled:opacity-50
  `,

  ghost: `
  bg-[var(--ghost-bg)]
  text-[var(--text)]
  rounded-md
  border border-[var(--text)]
  hover:bg-[var(--ghost-hover)]
  transition-colors
  disabled:opacity-50
`,
ghost1: `
  bg-[var(--ghost1-bg)]
  text-[var(--text)]
  rounded-md
  border border-[var(--ghost1-bg)]
  hover:bg-[var(--ghost1-hover)]
  transition-colors
  disabled:opacity-50
`,
ghost2: `
bg-[var(--ghost2-bg)]
text-[var(--text)]
rounded-md
hover:bg-[var(--ghost2-hover)]
transition-colors
disabled:opacity-50
`,
danger: `
    bg-[var(--danger-bg)]
    text-[var(--danger-text)]
    rounded-md
    border border-[var(--label)]
    hover:bg-[var(--danger-hover)]
    transition-colors
    disabled:opacity-50
  `,

};

export const sizes = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  base: 'text-base px-4 py-2',
  lg: 'text-lg px-4 py-2',
};
