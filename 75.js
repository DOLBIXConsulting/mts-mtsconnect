function popupReport() {
  confirm('\r\n\r\n作業完了報告書\r\n\r\n下記の通り、作業が完了しました\r\n作業タイトル：\r\n作業日：\r\n完了日：\r\n作業者：\r\n見積番号：\r\n契約番号：');
}

$('div .contextual').eq(1).prepend('<a class="icon icon-copy" onclick="popupReport()">簡易報告書表示</a>');