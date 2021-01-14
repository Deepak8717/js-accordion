let accItem = document.getElementsByClassName("accordionItem");
let accHd = document.getElementsByClassName("accordionItemHeading");

for (i = 0; i < accHd.length; i++) {
  accHd[i].addEventListener("click", toggleItem);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
