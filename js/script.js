function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("dot");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="inline-block";
    z.style="font-size:5vw; color: black;-webkit-text-stroke-color: black;-webkit-text-stroke-width: 0;";
  } else {
    y.style.display="none";
    z.style="font-size:5vw; color: transparent;-webkit-text-stroke-color: black;-webkit-text-stroke-width: calc(3.5vmax/50);";
    x.style="width:20vw;padding-top:5vw;display:inline-block; float:left; color: transparent;-webkit-text-stroke-color: black;-webkit-text-stroke-width: calc(3.5vmax/50);";
  }
}
