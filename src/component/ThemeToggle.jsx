import { useState, useEffect } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Apply the theme to the body
  useEffect(() => {
    // Check if dark mode preference is stored or use system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark)
    setIsDarkMode(initialDarkMode)

    if (initialDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-6 md:right-6 p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring z-50 dark:bg-gray-800 bg-gray-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <FiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-700 dark:text-white" />
      )}
    </button>
  )
}

export default ThemeToggle






 