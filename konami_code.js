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
  $(document).keydown(function(keyEvent) {
  function onKeyDownHandler(e) {
  const key = e.key;
    if (key === alphabet[index]) {
      index++;
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
    } else {
      index = 0;
    }
  }  
}
}
init()

