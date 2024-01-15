$(function(){
    // tracker idの取得
    var tracker_id = $('#issue_tracker_id').val();
    // 営業起票親チケットのトラッカー一覧
    var tracker_list = ['7','8','9','21','25'];
    // ステータスが完了、残課題あり/なし
    var status_list = ['30','41'];
    // 営業起票親チケットの場合
    if (tracker_list.includes(tracker_id) === true) {
      var status_id = $('#issue_status_id').val();
      // console.log(status_id)
      if (status_list.includes(status_id) === true ) {
        console.log('test1')
        $('div.splitcontentright:first')
          .append(
            $('<p style="text-align:left; padding-left:0px;">残課題無しの時: 仕入売上手配をする<br>残課題有りの時: 仕入売上を営業と確認する</p>')
          );
      }
    } 
});