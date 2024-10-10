var dropdown = document.getElementsByClassName("subject-dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  var buttonId = dropdown[i].id; // assume each button has a unique id
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    localStorage.setItem(buttonId + "-dropdownState", this.classList.contains("active"));
  });
}

// Check local storage on page load and set the dropdown state accordingly
for (var i = 0; i < dropdown.length; i++) {
  var buttonId = dropdown[i].id;
  var dropdownState = localStorage.getItem(buttonId + "-dropdownState");
  if (dropdownState === "true") {
    dropdown[i].classList.add("active");
    dropdown[i].nextElementSibling.style.display = "block";
  }
}

function opensubNav() {
  document.getElementById("sub-sidenav").style.width = "250px";
}

function closesubNav() {
  document.getElementById("sub-sidenav").style.width = "0";
}

