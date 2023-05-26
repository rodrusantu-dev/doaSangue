// ANIMAÇÃO
// Faz o texto ir aparecendo a medida que a tela é rolada.

document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".animated-section");

    function checkSectionVisibility() {
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var bounding = section.getBoundingClientRect();

        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          section.classList.add("visible");
        }
      }
    }

    checkSectionVisibility();

    window.addEventListener("scroll", checkSectionVisibility);
    window.addEventListener("resize", checkSectionVisibility);

});

