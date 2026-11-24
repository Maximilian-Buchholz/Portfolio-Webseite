"use client";

export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }
  return (
    <button
      onClick={toggle}
      aria-label="Design wechseln"
      className="cursor-pointer text-lg text-muted transition-colors hover:text-foreground"
    >
      ◐
    </button>
  );
}
