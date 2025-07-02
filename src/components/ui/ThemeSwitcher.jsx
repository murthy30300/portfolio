import { useState } from "react";
import { Paintbrush } from "lucide-react";

const themes = ["red", "green", "pink", "orange"];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (theme) => {
    // Set the data-theme attribute for the theme
    document.documentElement.setAttribute("data-theme", theme);
  
    // Update the cursor URL
    const cursorUrl = `/cursors/${theme}.png`;
    document.documentElement.style.setProperty("--cursor-url", `url(${cursorUrl}), auto`);
  
    // Debugging: Log the applied theme and cursor URL
    console.log(`Theme applied: ${theme}`);
    console.log(`Cursor URL: ${cursorUrl}`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? "❌" : <Paintbrush className="text-skin-primary" />}
      </button>

      {/* Theme Options */}
      {isOpen && (
        <div className="mt-2 flex gap-3 bg-white p-3 rounded-full shadow-lg">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => applyTheme(theme)}
              className={`w-6 h-6 rounded-full border-2 border-blue-400 hover:scale-110 transition-transform`}
              style={{ backgroundColor: `var(--${theme}-color, ${theme})` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}