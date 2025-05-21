import React, { useState, useEffect } from "react";
import FloatingToolbar from "./components/FloatingToolbar";
import "./App.css";

const TOOLBAR_ITEMS = ["Home", "About", "Contact"];

const ClockDisplay = ({ isDarkMode }) => {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const pad = n => n.toString().padStart(2, '0');
  const formatted =
    `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} - ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  return (
    <span style={{
      position: 'fixed',
      top: '3vh',
      left: '85vw',
      color: isDarkMode ? 'red' : 'blue',
      fontFamily: 'monospace',
      fontWeight: 700,
      fontSize: '0.9rem',
      zIndex: 1001,
      userSelect: 'none',
      letterSpacing: 1,
      background: 'transparent',
      lineHeight: '56px'
    }}>
      {formatted}
    </span>
  );
};

function App() {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [selected, setSelected] = useState(TOOLBAR_ITEMS[0]);

  // Effect to update html (root) class for theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  // Toggle theme handler
  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <FloatingToolbar
        items={TOOLBAR_ITEMS}
        selected={selected}
        onSelect={setSelected}
        onToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
      />
      <ClockDisplay isDarkMode={isDarkMode} />
      <main
        style={{
          marginTop: "12vh",
          minHeight: "88vh",
          padding: "24px",
          boxSizing: "border-box",
          position: "relative"
        }}
      >
        {selected === "Home" && (
          <div>
            <img
              src="/images/background_img.JPG"
              alt="Background"
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: "24px",
                marginBottom: "2em",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)"
              }}
            />
            <div style={{ marginTop: "2em" }}>
              <h1>Aman Verma</h1>
              <p
                style={{
                  color: isDarkMode ? "var(--link-color)" : undefined,
                }}
              >
                I’m a dedicated and dynamic Data Engineer specializing in translating business needs into technical requirements and high-performance infrastructures.
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "1em",
                  color: isDarkMode ? "var(--link-color)" : undefined,
                }}
              >
                "Learn. Apply. Repeat."
              </p>
              {/* My Thoughts Section */}
              <div style={{ marginTop: "1.5em", background: isDarkMode ? "#181c1f" : "#f5f5f5", borderRadius: "12px", padding: "1.5em" }}>
                <h2 style={{ marginTop: 0 }}>My Thoughts</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
                  <span>-- I'm deeply passionate about artificial intelligence and automation, always seeking ways to leverage technology to solve real-world problems.</span>
                  <span>-- Exploring the possibilities of MCP (Model Context Protocol) has been an exciting journey, opening up new avenues for seamless tool integration and smarter workflows.</span>
                  <span>-- I believe in the transformative power of AI and automation to make our lives more efficient and creative.</span>
                  <span>-- My interests lie at the intersection of technology, innovation, and practical impact—especially in the fields of AI and automation.</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {selected === "About" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Profile Image and Intro */}
            <div style={{ display: "flex", alignItems: "center", gap: "2em", width: "100%", maxWidth: 900, marginBottom: "2em" }}>
              <img
                src="/images/profile.jpeg"
                alt="Aman Verma Profile"
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  border: "3px solid var(--border-color)",
                  flexShrink: 0,
                  background: "#e0e0e0"
                }}
              />
              <div>
                <h1 style={{ margin: 0 }}>Aman Verma</h1>
                <h2 style={{ margin: "0.2em 0 0.5em", fontSize: "1.2rem", color: "var(--highlight-color)" }}>
                  Software Developer 2 @ Sigmoid
                </h2>
                <p style={{ margin: 0, fontSize: "1.1rem" }}>
                  I’m a dedicated and dynamic Data Engineer specializing in translating business needs into technical requirements and high-performance infrastructures.
                </p>
              </div>
            </div>
            {/* Key Stats/Highlights */}
            <div style={{
              display: "flex",
              gap: "2em",
              marginBottom: "2em",
              justifyContent: "center",
              width: "100%",
              maxWidth: 900
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "var(--highlight-color)" }}>3+</div>
                <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Years Experience</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "var(--highlight-color)" }}>3</div>
                <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Roles @ Sigmoid</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "var(--highlight-color)" }}>2</div>
                <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Awards</div>
              </div>
            </div>
            {/* Experience Timeline */}
            <div style={{ width: "100%", maxWidth: 900, marginBottom: "2em" }}>
              <h2>Experience</h2>
              <div style={{ borderLeft: "3px solid var(--border-color)", paddingLeft: "2em" }}>
                <div style={{ marginBottom: "2em", display: "flex", alignItems: "center", gap: "1em" }}>
                  <span style={{ fontSize: 32 }} role="img" aria-label="Rocket">🚀</span>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--highlight-color)" }}>Software Developer 2</div>
                    <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Sigmoid · Jan 2025 – Present · Hybrid</div>
                  </div>
                </div>
                <div style={{ marginBottom: "2em", display: "flex", alignItems: "center", gap: "1em" }}>
                  <span style={{ fontSize: 32 }} role="img" aria-label="Laptop">💻</span>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--highlight-color)" }}>Software Developer 1</div>
                    <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Sigmoid · Jan 2024 – Dec 2024 · Hybrid</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                  <span style={{ fontSize: 32 }} role="img" aria-label="Seedling">🌱</span>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--highlight-color)" }}>Associate Software Engineer</div>
                    <div style={{ fontSize: 14, color: "var(--muted-text)" }}>Sigmoid · Jun 2022 – Dec 2023 · Hybrid</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education */}
            <div style={{ width: "100%", maxWidth: 900, marginBottom: "2em" }}>
              <h2>Education</h2>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li style={{
                  background: isDarkMode ? "#181c1f" : "#e5e5e5",
                  borderRadius: "12px",
                  padding: "1em",
                  marginBottom: "1em",
                  display: "flex",
                  alignItems: "center",
                  gap: "1em"
                }}>
                  <span role="img" aria-label="University" style={{ fontSize: 32 }}>🎓</span>
                  <span>
                    <strong style={{ color: "var(--highlight-color)" }}>Bachelor of Engineering in Computer Science</strong>, Chandigarh University (2018–2022)
                  </span>
                </li>
                <li style={{
                  background: isDarkMode ? "#23272b" : "#f5f5f5",
                  borderRadius: "12px",
                  padding: "1em",
                  display: "flex",
                  alignItems: "center",
                  gap: "1em"
                }}>
                  <span role="img" aria-label="School" style={{ fontSize: 32 }}>🏫</span>
                  <span>
                    <strong style={{ color: "var(--highlight-color)" }}>Senior Secondary (XII)</strong>, Monal Public School, Sanjauli (2016–2018)
                  </span>
                </li>
              </ul>
            </div>
            {/* Awards */}
            <div style={{ width: "100%", maxWidth: 900, marginBottom: "2em" }}>
              <h2>Awards</h2>
              <ul>
                <li>Brilliant Beginner Award (Sigmoid)</li>
                <li>Spot Award (Sigmoid)</li>
              </ul>
            </div>
          </div>
        )}
        {selected === "Contact" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Background image centered above socials */}
            <img
              src="/images/background_img.JPG"
              alt="Background"
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: "24px",
                marginBottom: "2em",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)"
              }}
            />
            <h1>Contact & Socials</h1>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5em",
              margin: "2em 0"
            }}>
              <a
                href="https://mail.google.com/mail/?view=cm&to=amanmehta2007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to amanmehta2007@gmail.com"
                style={{ display: "flex", alignItems: "center" }}
              >
                <EmailIcon isDarkMode={isDarkMode} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-verma-15851832a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{ display: "flex", alignItems: "center" }}
              >
                <LinkedInIcon isDarkMode={isDarkMode} />
              </a>
              <a
                href="https://instagram.com/aman_verma.1901"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                style={{ display: "flex", alignItems: "center" }}
              >
                <InstagramIcon isDarkMode={isDarkMode} />
              </a>
            </div>
            {/* Hire Me as Download CV button */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5em"
            }}>
              <a
                href="/Aman_Verma_CV.pdf"
                download="Aman_Verma_CV.pdf"
                style={{
                  display: "inline-block",
                  padding: "0.75em 2em",
                  background: isDarkMode ? "#FFFF00" : "var(--highlight-color)",
                  color: isDarkMode ? "#222" : "#fff",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </main>
    {/* Floating builtbyaman logo in bottom-right */}
    <img
      src={isDarkMode ? "/images/logo_dark.png" : "/images/logo_light.png"}
      alt="builtbyaman.com logo"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
        height: 64,
        width: "auto",
        objectFit: "contain",
        borderRadius: 16,
        boxShadow: isDarkMode
          ? "0 0 32px 4px rgba(255,255,255,0.18), 0 2px 8px 0 rgba(255,255,255,0.10)"
          : "0 2px 12px 0 rgba(0,0,0,0.18)",
        background: isDarkMode ? "#181c1f" : "#fff",
        padding: 8,
        border: isDarkMode
          ? "2px solid rgba(255,255,255,0.5)"
          : "2px solid #e0e0e0",
        display: "block"
      }}
    />
    </div>
  );
}

function LinkedInIcon({ isDarkMode }) {
  // LinkedIn blue for light mode, white for dark mode
  const color = isDarkMode ? "#fff" : "#0A66C2";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      style={{ marginRight: 4, verticalAlign: "middle" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
      <path
        d="M7 8h2v8H7V8zm1-2a1 1 0 110-2 1 1 0 010 2zm4 2h2v1.2c.3-.6 1-1.2 2-1.2 2 0 2 1.3 2 3v5h-2v-4c0-1-.2-2-1-2s-1 .8-1 2v4h-2V8z"
        fill={isDarkMode ? "#222" : "#fff"}
      />
    </svg>
  );
}

function InstagramIcon({ isDarkMode }) {
  // Instagram gradient or white for dark mode, dark for light mode
  const color = isDarkMode ? "#fff" : "#E1306C";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ marginRight: 4, verticalAlign: "middle" }}
      stroke={color}
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" stroke={color} fill="none" />
      <circle cx="12" cy="12" r="5" stroke={color} />
      <circle cx="17" cy="7" r="1.2" fill={color} />
    </svg>
  );
}

function EmailIcon({ isDarkMode }) {
  // Blue for light mode, white for dark mode, larger size
  const color = isDarkMode ? "#fff" : "#1976D2";
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "middle" }}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" stroke={color} />
      <polyline points="3 7 12 13 21 7" stroke={color} />
    </svg>
  );
}

export default App;
