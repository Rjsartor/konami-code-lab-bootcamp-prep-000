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
var keys = []

function init() {
  // your code here
   var body = document.body;
   body.keydown(function(keyEvent) {
      keys.push(keyEvent.keyCode);
      if ( keys.length > codes.length ) {
            keys.shift();
          }
  })
}
