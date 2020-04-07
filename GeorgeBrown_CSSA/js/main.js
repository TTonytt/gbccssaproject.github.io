const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})
/*end of menu slide out*/


'use strict';
/*typer*/
var currentText = 0;
var headerText = ["Connect Students", "Connect Chinese", "Connect Canadian", "Connect East & West"];
var divText = document.getElementById("text-to-toggle");
document.onload = setTimeout(function (){ changeHeaderText(); }, 500);
function changeHeaderText()
{
    if (currentText === headerText.length - 1) currentText = 0;
    else currentText += 1;
    deleteHeaderText();
}
function deleteHeaderText()
{
    if (divText.innerHTML.length === 0) setTimeout(function(){typeHeaderText();}, 100);
    else
    { 
        divText.innerHTML = divText.innerHTML.substring(0, divText.innerHTML.length - 1);
        setTimeout(function(){deleteHeaderText();}, 100);
    }
}
function typeHeaderText()
{
    if (divText.innerHTML.length === headerText[currentText].length) setTimeout(function(){changeHeaderText();}, 2000);
    else
    {
        divText.innerHTML = headerText[currentText].substring(0, divText.innerHTML.length + 1);
        setTimeout(function(){typeHeaderText();}, 100);
    }
}
/*end of typer*/