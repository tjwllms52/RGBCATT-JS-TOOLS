function getPosition( element ) {
    var x = 0;
    var y = 0;
    while( element && !isNaN( element.offsetLeft ) && !isNaN( element.offsetTop ) ) {
    x += element.offsetLeft - element.scrollLeft;
    y += element.offsetTop - element.scrollTop;
    element = element.offsetParent;
    }
    return { top: y, left: x };
}

function scroll_element(element) {
  var item = element;
  var pos = getPosition(item);
  window.scrollTo(pos['left'], pos['top']);
}

function scroll(ID) {
  var item = document.getElementById(ID);
  var pos = getPosition(item);
  window.scrollTo(pos['left'], pos['top']);
}
