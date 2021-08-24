$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);

    if (position >= 974) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",

    gallery: {
      enabled: true,
    },

    // other options
  });
});
