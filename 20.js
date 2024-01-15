$(function() {
  // TCがボールを持っているものだけ色を変えて表示
  $('td:contains("TC顧客ヒアリング中")').parent("tr.issue").css("background", "#7fffd4");
})