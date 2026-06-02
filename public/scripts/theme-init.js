(function () {
    try {
        var theme = localStorage.getItem("theme");
        if (theme === "light" || theme === "dark") {
            document.documentElement.setAttribute("data-bs-theme", theme);
        } else {
            document.documentElement.setAttribute("data-bs-theme", "light");
        }
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
})();
