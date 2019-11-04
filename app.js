document.addEventListener("DOMContentLoaded", function() {
  var menuElems = document.querySelectorAll(".collapsible");
  var menuInstances = M.Collapsible.init(menuElems);

  var mobileNavElems = document.querySelectorAll(".sidenav");
  var mobileNavInstances = M.Sidenav.init(mobileNavElems);
});

console.log("whattup");