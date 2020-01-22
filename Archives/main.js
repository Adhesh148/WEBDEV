/* ==============================================================
                    Script for Navbar
============================================================== */

const sidebarBox = document.querySelector("#box"),
  sidebarBtn = document.querySelector("#btn");

sidebarBtn.addEventListener("click", event => {
  sidebarBtn.classList.toggle("active");
  sidebarBox.classList.toggle("active");
});

window.addEventListener("keydown", event => {
  if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
    sidebarBtn.classList.remove("active");
    sidebarBox.classList.remove("active");
  }
});

/* ==============================================================
                    Script for Card Layout
============================================================== */

var $cell = $(".card");

//open and close card when clicked on card
$cell.find(".js-expander").click(function() {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell
      .not($thisCell)
      .removeClass("is-expanded")
      .addClass("is-collapsed")
      .addClass("is-inactive");
    $thisCell.removeClass("is-collapsed").addClass("is-expanded");

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass("is-inactive");
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  }
});

//close card when click on cross
$cell.find(".js-collapser").click(function() {
  var $thisCell = $(this).closest(".card");

  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
});
