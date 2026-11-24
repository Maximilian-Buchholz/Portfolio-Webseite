"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    // Weicher Farbwechsel: Übergänge nur während des Umschaltens aktiv.
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    const dark = root.classList.toggle("dark");
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
