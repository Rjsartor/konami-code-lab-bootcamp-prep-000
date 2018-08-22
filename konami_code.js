const codes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
];

var index = 0

function init() {
  // your code here
  document.body.addEventListener("keydown", function(e) {
  const key = e.key;
    if (key === codes[index]) {
      index++;
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
    } else {
      index = 0;
    }
  }  
  )
}
init()

