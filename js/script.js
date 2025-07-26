function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("logo");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="block";
    z.style="color: black;outline:0 black;"
  } else {
    y.style.display="none";
    z.style="color: transparent;outline:calc(3.5vmax/50) black;";
    x.style="width:20vw;padding-top:5vw;display:block; float:left; color: transparent;-webkit-text-stroke-color: black;-webkit-text-stroke-width: calc(3.5vmax/50);";
  }
}
