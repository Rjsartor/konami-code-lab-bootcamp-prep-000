const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0

function init() {
  // your code here
   var index = 0
   var key = e.key
  document.body.addEventListener('keydown', function(e){
    
     if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        index = 0;
        alert("Congrats!");
      }
  } else {
    index = 0;
  }
   });
}
