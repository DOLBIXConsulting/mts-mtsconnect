// 移動日のトラッカー
var tracker_list = ['26'];

// 開始日の入力イベント
$('#issue_start_date').change(function hoge38() {

// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();

// トラッカーが移動日であれば、期日に同じ値をセット
  if (tracker_list.includes(tracker_id) === true) { 
   var start_date = $(this).val();
   $('#issue_due_date').val(start_date);
  };
});