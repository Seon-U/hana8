console.log("----------------depthTimer----------------------");
const depthTimer = (sec) =>
  new Promise((resolve, reject) => {
    console.log(`depth${sec}`, new Date());
    // setTimeout(resolve, sec * 1000, sec + 1);
    setTimeout(() => {
      if (sec >= 3) reject();
      else resolve(sec + 1);
    }, sec * 1000);
  });
depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
