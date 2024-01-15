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
                  $('<legend style="font-size: 16px; padding-bottom: 5px;">')
                    .append('作業報告書(')
                    .append($('<span>').css('color', 'red').text('MTSConnectに反映され、客先と共有されます'))
                    .append(')')
                )
              .append(
                $('<div class="splitcontent">')
                .append(
                  $('#issue_custom_field_values_111').parent(),
                )
              )
              .append(
                $('<div class="splitcontent">')
                .append(
                  //$('<a class="icon icon-add-bullet" onclick="add_report1()"" style="margin-left:20px; margin-bottom:15px;">作業報告書を確認・追加</a>'),
                )
              )
              .append(
                $('<div class="splitcontent">')
              .append(
                $('<div class="splitcontentleft">').addClass('add_report1').css('display', 'none')
                .append(
               // 4/26追記
                  $(':input#issue_custom_field_values_174_blank').parent(),
                  $(':input#issue_custom_field_values_175_blank').parent(),
                  $(':input#issue_custom_field_values_176_blank').parent(),
                  $(':input#issue_custom_field_values_177_blank').parent(),
                  $(':input#issue_custom_field_values_178_blank').parent(),
                )
              )
              .append(
                $('<div class="splitcontentright">').addClass('add_report1').css('display', 'none')
                .append(
                )
              .append(
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


