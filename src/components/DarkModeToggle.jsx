function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      data-testid="dark-mode-toggle"
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;