$(function() {

  $("#content")
    .css({
      "width": "auto",
      "padding-right": "20px"
    });

  var sidebar = $("#sidebar");
  var baseHeight = sidebar.height();
  var baseWidth  = sidebar.width();

  sidebar
    .css({
      "background-color": "#EEEEEE",
      "border": "1px solid #DDDDDD",
      "padding": "5px",
      "position": "absolute",
      "right": "0",
      "width": "5px",
      "height": "5px",
      "overflow": "hidden"
    })
    .append(
      $("<div/>")
        .css({
          "border-bottom": "2px solid #AFAFAF",
          "border-left": "2px solid #AFAFAF",
          "position": "absolute",
          "bottom": "3px",
          "left": "3px",
          "width": "5px",
          "height": "5px"
        })
    )
    .mouseover(function() {
      $(this).stop().animate({
        "padding": "5px 5px 15px 15px",
        "width": baseWidth,
        "height": baseHeight
      });
    })
    .mouseout(function() {
      $(this).stop().animate({
        "padding": "5px",
        "width": "5px",
        "height": "5px"
      });
    });
});