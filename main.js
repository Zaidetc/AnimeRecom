
function opennav() {
   document.getElementById("nav")
      .style.width = "200px";
}

function closenav(){
   document.getElementById("nav")
   .style.width = "0";
}

setTimeout(function() {
   let viewheight = window.innerHeight;
   let viewwidth = window.innerWidth;
   let viewport = document.querySelector("meta[name=viewport]");
   viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
}, 300);

/* js for search system */



 /* Declare variables */  

function myFunction() {


var input, filter, ul, li, a, i;
input=document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");


 /* Loop through all list items, and hide
 those who don't match the search query */ 

for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];

if (a.innerHTML.toUpperCase()
.indexOf(filter) > -1) {
  li[i].style.display = "";

    } else {
      li[i].style.display = "none";

        }
    }
}
