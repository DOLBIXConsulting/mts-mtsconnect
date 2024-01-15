$(function(){
    // tracker idの取得
    var tracker_id = $('#issue_tracker_id').val();
    // 営業起票親チケットのトラッカー一覧
    var tracker_list = ['7','8','9','21','25'];
    // ステータスが完了、残課題あり/なし
    var status_list = ['61'];
    // 営業起票親チケットの場合
    if (tracker_list.includes(tracker_id) === true) {
      var status_id = $('#issue_status_id').val();
      // console.log(status_id)
      if (status_list.includes(status_id) === true ) {
        console.log('test1')
        $('#issue_status_id').after('<br>残作業無しの場合は、売上100%で仕入売上手配する<br>残作業有りの場合は、営業と要相談');

      }
    } 
});