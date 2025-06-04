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
      r3.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const r4 = new rive.Rive({
    src: "asset/loan_loader_load.riv",
    canvas: document.getElementById("canvas4"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r4.resizeDrawingSurfaceToCanvas();
    },
  });

  const r5 = new rive.Rive({
    src: "asset/loan_loader_bank.riv",
    canvas: document.getElementById("canvas5"),
    autoplay: true,
    stateMachines: "anime",
    onLoad: () => {
      r5.resizeDrawingSurfaceToCanvas();
    },
  });


    const r6 = new rive.Rive({
    src: "asset/test_01.riv",
    canvas: document.getElementById("canvas6"),
    autoplay: true,
    stateMachines: "Story_1",
    onLoad: () => {
      r6.resizeDrawingSurfaceToCanvas();
    },
  });