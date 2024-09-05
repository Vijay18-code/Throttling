const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1542653357-c41d35e87f82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
    );

    div.appendChild(img);

    document.body.appendChild(div);
    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
