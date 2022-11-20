$(() => {
  $(".showcase__navigation a").click(function (e) {
    e.preventDefault();
    $(".showcase__navigation a").removeClass("active");
    $(this).addClass("active");
  });
});
