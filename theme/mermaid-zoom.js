(function () {
  function enableMermaidZoom() {
    if (typeof svgPanZoom === "undefined") {
      console.warn("svgPanZoom is not loaded.");
      return;
    }

    document.querySelectorAll(".mermaid svg").forEach((svg, index) => {
      if (svg.dataset.zoomEnabled === "true") return;

      svg.dataset.zoomEnabled = "true";
      svg.style.width = "100%";
      svg.style.height = "600px";
      svg.style.border = "1px solid var(--table-border-color, #ddd)";
      svg.style.borderRadius = "8px";

      svgPanZoom(svg, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.2,
        maxZoom: 10
      });
    });
  }

  window.addEventListener("load", function () {
    setTimeout(enableMermaidZoom, 500);
  });
})();
