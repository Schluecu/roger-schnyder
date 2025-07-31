function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("logo");
  if (x.style.display === "grid") {
    x.style.display="none";
    y.style.display="block";
    z.style="width:5.5vw;height:5.5vw;min-width:50px;min-height:50px;
    @media (prefers-color-scheme: dark) {color: gainsboro;}
    @media (prefers-color-scheme: light) {color: black;};"
  } else {
    y.style.display="none";
    z.style="width:5.5vw;height:5.5vw;min-width:50px;min-height:50px;color:gray;"
    x.style="display:grid;width:40vw;padding-left:5vw;padding-top:5vmax;
    @media (prefers-color-scheme: dark) {color: gainsboro;}
    @media (prefers-color-scheme: light) {color: black;};
  }
}
