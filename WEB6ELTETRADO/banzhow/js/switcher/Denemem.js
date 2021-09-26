$("#logo").css('opacity', '0');

$("#select_logo").click(function (e) {
    e.preventDefault();
    $("#logo").trigger('click');
});