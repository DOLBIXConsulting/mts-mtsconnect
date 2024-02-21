$(function targetRemoveDateTicket () {
  // プロジェクトid取得
  var project_id = $('#issue_project_id').val();
  if (typeof project_id === "undefined") {
    // プロジェクトのセレクトBOXがない場合の取得方法
    project_id = ViewCustomize.context.project.id;
  }
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();

  $(document).on('change', '#issue_status_id', function removeDate() {
    // ステータスの取得
    var status_id = $(this).val();

    // 対象トラッカー
    var tracker_list1 = ['14', '28', '16', '24', '22', '29', '20', '42', '26', '31', '32', '33', '27', '34', '35']; 
    var target_status = '102'

    if (tracker_list1.includes(tracker_id) === true && target_status === status_id) {
      $('#issue_start_date').val('');
      $('#issue_due_date').val('');
    }
  })
})
