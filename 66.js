$(function () {
  // ユーザーid取得
  var user_id = ViewCustomize.context.user.id;
  // API Key 取得
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  // 営業起票・TC起票のトラブル対応チケット
  var tracker_list = ['7','8','9','12','13','21','25'];
  if (tracker_list.includes(tracker_id) === true) {
    $.get(`/users/${user_id}.json?key=${api_key}&include=groups`, function (data) {
      groups = data.user.groups;
      for (let i = 0; i < groups.length; i++) {
        // 13:営業　7:MTS技師 10:アシスタント 6:管理者
        if (groups[i].id == 13 || groups[i].id == 7 || groups[i].id == 10　|| groups[i].id == 6) {　
          if ($('div#doc_list').length) {

            $('div#attributes').after($('<div id="doc_list" style="padding: 20px">')
              .append(
                $('<fieldset id="doc_list_field">')
              .append(
                $('<legend style="font-size: 16px; padding-bottom: 5px;">').text('社内用（売上証憑用）報告書')
              )
              .append(
                $('<div class="splitcontent">')
              .append(
                $('<div class="splitcontentleft">')
                .append(
                  $('#issue_custom_field_values_186').parent(),
                  )
              )
              .append(
                $('<div class="splitcontentright">')
              .append(
                $(':input#issue_custom_field_values_35_blank').parent(),
                )
              .append(
                  //$('<a class="icon icon-add-bullet" onclick="add_column()">項目を追加</a>')
                )
              )
              )
              ),
            ); // afterのとじかっこ


            $('div#attributes').after($('<div id="doc_list" style="padding: 20px">')
              .append(
                $('<fieldset id="doc_list_field">')
              .append(
                $('<legend style="font-size: 16px; padding-bottom: 5px;">').text('成約メモ')
              )
              .append(
                $('<div class="splitcontent">')
              .append(
                $('<div class="splitcontentleft">')
                .append(
                  $('#issue_custom_field_values_184').parent(),
                  )
              )
              .append(
                $('<div class="splitcontentright">')
              .append(
                $(':input#issue_custom_field_values_127_blank').parent(),
                )
              .append(
                  //$('<a class="icon icon-add-bullet" onclick="add_column()">項目を追加</a>')
                )
              )
              )
              ),
            ); // afterのとじかっこ
          
          }
        }
      }
    });
  }
});

