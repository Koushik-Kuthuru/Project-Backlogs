var dropdown = document.getElementsByClassName("subject-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function opensubNav() {
  document.getElementById("sub-sidenav").style.width = "250px";
}

function closesubNav() {
  document.getElementById("sub-sidenav").style.width = "0";
}