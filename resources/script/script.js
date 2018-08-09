//* sub__nav * Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have //multiple dropdowns without any conflict
//var dropdown = document.getElementsByClassName("nav__sub");
//var i;

//for (i = 0; i < dropdown.length; i++) {
//  dropdown[i].addEventListener("click", function() {
//    this.classList.toggle("nav__sub--active");
//    var dropdownContent = this.nextElementSibling;
//    if (dropdownContent.style.display === "block") {
//      dropdownContent.style.display = "none";
//    } else {
//      dropdownContent.style.display = "block";
//    }
//  });
//}

//* Like & Add-to-Cart Click Function *//

$(document).ready(function() {

  // Specific code for the heart fill toggle
  $(".product__list__item--icons a .fa-heart").click(function(e) {
    $(this).toggleClass("far").toggleClass("fas"); // Toggle the filling !
  });

  // Action when clicking on a link
  $(".product__list__item--icons a").click(function(e) {
    e.preventDefault(); // Modified: stop link # from loading
    $(this).toggleClass("selected"); // Toggle the colored class !
  });

});