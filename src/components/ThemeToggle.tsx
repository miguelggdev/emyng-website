import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    // On mount, check localStorage
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
    if (saved === "light") setDark(false);
  }, []);

  return (
    <button
      className="rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors text-yellow-400 dark:text-blue-300"
      aria-label="Cambiar tema"
      onClick={() => setDark((d) => !d)}
      type="button"
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}