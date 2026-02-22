document.addEventListener("DOMContentLoaded", () => {
  const faceTrackingBtn = document.querySelector("#faceTrackingBtn");
  const imageTrackingBtn = document.querySelector("#imageTrackingBtn");

  faceTrackingBtn.addEventListener("click", () => {
    window.location.href = "face.html";
  });

  imageTrackingBtn.addEventListener("click", () => {
    window.location.href = "image.html";
  });
});
