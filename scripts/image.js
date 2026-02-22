document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector("#backBtn");
  const playBtn = document.querySelector("#playBtn");
  const downloadBtn = document.querySelector("#downloadBtn");

  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const soundMap = {
    "trumpet-target": "trumpetSound",
    "kazoo-target": "kazooSound",
    "flute-target": "fluteSound",
    "harmonica-target": "harmonicaSound",
  };

  const soundToTarget = {
    trumpetSound: "trumpet-target",
    kazooSound: "kazoo-target",
    fluteSound: "flute-target",
    harmonicaSound: "harmonica-target",
  };

  let currentSound = null;
  let isAnimating = false;

  Object.keys(soundMap).forEach((targetId) => {
    const target = document.querySelector(`#${targetId}`);
    const soundId = soundMap[targetId];

    if (target) {
      target.addEventListener("targetFound", () => {
        currentSound = soundId;
        playBtn.style.display = "block";
      });

      target.addEventListener("targetLost", () => {
        currentSound = null;
        playBtn.style.display = "none";
      });
    }
  });

  playBtn.addEventListener("click", () => {
    if (currentSound && !isAnimating) {
      isAnimating = true;
      const audio = document.querySelector(`#${currentSound}`);
      const targetId = soundToTarget[currentSound];
      const target = document.querySelector(`#${targetId}`);
      const model = target ? target.querySelector("a-gltf-model") : null;

      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

      if (model && model.object3D) {
        const object3D = model.object3D;
        const originalScale = {
          x: object3D.scale.x,
          y: object3D.scale.y,
          z: object3D.scale.z,
        };
        const originalRotation = {
          x: object3D.rotation.x,
          y: object3D.rotation.y,
          z: object3D.rotation.z,
        };

        object3D.scale.set(
          originalScale.x * 1.2,
          originalScale.y * 1.2,
          originalScale.z * 1.2,
        );

        let frame = 0;
        const totalFrames = 100;
        const animInterval = setInterval(() => {
          const offset = Math.sin(frame * 0.15) * 0.15;
          object3D.rotation.z = originalRotation.z + offset;

          frame++;
          if (frame >= totalFrames) {
            clearInterval(animInterval);

            object3D.scale.set(
              originalScale.x,
              originalScale.y,
              originalScale.z,
            );
            object3D.rotation.set(
              originalRotation.x,
              originalRotation.y,
              originalRotation.z,
            );
            isAnimating = false;
          }
        }, 50);
      }
    }
  });

  downloadBtn.addEventListener("click", async () => {
    const zip = new JSZip();
    const markerFiles = [
      "target-0.jpg",
      "target-1.jpg",
      "target-2.jpg",
      "target-3.jpg",
    ];

    try {
      for (const file of markerFiles) {
        const response = await fetch(`markers/${file}`);
        const blob = await response.blob();
        zip.file(file, blob);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "markers.zip");
    } catch (error) {
      console.error("Error downloading markers:", error);
      alert("Failed to download markers");
    }
  });
});
