/*  check cookie for name of style */
if( readCookie( "style" ) == null ){ // wenn noch kein cookie existiert
  createCookie( "style", "default");
  console.log( "Cookie erstellt");
}

var styleName = readCookie( "style");
console.log( "Cookie gefunden: " + styleName );

if( styleName == "rot" ){
  console.log( "setze style: " + styleName );
  document.write('<link rel="stylesheet" href="../css/rot.css" type="text/css">');
}
else {
  console.log( "setzte default style" );
  document.write('<link rel="stylesheet" href="../css/style.css" type="text/css">');
}

function changeStyle( styleName ){
  console.log( "wechsel auf style:" + styleName );
  createCookie( "style", styleName );
  window.location.reload(true); 
}

// library functions - do not change 'em!
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

