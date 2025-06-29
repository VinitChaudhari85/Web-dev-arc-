const boxes = document.querySelectorAll(".box");
const animClasses = ["tr-left", "tr-up", "tr-right", "tr-left", "tr-down", "tr-right"];
const revertAnimClasses = ["revert-tr-left", "revert-tr-up", "revert-tr-right", "revert-tr-left", "revert-tr-down", "revert-tr-right"]

// Animate one-by-one
function animateBoxes() {
  boxes.forEach((box, i) => {
    setTimeout(() => {
      box.classList.remove(revertAnimClasses[i]);
      box.classList.add(animClasses[i]);
    }, i * 500); // staggered by 500ms
  });
}

// Revert one-by-one (after all animations finish)
function revertBoxes() {
  boxes.forEach((box, i) => {
    setTimeout(() => {
      box.classList.remove(animClasses[i]);
      box.classList.add(revertAnimClasses[i]);
    }, i * 500);
  });
}

// Full loop
function main() {
  animateBoxes();

  // After all 6 boxes finish animating (6 x 500ms = 3s), start revert
  setTimeout(() => {
    revertBoxes();
  }, boxes.length * 500 + 300); // small delay before reverting

  // Run this loop again after full cycle (forward + backward = 6s + gap)
  setTimeout(main, boxes.length * 1000 + 600);
}

main();
