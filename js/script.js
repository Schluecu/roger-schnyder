function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("logo");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="block";
    z.style="color: black;outline:0vmax black"
  } else {
    y.style.display="none";
    z.style="color: transparent;outline:0.07vmax black";
    x.style="width:40vw;padding-left:5vmax;padding-top:5vmax;color: black";
  }
}
