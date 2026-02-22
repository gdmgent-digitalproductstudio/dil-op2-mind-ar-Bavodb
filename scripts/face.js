document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector("#backBtn");
  const toggleKazooBtn = document.querySelector("#toggleKazooBtn");
  const toggleHairBtn = document.querySelector("#toggleHairBtn");
  const playKazooBtn = document.querySelector("#playKazooBtn");
  const kazoo = document.querySelector("#kazoo");
  const kazooEntity = document.querySelector("#kazooEntity");
  const hair = document.querySelector("#hair");
  const kazooSound = document.querySelector("#kazooSound");

  let kazooVisible = true;
  let hairVisible = true;
  let isAnimating = false;

  if (hair) {
    hair.addEventListener("model-loaded", () => {
      hair.object3D.traverse((node) => {
        if (node.isMesh) {
          node.material.color.setHex(0xf4d03f);
        }
      });
    });
  }

  setTimeout(() => {
    if (kazoo && kazoo.object3D) {
      kazoo.object3D.visible = true;
      toggleKazooBtn.textContent = "Kazoo: ON";
    }
    if (hair && hair.object3D) {
      hair.object3D.visible = true;
      toggleHairBtn.textContent = "Hair: ON";
    }
  }, 1000);

  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  toggleKazooBtn.addEventListener("click", () => {
    if (kazoo && kazoo.object3D) {
      kazoo.object3D.visible = !kazoo.object3D.visible;
      kazooVisible = !kazooVisible;
      toggleKazooBtn.textContent = kazooVisible ? "Kazoo: ON" : "Kazoo: OFF";
    }
  });

  toggleHairBtn.addEventListener("click", () => {
    if (hair && hair.object3D) {
      hair.object3D.visible = !hair.object3D.visible;
      hairVisible = !hairVisible;
      toggleHairBtn.textContent = hairVisible ? "Hair: ON" : "Hair: OFF";
    }
  });

  playKazooBtn.addEventListener("click", () => {
    if (kazooSound && !isAnimating && kazoo) {
      isAnimating = true;

      kazooSound.currentTime = 0;
      kazooSound.play();

      const model3D = kazoo.object3D;
      const originalScale = model3D.scale.x;
      const originalRotation = model3D.rotation.y;

      model3D.scale.set(
        originalScale * 1.3,
        originalScale * 1.3,
        originalScale * 1.3,
      );

      const hairColors = [
        0xf9d98b, 0xff69b4, 0x00bfff, 0x32cd32, 0xff4500, 0x9370db,
      ];
      let colorIndex = 0;

      let frame = 0;
      const totalFrames = 140;

      const shakeInterval = setInterval(() => {
        const offset = Math.sin(frame * 1.0) * 0.2;
        model3D.rotation.y = originalRotation + offset;

        if (hair && hair.object3D && hairVisible && frame % 10 === 0) {
          colorIndex = (colorIndex + 1) % hairColors.length;
          hair.object3D.traverse((node) => {
            if (node.isMesh) {
              node.material.color.setHex(hairColors[colorIndex]);
            }
          });
        }

        frame++;

        if (frame >= totalFrames) {
          clearInterval(shakeInterval);
          model3D.scale.set(originalScale, originalScale, originalScale);
          model3D.rotation.y = originalRotation;

          if (hair && hair.object3D && hairVisible) {
            hair.object3D.traverse((node) => {
              if (node.isMesh) {
                node.material.color.setHex(0xf4d03f);
              }
            });
          }

          isAnimating = false;
        }
      }, 50);
    }
  });
});
