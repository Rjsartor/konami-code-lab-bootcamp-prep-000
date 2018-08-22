const codes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  "b",
  "a"
];

var index = 0

function init() {
  // your code here
   var body = document.body;
  body.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which);
     // check if key is equal to current value of index in code array
    // then loop through the array if conditions match
     if (key === code[index]) {
      // if yes, increment index by 1
      index++;
       // if still in the loop, check if index is equal to code array length
      if (index === code.length - 1) {
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
