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

//* Like & Add to Cart functions *//

$(document).ready(function() {
    $('#heart').click(function() {
        $('#heart--liked').toggle('1000');
    });
    $("#heart a").click(function(e) {
   //do something to stop link # from loading
        e.stopPropagation();
    });
});