// ページの読み込みが完了したときにコードを実行
$(document).ready(function() {
  // 現在のURLを取得
  var currentURL = window.location.href;

  // 指定されたURLと一致するかを確認してからコードを実行
  if (currentURL === 'https://mts-blow-support.cloudmine.jp/issues' || 
      currentURL === 'https://mts-blow-support.cloudmine.jp/projects/blow_molding_machine/issues') {
    // 対象のページの場合、要素を非表示にする
    $('a.icon.icon-add.new-issue').hide();
  }
});
