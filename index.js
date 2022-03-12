let nomor = prompt("input nilai?");

let numberx = nomor;
if (numberx <= 100 && numberx >= 80) {
  alert("A");
} else if (numberx <= 80 && numberx >= 60) {
  alert("B");
} else if (numberx <= 60 && numberx >= 40) {
  alert("C");
} else if (numberx <= 40 && numberx >= 0) {
  alert("D");
} else {
  alert("Something Wrong");
} 