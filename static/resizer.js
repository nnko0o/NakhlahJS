document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";

  Split(["#split-0", "#split-1"], {
    minSize: 0,
    gutterSize: 13,
  });
});
