import React from "react";

const HomeIcon = ({ color, doorFill, doorStroke }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M3 12L12 5l9 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"
      fill="currentColor"
      stroke="currentColor"
    />
    <rect
      x="10"
      y="15"
      width="4"
      height="6"
      fill={doorFill}
      stroke={doorStroke}
      strokeWidth="1.5"
      rx="1"
    />
  </svg>
);

const SunIcon = ({ color }) => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ color }) => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.09 9.79z" />
  </svg>
);

const UserIcon = ({ color }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ marginRight: 8 }}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
  </svg>
);

const EnvelopeIcon = ({ color }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ marginRight: 8 }}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const FloatingToolbar = ({
  items,
  selected,
  onSelect,
  onToggleTheme,
  isDarkMode,
}) => {
  // Use CSS variable for toolbar text color
  const toolbarTextColor = isDarkMode
    ? "var(--toolbar-text-dark)"
    : "var(--toolbar-text-light)";
  const toolbarBg = isDarkMode
    ? "var(--toolbar-bg-dark)"
    : "var(--toolbar-bg-light)";
  const highlightBg = isDarkMode ? "#23272b" : "#d1d5db";

  return (
    <div
      className="floating-toolbar"
      style={{
        position: "fixed",
        top: "3vh",
        left: "50%",
        transform: "translateX(-50%)",
        height: "56px",
        minHeight: "40px",
        width: "auto",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: "20px",
        color: toolbarTextColor,
        background: toolbarBg,
      }}
    >
      {/* Home Icon Button */}
      <button
        onClick={() => onSelect("Home")}
        style={{
          background: "transparent",
          border: "none",
          borderRadius: "50%",
          padding: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
          color: toolbarTextColor,
          outline: "none",
        }}
        aria-label="Home"
        tabIndex={0}
        onMouseDown={e => e.preventDefault()}
      >
        <HomeIcon
          color={toolbarTextColor}
          doorFill={isDarkMode ? "#000" : "#fff"}
          doorStroke={isDarkMode ? "#fff" : "#222"}
        />
      </button>
      {/* Separator after Home */}
      <div
        style={{
          height: "32px",
          width: "2px",
          margin: "0 12px",
          background: "var(--border-color)",
          borderRadius: "2px",
          alignSelf: "center",
          opacity: 0.5,
        }}
      />
      {/* Other Items */}
      {items
        .filter((item) => item !== "Home")
        .map((item, idx, arr) => (
          <React.Fragment key={item}>
            <button
              onClick={() => onSelect(item)}
              style={{
                background:
                  selected === item ? highlightBg : "transparent",
                color: toolbarTextColor,
                border: "none",
                borderRadius: "999px",
                padding: "8px 20px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                transition: "background 0.2s, color 0.2s",
                outline: "none",
              }}
              tabIndex={0}
              onMouseDown={e => e.preventDefault()}
            >
              {item === "About" && <UserIcon color={toolbarTextColor} />}
              {item === "Contact" && <EnvelopeIcon color={toolbarTextColor} />}
              {item}
            </button>
            {/* Separator after last nav button, before toggle */}
            {idx === arr.length - 1 && (
              <div
                style={{
                  height: "32px",
                  width: "2px",
                  margin: "0 12px",
                  background: "var(--border-color)",
                  borderRadius: "2px",
                  alignSelf: "center",
                  opacity: 0.5,
                }}
              />
            )}
          </React.Fragment>
        ))}
      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        style={{
          background: "transparent",
          border: "none",
          borderRadius: "50%",
          padding: "8px",
          marginLeft: "12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: toolbarTextColor,
          outline: "none",
        }}
        aria-label="Toggle theme"
        tabIndex={0}
        onMouseDown={e => e.preventDefault()}
      >
        {isDarkMode ? (
          <MoonIcon color={toolbarTextColor} />
        ) : (
          <SunIcon color={toolbarTextColor} />
        )}
      </button>
    </div>
  );
};

export default FloatingToolbar;
