document.getElementById("cargarEstilos").addEventListener("click", function() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "no-critics.css";
    document.head.appendChild(link);
    this.disabled = true;
});