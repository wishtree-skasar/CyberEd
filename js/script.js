$(document).ready(function () {
  $("ul > li > a").each(function () {
    var url = window.location.href;
    var href = $(this).prop("href");
    if (url.indexOf(href) > -1) {
      $(this).addClass("current");
    }
  });
  const userData = [
    {
      no: 1,
      title: "Admin",
      users: 2,
      createdOn: "27/01/2022",
    },
    {
      no: 2,
      title: "Manager",
      users: 6,
      createdOn: "27/01/2022",
    },
    {
      no: 3,
      title: "Instructor",
      users: 6,
      createdOn: "27/01/2022",
    },
    {
      no: 4,
      title: "Group Manager",
      users: 6,
      createdOn: "27/01/2022",
    },
    {
      no: 5,
      title: "Course Manager",
      users: 6,
      createdOn: "27/01/2022",
    },
  ];
  function getCells(data, type) {
    return data.map((cell) => `<${type}>${cell.title}</${type}>`).join("");
  }
  function createUserDetailsBody(Data) {
    return Data.map((row) => `<tr>${row.title}</tr>`).join("");
  }
  // document.body.insertAdjacentHTML("beforeend", createUserDetailsBody(userData));

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
