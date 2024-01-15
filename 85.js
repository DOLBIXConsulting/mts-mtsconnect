// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();
//console.log(tracker_id);
// 入出庫依頼チケットのトラッカー一覧
var tracker_list = ['36','45','46'];

//console.log('85.js')

$(':input#issue_custom_field_values_158,:input#issue_custom_field_values_159').change(function() {

  if (tracker_list.includes(tracker_id) === true) {

    var date1 = $('#issue_custom_field_values_158').val(); 
    var date2 = $('#issue_custom_field_values_159').val();

    var day1 = date1.replace('-', '');
    var day2 = date2.replace('-', '');

    //console.log(day1, day2)

    if (day1 > day2) {
      //console.log('error');
      $('input[name="commit"]').attr('type', 'wait');
      $('input[name="commit"]').prop('disabled', true);
      $('input[name="continue"]').attr('type', 'wait');
      $('input[name="continue"]').prop('disabled', true);
      $('input[name="continue"]').after('<p id="wait_memo_report" style="font-weight:bold; color:red">出庫希望日は納入希望日より前の日を指定してください</p>')
    }
    else {
      //console.log('correct');
      $('input[name="commit"]').attr('type', 'submit');
      $('input[name="commit"]').prop('disabled', false);
      $('input[name="continue"]').attr('type', 'submit');
      $('input[name="continue"]').prop('disabled', false);
      $('p#wait_memo_report').remove();
    }
  }
});
