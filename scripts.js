const r1 = new rive.Rive({
    src: "asset/loan.riv",
    canvas: document.getElementById("canvas1"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r1.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const r2 = new rive.Rive({
    src: "asset/loans2.riv",
    canvas: document.getElementById("canvas2"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r2.resizeDrawingSurfaceToCanvas();
    },
  });
  