function drawImage(imageObj) {
  var canvas = document.getElementById('itec-canvas');
  var context = canvas.getContext('2d');
  

  var x = 0;
  var y = 0;
  var w = imageObj.width;
  var h = imageObj.height;

  // rotation + zuschneiden/skalieren
  context.translate(130, 35); 
  context.rotate(0.75);
  context.drawImage(imageObj, x-64, y-64, w/2, h/2);
  
  var imageData = context.getImageData(x, y, w, h);
  var data = imageData.data;
}
   
var imageObj = new Image();

imageObj.onload = function() {
  drawImage(this);
};

imageObj.src = '../img/Testbild-Katzenkopp.jpg';
