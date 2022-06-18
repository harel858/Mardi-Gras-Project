// gets elements
const parah = document.getElementsByTagName("p");
const header5 = document.getElementsByTagName("h5");

for (let p = 0; p < parah.length; p++) {
  parah[p].className = "fw-normal  text-wrap fs-5";
}

for (let h5 = 0; h5 < header5.length; h5++) {
  header5[h5].className = "fw-bold";
}

const indians = document.querySelector(".bg-custom");
const floats = document.querySelector(".bg-floats");
const trees = document.querySelector(".bg-trees");

const fancybox = [indians, floats, trees];
fancybox.forEach((box) => {
  box.addEventListener("click", () => {
    window.location = 
  });
});
