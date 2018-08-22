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

function init() {
  var index = 0
  // your code here
  document.addEventListener("keydown", function(e) {
    function onKeyDownHandler(e) {
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
  }});
}
init()

