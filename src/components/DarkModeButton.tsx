const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkMode");
};

export default function DarkModeButton() {
  let darkModeSetting = localStorage.getItem("darkMode");

  if (darkModeSetting === "enabled") {
    enableDarkMode();
  }

  const toggle = () => {
    darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  return (
    <button type="button" onClick={toggle}>
      dark mode toggle
    </button>
  );
}
