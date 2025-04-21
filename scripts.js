const r1 = new rive.Rive({
    src: "asset/loan_loader_fetch.riv",
    canvas: document.getElementById("canvas1"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r1.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const r2 = new rive.Rive({
    src: "asset/loan_loader_verify.riv",
    canvas: document.getElementById("canvas2"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r2.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const r3 = new rive.Rive({
    src: "asset/loan_loader_badge.riv",
    canvas: document.getElementById("canvas3"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r2.resizeDrawingSurfaceToCanvas();
    },
  });
  