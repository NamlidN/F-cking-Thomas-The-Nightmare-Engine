document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angelDeg = angel(mouseX, mouseY, anchorX, anchorY);

  console.log(angelDeg);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach(eye => {
    eye.style.transform=`rotate(${90 + angelDeg}deg)`;
  })
});
function angel(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}

