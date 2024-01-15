// API Key 取得
var api_key = ViewCustomize.context.user.apiKey;
var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
// プロジェクトid取得
var project_id = $('#issue_project_id').val();
if (typeof project_id === "undefined") {
  // プロジェクトのセレクトBOXがない場合の取得方法
  var project_id = ViewCustomize.context.project.id;
}
// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();
// TC起票親チケットのトラッカー一覧
var tracker_list_tc = ['10','11','12','13'];


if (tracker_list_tc.includes(tracker_id) === true) {
  
  var groups = ViewCustomize.context.user.groups;
  for (let i = 0; i < groups.length; i++) {
    // 13:営業　10:アシスタント 6:管理者
    if (groups[i].id == 13 || groups[i].id == 10) {
      //console.log(groups)
      $("a:contains('チケットを削除')").remove();
    }
  }
} 
else {
  // 何もしない 
};
