function drawImage(imageObj) {
  var canvas = document.getElementById('itecCanvas');
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
  
  // bild schwarzweiss machen (FIXME fuer Schluss-Abgabe)
  /* for(var i = 0; i < data.length; i += 4) {
    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
  
  context.putImageData(imageData, x-64, y-64);
  */
}
   
var imageObj = new Image();

imageObj.onload = function() {
  drawImage(this);
};

imageObj.src = '../img/Testbild-Katzenkopp.jpg';
