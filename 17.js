$(function() {
  // プロジェクトid取得
  var project_id = $('#issue_project_id').val();
// トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  // console.log(tracker_id);
// 子チケットのトラッカー一覧
  var tracker_list = ['14','16','17','19','22','23','24', '20', '26', '27'];
  if (tracker_list.includes(tracker_id) === true) {
    $('.issue').css('background-color', '#f0f8ff');
    $('.box').css('background-color', '#f0f8ff');
    // 追加ボタン削除
    $('#issue_tree').find('a').remove();
    $('#relations').find('a').remove();
  } else {
//親チケットの場合
    $('.issue').css('background-color', '#ffffdd');
    $('.box').css('background-color', '#ffffdd');
    $('#issue_tree').css('background-color', '#f0f8ff;');
    $('#issue_tree').css('padding', '2px'); 
    $("#issue_tree").find("tr").css('background-color', '#f0f8ff;');
    $("#issue_tree").find("a").css('background-color', '#f0f8ff;');
  }
})