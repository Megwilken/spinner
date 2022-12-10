const array = ['\r|      ', '\r/      ','\r-      ','\r\\      ', '\r|      ', '\r/      ','\r-      ', '\r\\      ', '\r|     \n'];

let i = 0;
for (let char of array) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i);
  i += 200;
}