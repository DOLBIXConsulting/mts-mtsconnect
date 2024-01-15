// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();
//console.log(tracker_id);
// 入出庫依頼チケットのトラッカー一覧
var tracker_list = ['36','37','45','46'];
if (tracker_list.includes(tracker_id) === true) {
      var user_mail = 'gb_zaiko@jpn.tec.marubeni.co.jp';   
      var user_id = 184
      var user_name = '在庫担当-'
      // ウォッチャー の設定
      var length = $('span#watchers_inputs').find('#issue_watcher_user_ids_'+user_id).length;
      //console.log(length);
      if (length == 0) {
        // console.log('test')
        $('span#watchers_inputs').append(
        $('<label id="issue_watcher_user_ids_'+user_id+'" class="floating">').append(
        $('<input type="checkbox" name="issue[watcher_user_ids][]" value="'+user_id+'" checked="checked">'),
        )
        )
        $('label#issue_watcher_user_ids_'+user_id).append(user_name)
      }
};