document.addEventListener("DOMContentLoaded", function () {
  var macyInstance = Macy({
    container: '.macy-container',
    trueOrder: true,
    waitForImages: false,
    margin: {
      x: 43,
      y: 42,
    },
    columns: 3,
    breakAt: {
      520: 2,
      400: 1
    }
  });

  macyInstance.runOnImageLoad(function () {
    macyInstance.recalculate(true);
  }, true);

  var macyBtn = document.getElementById("btn-gallery-expand");
  var macyBtnText = document.getElementById("btn-macy-text-placeholder");
  var macyBtnArrow = document.getElementById("arrow-bottom");
  macyBtnText.textContent = "Rozwiń";
  var macyContainer = document.getElementsByClassName("macy-container");
  var macyGradient = document.getElementsByClassName("gallery-gradient");
  macyBtn.addEventListener('click', () => {
    macyContainer[0].classList.toggle("vh-100");
    macyGradient[0].classList.toggle("d-none");
    if (macyBtnText.textContent === "Rozwiń") {
      macyBtnText.textContent = "Zwiń";
      macyBtnArrow.style.transform = "rotate(-180deg)";
    } else {
      macyBtnText.textContent = "Rozwiń";
      macyBtnArrow.style.transform = "rotate(0deg)";
    }
  })
  var myCarousel = document.querySelector('#galleryControls')
  var myModalEl = document.getElementById('galleryModal')

  myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
  })


});
