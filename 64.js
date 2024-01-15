$(function(){
    // tracker idの取得
    var tracker_id = $('#issue_tracker_id').val();
    // 営業起票親チケットのトラッカー一覧
    var tracker_list = ['7','8','9','21','25'];
    // ステータスが完了、残課題あり/なし
    var status_list = ['60'];
    // 営業起票親チケットの場合
    if (tracker_list.includes(tracker_id) === true) {
      var status_id = $('#issue_status_id').val();
      // console.log(status_id)
      if (status_list.includes(status_id) === true ) {
        console.log('test1')
        $('#issue_status_id').after('<br><span style="color:red;">子チケットの発注書/指示書送付が「済」になっていることを確認</span>');

      }
    } 
});