var proxySelect = document.getElementById("proxy-select");
var wispSelect = document.getElementById("wisp-select");

if (proxySelect) {
  proxySelect.value = localStorage.getItem("proxy") || "uv";
  proxySelect.addEventListener("change", function () {
    localStorage.setItem("proxy", proxySelect.value); 
  });
}

if (wispSelect) {
  if (localStorage.getItem("wisp") == (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/") {
    wispSelect.value = "default";
  } else {
    wispSelect.value = "tp";
  }
  wispSelect.addEventListener("change", function () {
    if (wispSelect.value == "default") {
      localStorage.setItem("wisp", (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/");
    }
    if (wispSelect.value == "tp") {
      localStorage.setItem("wisp", prompt("Enter your WISP URL:"));
    }
  });
}
// Content for each settings section
let settingsContent = {
  general: '<h1>General Settings</h1><p>Configure your general preferences here.</p>',
  themes: '<h1>Themes</h1><p>Customize the look and feel of your app here.</p>',
  advanced: '<h1>Advanced Settings</h1><p>Manage advanced configurations here.</p>',
};

// Add event listeners to the buttons
document.querySelectorAll('.settings-button').forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the data-content attribute
    const contentKey = button.getAttribute('data-content');
    console.log(`Button clicked with data-content: ${contentKey}`); // Debugging

    // Update the settings div
    const settingsDiv = document.querySelector('.settings');
    if (settingsContent[contentKey]) {
      settingsDiv.innerHTML = settingsContent[contentKey];
    } else {
      settingsDiv.innerHTML = '<h1>Not Found</h1>';
      console.error(`Content not found for key: ${contentKey}`); // Debugging
    }
  });
});


