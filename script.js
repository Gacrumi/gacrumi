window.addEventListener("load", () => {
  // ===========================
  // ELEMENTOS
  // ===========================
  const intro = document.querySelector(".intro");
  const overlay = document.querySelector(".overlay");
  const header = document.querySelector(".home-header");
  const headerVideo = document.querySelector(".bg-header-video");
  const headerText = header ? [...header.querySelectorAll(".site-title, .menu")] : [];
  const contactBox = document.querySelector(".contact-box");

  // ===========================
  // CONFIGURAÇÕES DE FADE
  // ===========================
  const fadeStartTime = 4000; // quando inicia o fade do intro (ms)
  const fadeDuration = 1000;  // duração do fade do intro (ms)
  const textDelay = 1000;     // delay do texto do header após o fade do intro

  // ===========================
  // HOMEPAGE: fade do intro e exibição do header
  // ===========================
  if (intro || header) {
    // Header e texto invisíveis inicialmente
    if (header) {
      header.style.opacity = 0;
      header.style.pointerEvents = "none";
    }
    headerText.forEach(el => el.style.opacity = 0);

    // Função de fade do intro
    const fadeIntro = () => {
      if (overlay) {
        overlay.style.transition = `opacity ${fadeDuration / 1000}s ease`;
        overlay.style.opacity = 1;
      }
      if (intro) {
        intro.style.transition = `opacity ${fadeDuration / 1000}s ease`;
        intro.style.opacity = 0;
      }

      // Remove intro depois do fade
      setTimeout(() => {
        if (intro) intro.remove();
      }, fadeDuration);

      // Mostra header e vídeo imediatamente
      if (header) {
        header.style.transition = `opacity 0.8s ease`;
        header.style.opacity = 1;
        header.style.pointerEvents = "auto";
      }
      if (headerVideo) {
        headerVideo.currentTime = 0;
        headerVideo.play().catch(() => {});
      }

      // Mostra o texto após o delay
      setTimeout(() => {
        headerText.forEach(el => {
          el.style.transition = `opacity 0.8s ease`;
          el.style.opacity = 1;
        });
      }, textDelay);
    };

    setTimeout(fadeIntro, fadeStartTime);
  }

  // ===========================
  // CONTACT PAGE: fade-in da contact-box
  // ===========================
  if (contactBox) {
    // Inicialmente invisível
    contactBox.style.opacity = 0;
    contactBox.style.transform = "translateY(30px)";
    contactBox.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    // Aparece com delay
    setTimeout(() => {
      contactBox.style.opacity = 1;
      contactBox.style.transform = "translateY(0)";
    }, 200);
  }

  // ===========================
  // SCROLL-FADE PARA ELEMENTOS COM .scroll-fade
  // ===========================
  const elements = document.querySelectorAll('.scroll-fade');
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    // Mostra imediatamente, porque algumas páginas não têm scroll
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300);
  });
});
