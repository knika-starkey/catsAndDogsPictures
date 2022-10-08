"use strict";
function animals(animal, n = 1) {
  for (let i = 0; i < n; i++) {
    document.write(`<img src="./images/${animal}.jpg" alt="" height="100px">`);
  }
}
animals("dog", 5);
