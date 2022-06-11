// gets elements
const parah = document.getElementsByTagName("p");
const header5 = document.getElementsByTagName("h5");

for (let p = 0; p < parah.length; p++) {
  parah[p].className = "fw-normal text-start text-wrap fs-5";
}

for (let h5 = 0; h5 < header5.length; h5++) {
  header5[h5].className = "fw-bold";
}
