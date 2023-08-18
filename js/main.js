document.addEventListener("DOMContentLoaded", function () {
  var macyInstance = Macy({
    container: '.macy-container',
    trueOrder: false,
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

});
