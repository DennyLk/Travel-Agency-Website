function toggleNav() {
  var mySidebar = document.getElementById("mySidenav");
  var propertySidebar = document.getElementById("propertySidenav");
  var serviceSidebar = document.getElementById("servicesSidenav"); // Add reference to servicesSidenav

  // Ensure both propertySidenav and servicesSidenav are closed when opening mySidenav
  if (mySidebar.style.width === "0px" || mySidebar.style.width === "") {
    propertySidebar.style.width = "0";
    serviceSidebar.style.width = "0"; // Ensure servicesSidenav is also closed
  }

  mySidebar.style.width = mySidebar.style.width === "430px" ? "0" : "430px";
}

function openPropertyNav() {
  var mySidebar = document.getElementById("mySidenav");
  var propertySidebar = document.getElementById("propertySidenav");
  var serviceSidebar = document.getElementById("servicesSidenav"); // Add reference to servicesSidenav

  // Ensure mySidenav and servicesSidenav are closed when opening propertySidenav
  propertySidebar.style.width =
    propertySidebar.style.width === "430px" ? "0" : "430px";
  mySidebar.style.width = "0";
  serviceSidebar.style.width = "0"; // Close servicesSidenav if it's open
}

function openServiceNav() {
  var mySidebar = document.getElementById("mySidenav");
  var propertySidebar = document.getElementById("propertySidenav");
  var serviceSidebar = document.getElementById("servicesSidenav");

  // Ensure mySidenav and propertySidenav are closed when opening servicesSidenav
  serviceSidebar.style.width =
    serviceSidebar.style.width === "430px" ? "0" : "430px";
  mySidebar.style.width = "0";
  propertySidebar.style.width = "0"; // Close propertySidenav if it's open
}

// For toggling the main sidebar
document.querySelector(".hamburger").addEventListener("click", toggleNav);

// For opening propertySidenav
document
  .querySelectorAll("#mySidenav ul li")[1]
  .addEventListener("click", function (event) {
    openPropertyNav();
  });
// For opening servicesSidenav
document
  .querySelectorAll("#mySidenav ul li")[4]
  .addEventListener("click", function (event) {
    openServiceNav();
  });

// For toggling back to mySidenav from propertySidenav
document
  .querySelector("#propertySidenav a")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("propertySidenav").style.width = "0";
    document.getElementById("mySidenav").style.width = "430px";
  });

// For toggling back to mySidenav from servicesSidenav
document
  .querySelector("#servicesSidenav a")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("servicesSidenav").style.width = "0";
    document.getElementById("mySidenav").style.width = "430px";
  });
