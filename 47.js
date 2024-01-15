$(function () {
  // ユーザーid取得
  var user_id = ViewCustomize.context.user.id;
  // API Key 取得
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  // 作業依頼チケット
  var tracker_list = ['14','28','16','24','22','17','23'];
  if (tracker_list.includes(tracker_id) === true) {
    $('div.splitcontentright').first().append($('span.cf_116').parent());
    $('div.splitcontentright').first().append($('span.cf_117').parent());
    $('div.splitcontentright').first().append($('span.cf_118').parent());
    $('div.splitcontentleft').first().append($('span.cf_152').parent());
  }
});