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
    
     if (e.key === codes[index]) {
      index++;
      if (e.index === codes.length) {
        index = 0;
        // if yes, you passed, congrats!
        alert("Congrats!");
      }
   // if key doesn't match current index in code array, then reset the index to zero
  } else {
    index = 0;
  }
   });
}
