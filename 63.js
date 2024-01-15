// API Key 取得
var api_key = ViewCustomize.context.user.apiKey;
var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';

// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();

// 営業起票親チケットのトラッカー一覧
var tracker_list1 = ['7', '8', '9', '21', '25'];

// 要発注書/作業指示書チケットのトラッカー一覧
var tracker_list2 = ['16', '24'];

// 入出庫チケットのトラッカー一覧
var tracker_list3 = ['36', '37', '39', '45', '46'];

// TC起票のブロー機問い合わせトラッカー
var tracker_list4 = ['12', '13'];

if (tracker_list1.includes(tracker_id)) {
  $('#issue_due_date').after('<br>編集不要');
} else if (tracker_list2.includes(tracker_id)) {
  $('#issue_custom_field_values_152').after('<br>作業開始日の2日前に「未」の場合、「済」になるまでアラートメールが入ります。<br>発注書/指示書送付後「済」に変更するか、開始日の修正を行って下さい。');
} else if (tracker_list3.includes(tracker_id)) {
  $('#issue_custom_field_values_157').after('<br>当日連絡可能な番号を記入してください。');
  //20230817 チケットにファイル添付ではなくBOXのリンクを張り付ける運用としたため
  //$('input[name="issue[custom_field_values][203][dummy][file]"]').after('<br><a href="https://marubeni.app.box.com/file/1282759271951">出庫明細のテンプレートはこちら</a>');
  //$('input[name="issue[custom_field_values][203][dummy][file]"]').after('<br><span style="font-size: larger;">※出庫内容のエクセルのLINKを貼り付けてください</span>');
  $('#issue_custom_field_values_217').after('<br>作成した出庫内容のエクセルLINKを貼り付けてください。<br><a href="https://marubeni.app.box.com/file/1282759271951">※出庫明細のテンプレートはこちら</a><br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
  $('#issue_custom_field_values_161').after('<br><a href="https://marubeni.app.box.com/file/1282759252751">※無償判定シートはこちら</a>');
　//20230817 value 236に「作成した資料はこちらに格納」のURLを追加
  $('#issue_custom_field_values_220').after('<br>選択肢に合わせて資料LINKを無償の理由(LINK)に貼り付けてください。<br>有償商品在庫：在庫価格100万円以上 → <a href="https://www.styleflow.jp/kumade/cupflow">決裁申請書類</a><br>　　　　　　　在庫価格100万円未満 →<a href="https://www.google.com/"> 経理部長承認済みレター</a><br>無償商品在庫： <a href="https://marubeni.app.box.com/file/1282759252751">無償判定シート</a>');
  $('#issue_custom_field_values_233').after('<br>入庫内容のエクセルのLINKを貼り付けてください');
  $('#issue_custom_field_values_236').after('<br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
　//20230817 value215&214に「作成した資料はこちらに格納」のURLを追加
  $('#issue_custom_field_values_215').after('<br>※出庫後に在庫管理担当者が報告書の添付をお願いします。<br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
  $('#issue_custom_field_values_214').after('<br>※入庫後に在庫管理担当者が報告書の添付をお願いします。<br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
  //20230817追加
  $('#issue_custom_field_values_221').after('<br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
  $('#issue_custom_field_values_234').after('<br><a href="https://marubeni.app.box.com/folder/222063186829">※作成した資料はこちらに格納</a>');
  $('#issue_watcher_user_ids_').after('<br>　　　　　　　　　　　　　　　　※チケットの進捗状況を確認したい場合は自分をウォッチャー追加してください');
} else if (tracker_list4.includes(tracker_id)) {
  $('#issue_custom_field_values_53').after('<br>※上記トラブルタイトルは客先に公表しますのでご留意ください。');
}

// コメントを削除するコードを追加
$('#issue_watcher_user_ids_').next('br').remove();
$('#issue_watcher_user_ids_').next('br').remove(); // ブレークタグも削除
$('#issue_watcher_user_ids_').remove(); // コメントを含む要素を削除
