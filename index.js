// Your code here
const dodger = document.getElementById("dodger");
undefined
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right= parseInt(rightNumbers, 10);

  if (right > 40 && right < 360) {
    dodger.style.left = `${right + 1}px`;
  }else{
    dodger,style.left = `${right - 1}px`
  }
}
document.addEventListener('keydown', (e)=>{
  if (e.key === "ArrowRight"){
    moveDodgerRight()
  }
})
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

  