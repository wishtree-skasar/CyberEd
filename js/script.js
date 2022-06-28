$(document).ready(function () {
  $(".next").click(function () {
    var current_tab = $(this).parent();
    var next_tab = $(this).parent().next();

    current_tab.hide();
    next_tab.show();
    $("#progressbar li").each(function () {
      $(this).removeClass("active");
    });
    $("#progressbar li").eq($("fieldset").index(next_tab)).addClass("active");
    $("#progressbar li")
      .eq($("fieldset").index(current_tab))
      .addClass("completed");
    $("#progressbar li").each(function () {
      if ($(this).hasClass("completed")) {
        $("#progressbar li.completed span:first-child").text("");
        $("#progressbar li.completed span:first-child").html(
          "<i class='fa-solid fa-check'></i>"
        );
      }
    });
  });

  $("ul > li > a").each(function () {
    var url = window.location.href;
    var href = $(this).prop("href");
    if (url.indexOf(href) > -1) {
      $(this).addClass("current");
    }
  });
  $(".course-modules").click(function () {
    $(".course-plan-module-wrapper").css({ display: "none" });
    $(".add-module-wrapper").css({ opacity: "1" });
    $(".saveCourseContent").css({ display: "block" });
  });

  $(".category-info-show").on("click", function () {
    if ($("#coursers-detailsInfo").is(":hidden")) {
      $("#coursers-detailsInfo").show();
      $(".category-info-show").text("Hide");
    } else {
      $("#coursers-detailsInfo").hide();
      $(".category-info-show").text("Show");
    }
  });
});

// Modal for user management - view details
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

// modal for manage category -- view details
const modalCategory = document.querySelector(".modal-category");
const triggerCategory = document.querySelector(".trigger-category");
const closeBtn = document.querySelector(".close-button");

function toggleCategoryModal() {
  modalCategory.classList.toggle("show-modal");
}

triggerCategory.addEventListener("click", toggleCategoryModal);
closeBtn.addEventListener("click", toggleCategoryModal);

// Add category modal
const modalAddCategory = document.querySelector(".modal-add-category");
const triggerAddCategory = document.querySelector(
  ".manage-category-addCategory"
);
const closeAddBtn = document.querySelector(".close-button1");

function toggleAddCategoryModal() {
  modalAddCategory.classList.toggle("show-addCategory-modal");
}

triggerAddCategory.addEventListener("click", toggleAddCategoryModal);
closeAddBtn.addEventListener("click", toggleAddCategoryModal);
