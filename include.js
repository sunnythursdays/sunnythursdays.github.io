document.addEventListener("DOMContentLoaded", function() {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not load ${file}`);
      el.innerHTML = await response.text();
    } catch (err) {
      console.error(err);
      el.innerHTML = "<p>content failed to load.</p>";
    }
  });
});
