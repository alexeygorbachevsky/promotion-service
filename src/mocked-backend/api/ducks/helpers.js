export const wait = sec =>
  new Promise(res => {
    setTimeout(() => {
      res();
    }, sec);
  });
