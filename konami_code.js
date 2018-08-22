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
   var index =0
  document.body.addEventListener('keydown', function(e){
    
     if (e.key === code[index]) {
      index++;
       // if still in the loop, check if index is equal to code array length
      if (e.index === code.length) {
        // reset the index counter
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
