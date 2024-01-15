$(function () {
  // ユーザーid取得
  var user_id = ViewCustomize.context.user.id;
  // API Key 取得
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  // 営業起票チケット
  var tracker_list = ['7','8','9','21','25'];
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
                $('<legend style="font-size: 16px; padding-bottom: 5px;">').text('成約メモ')
              )
              .append(
                $('<div class="splitcontent">')
                .append(
                  $('<a class="icon icon-add-bullet" onclick="add_contract_memo1()"" style="margin-left:20px; margin-bottom:15px;">成約メモ(添付Excelファイル)を確認・追加</a>'),
                  $('<a class="icon icon-add-bullet" onclick="add_contract_memo2()"" style="margin-left:20px; margin-bottom:15px;">成約メモ(Redmine入力)を確認・追加</a>'),
                )
              )
              .append(
                $('<div class="splitcontent">').addClass('add_contract_memo1').css('display', 'none')
                .append(
                  $(':input#issue_custom_field_values_127_blank').parent().css('margin-bottom', '10px')
                )
              )
              .append(
                $('<div class="splitcontent">')
              .append(
                $('<div class="splitcontentleft">').addClass('add_contract_memo2').css('display', 'none')
                .append(
                  $(':input#issue_custom_field_values_75').parent(),
                  $(':input#issue_custom_field_values_89').parent(),
                  $(':input#issue_custom_field_values_99').parent(),
                  $(':input#issue_custom_field_values_101').parent(),
                  $(':input#issue_custom_field_values_100').parent(),
                  $(':input#issue_custom_field_values_102').parent(),
                  $(':input#issue_custom_field_values_103').parent(),
                  $(':input#issue_custom_field_values_119').parent(),
                  $(':input#issue_custom_field_values_123').parent(),
                  $(':input#issue_custom_field_values_121').parent(),
                  $(':input#issue_custom_field_values_124').parent(),
                  $(':input#issue_custom_field_values_122').parent(),
                  $(':input#issue_custom_field_values_125').parent(),
                  $(':input#issue_custom_field_values_126').parent(),
                  $(':input#issue_custom_field_values_129').parent(),
                )
              )
              .append(
                $('<div class="splitcontentright">').addClass('add_contract_memo2').css('display', 'none')
              .append(
                $(':input#issue_custom_field_values_72').parent(),
                $(':input#issue_custom_field_values_91').parent(),
                $(':input#issue_custom_field_values_80').parent(),
                $(':input#issue_custom_field_values_81').parent(),
                $(':input#issue_custom_field_values_84').parent(),
                $(':input#issue_custom_field_values_78').parent(),
                //3/23 issue_custom_field_values_98をissue_custom_field_values_168へ変更
                $(':input#issue_custom_field_values_168').parent()
              )
              .append(
                  //$('<a class="icon icon-add-bullet" onclick="add_contract_memo()">成約メモを確認・追加</a>')
                )
              )
              )
              ),
            ); // afterのとじかっこ
          // 成約メモ配置後の処理 placeholderの設定
          $(':input#issue_custom_field_values_103').prop("readonly", true);
          $(':input#issue_custom_field_values_103').attr('placeholder', '自動計算');
          $(':input#issue_custom_field_values_168').prop("readonly", true);
                //3/23 issue_custom_field_values_98をissue_custom_field_values_168へ変更
          $(':input#issue_custom_field_values_168').attr('placeholder', '自動計算');
          $(':input#issue_custom_field_values_126').prop("readonly", true);
          $(':input#issue_custom_field_values_126').attr('placeholder', '自動計算');
          $(':input#issue_custom_field_values_129').prop("readonly", true);
          $(':input#issue_custom_field_values_129').attr('placeholder', '自動計算');
          // プロジェクト名の設定
          var project_name = $('#issue_project_id option:selected').text();
          $(':input#issue_custom_field_values_78').val(project_name)
          }
        }
      }
    });
  }
});

function add_contract_memo1() {
    $('.add_contract_memo1').css('display', 'inline');
  }

function add_contract_memo2() {
    $('.add_contract_memo2').css('display', 'inline');
  }
