function f78() {
  var flag_work_report = $('#issue_custom_field_values_111').val();
  //console.log('test78.js');
  if (flag_work_report == "有") {
    $('.add_report1').css('display', 'inline');
  }
  else {
    $('.add_report1').css('display', 'none');
  }
}

$('div#wrapper').mouseover(function(){
  f78();
});