(function() {

  // var accordian=[];
  var accordianItems = document.querySelectorAll('.accordian section');
  for (i = 0; i < accordianItems.length; ++i) {
    var header = accordianItems[i].children[0];
    header.addEventListener('click', accordianHeaderClick);
    addRemovelink(accordianItems[i].children[1]);
  }

  function accordianHeaderClick(e) {
    var section = e.target.parentNode.parentNode;
    var content = section.children[1];
    // if (content.classList.contains("open")) {
    //   content.classList.remove("open");
    // } else {
    //   content.classList.add("open");
    // }
    // toggleAccordian(content);
    for (var i = 0; i < accordianItems.length; i++) {
      var c = accordianItems[i].children[1];
      if(c!=content && c.clientHeight>0){
        close(c);
      }
    }
    if(content.clientHeight==0){
      open(content);
    }
  }

  function addRemovelink(content) {
    var div = document.createElement("div");
    div.className = 'accordian-remove  btn';
    var txt = document.createTextNode("Remove section");
    div.appendChild(txt);
    content.appendChild(div);
    div.addEventListener('click', accordianRemoveClick);
  }

  function accordianRemoveClick(e){
    var section = e.target.parentNode.parentNode;
    section.parentNode.removeChild(section);
  }

  function open(content) {
    var h = 0;
    var i = setInterval(function() {
      if (h < content.scrollHeight) {
        h += 1;
        content.style.height = h+'px';
      } else {
        clearInterval(i);
      }
    }, 5);
  }

  function close(content) {
    var h = Math.min(content.scrollHeight, content.clientHeight);
    i = setInterval(function() {
      if (h > 0) {
        h -= 1;
        content.style.height = h+'px';
      } else {
        clearInterval(i);
      }
    }, 5);
  }

})();
