const codes = [
   "ArrowUp",	   "ArrowUp",
   "ArrowUp",	   "ArrowUp",
   "ArrowDown",	   "ArrowDown",
   "ArrowDown",	   "ArrowDown",
   "ArrowLeft",	   "ArrowLeft",
   "ArrowRight",	   "ArrowRight",
   "ArrowLeft",	   "ArrowLeft",
   "ArrowRight",	   "ArrowRight",
   "b",	   "b",
   "a"	   "a"
];	];
 function init() {	function init() {
  // your code here	  let index = 0;
  const input = document.querySelector('input')
  document.body.addEventListener('keydown', function(e) {
    const key = e.key
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}	}

function init() {
  var index = 0
  // your code here
  document.addEventListener("keydown", function(e) {
    function onKeyDownHandler(e) {
  const keyName = e.key;
    if (keyName === codes[index]) {
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

