var botaoTopo = document.querySelector(".botao-topo");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 20) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
}

botaoTopo.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

