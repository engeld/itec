function changeText() {
  var textfile;

  if( window.XMLHttpRequest ) {
    textfile = new XMLHttpRequest();
  }

  textfile.onreadystatechange = function() {
    if( textfile.readyState == 4 && textfile.status == 200) {
      document.getElementById( "itec-ajax" ).innerHTML = textfile.responseText;
    }
  }

  textfile.open( "GET", "lorem-ipsum.txt", true);
  textfile.send();

}

function resetText() {
  var text = "Dieser Text wird durch Text von einem lokal vorhandenem Textfile ergänzt.";
  document.getElementById( "itec-ajax" ).innerHTML = text;
}
