$(function () {
  // ユーザーid取得
  var user_id = ViewCustomize.context.user.id;
  // console.log(user_id)
  // API Key 取得
  // var api_key = ViewCustomize.context.user.apiKey;
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  // console.log(api_key)
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  // 親チケットのトラッカー一覧
  var tracker_list = ['7','8','9','21', '10', '11', '12', '13', '25'];
  if (tracker_list.includes(tracker_id) === true) {
    $.get(`/users/${user_id}.json?key=${api_key}&include=groups`, function (data) {
      groups = data.user.groups;
      //console.log(data.user.groups)
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].id == 13 || groups[i].id == 7 || groups[i].id == 10　|| groups[i].id == 6) {　
          if (!$('div#doc_list').length) {
            $('div#attributes').after($('<div id="doc_list" style="padding: 20px">')
              .append(
                $('<fieldset id="doc_list_field">')
              .append(
                $('<legend style="font-size: 16px; padding-bottom: 5px;">').text('受発注関連文書')
              )
              .append(
                $('<div class="splitcontent">')
              .append(
                $('<div class="splitcontentleft">')
                .append(
                  $(':input#issue_custom_field_values_33').parent(),
                  $(':input#issue_custom_field_values_34').parent(),
                  $('<a class="icon icon-add-bullet" onclick="add_column()" style="margin-left:20px">項目を追加・表示</a>'),
                )
              )
              .append(
                $('<div class="splitcontentright add_column">')
              .append(
                $(':input#issue_custom_field_values_31').parent().addClass('fields1').css('display', 'none'),
                $(':input#issue_custom_field_values_32').parent().addClass('fields1').css('display', 'none'),
                $(':input#issue_custom_field_values_42').parent().addClass('fields2').css('display', 'none'),
                $(':input#issue_custom_field_values_46').parent().addClass('fields2').css('display', 'none'),
                $(':input#issue_custom_field_values_44').parent().addClass('fields3').css('display', 'none'),
                $(':input#issue_custom_field_values_48').parent().addClass('fields3').css('display', 'none'), 
                $(':input#issue_custom_field_values_43').parent().addClass('fields4').css('display', 'none'),
                $(':input#issue_custom_field_values_47').parent().addClass('fields4').css('display', 'none'),
                $(':input#issue_custom_field_values_45').parent().addClass('fields5').css('display', 'none'),
                $(':input#issue_custom_field_values_49').parent().addClass('fields5').css('display', 'none'),
                $(':input#issue_custom_field_values_109').parent().addClass('fields5').css('display', 'none'),
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

function add_column() {
  if (typeof i == 'undefined') {
    i = 1;
    $('.fields1').css('display', 'block');
    //console.log('test'+i);
  } else if (i == 1) {
    $('.fields2').css('display', 'block');
    i = i+1;
    //console.log('test'+i);
  } else if (i == 2) {
    $('.fields3').css('display', 'block');
    i = i+1;
    //console.log('test'+i);
  } else if (i == 3) {
    $('.fields4').css('display', 'block');
    i = i+1;
    //console.log('test'+i);
  } else if (i == 4) {
    $('.fields5').css('display', 'block');
    i = i+1;
    //console.log('test'+i);
  }
}