// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();
//console.log(tracker_id);
// TC起票チケットのトラッカー一覧 実際に入力項目があるのは12,13のみ
var tracker_list2 = ['12','13'];
if (tracker_list2.includes(tracker_id) === true) {
  $('div#attributes').after($('<div id="hearing_items_list" style="padding:20px">')
    .append(
      $('<fieldset id="hearing_items_list_field">')
      .append(
        $('<legend style="font-size: 16px; padding-bottom: 5px;">').text('設備状態についてのヒアリング項目')
        )
      .append(
        $('<div class="splitcontent" style="padding: 10px">')
        .append(
          $('<div class="splitcontentleft">')
          .append(
            $(':input#issue_custom_field_values_61').parent(),
            $(':input#issue_custom_field_values_56').parent(),
            $(':input#issue_custom_field_values_52').parent(),
            $('span.cf_57').parent(),
            $('span.cf_59').parent(),
            $('span.cf_68').parent(),
         // 3/23 変化点がヒアリング項目内にあったのでtextarea.cf_65に適用しないように変更
         //$('textarea.cf_65').parent(),
            $('span.cf_69').parent(),
            $('span.cf_132').parent(),
            $('input#issue_custom_field_values_133').parent(),
            $('input#issue_custom_field_values_135').parent(),
            $('span.cf_137').parent(),
            $('input#issue_custom_field_values_138').parent(),
            $('span.cf_139').parent(),
            $('span.cf_140').parent(),
            $('input#issue_custom_field_values_141').parent(),
            $('span.cf_142').parent(),
            $('input#issue_custom_field_values_143').parent(),
            $('span.cf_144').parent(),
            $('span.cf_145').parent(),
            $('span.cf_147').parent(),
            $('input#issue_custom_field_values_148').parent(),
            $('span.cf_149').parent(),
            $('input#issue_custom_field_values_150').parent(),
            $('span.cf_151').parent(),
            $('input#issue_custom_field_values_151').parent(),
            )
          )
        .append(
          $('<div class="splitcontentright">')
          .append(
            //$(':input#issue_custom_field_values_58').parent(),
            //$('.cf_59').parent(),
            //$('.cf_68').parent(),
            )
          )
        )
      .append(
        //$(':input#issue_custom_field_values_53').parent(),
        //$(':input#issue_custom_field_values_65').parent(),
        //$(':input#issue_custom_field_values_61').parent(),
        //$(':input#issue_custom_field_values_70').parent(),
        //$(':input#issue_custom_field_values_64').parent(),
        )
      )
    );
  $('div#hearing_items_list').after('').append($('textarea#issue_description').parent().parent().parent().parent().css('padding-top', '20px')); 
  $('span.cf_54 label:first').remove();
  $('span.cf_55 label:first').remove();
  $('span.cf_57 label:first').remove();
  $('span.cf_59 label:first').remove();
  $('span.cf_67 label:first').remove();
  $('span.cf_68 label:first').remove();
  $('span.cf_69 label:first').remove();

  // プロジェクトid取得
  var redmine_project_id = $('#issue_project_id').val();
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  //console.log('test1'+redmine_project_id);

  if (typeof redmine_project_id === undefined) {
    // プロジェクトのセレクトBOXがない場合の取得方法
    var redmine_project_id = ViewCustomize.context.project.id;
  };
  //console.log('test2'+redmine_project_id);

  var req_url = '/projects/'+redmine_project_id+'.json?key='+api_key
  //console.log(req_url);
  
    $.get(req_url,
    function hoge4 (data1){
      var project_desc = data1.project.description;
      //console.log(project_desc);
      var obj_project_desc = JSON.parse(project_desc);
      var user_mail = obj_project_desc.営業2;   
      $.get(`/users.json?name=${user_mail}&key=${api_key}`,
        function hoge5 (data2) {
          // console.log(data2.users[0]);
          var user_id = data2.users[0].id;
          var user_name = data2.users[0].lastname+data2.users[0].firstname;
          // ウォッチャー の設定
          var length = $('span#watchers_inputs').find('#issue_watcher_user_ids_'+user_id).length;
          //console.log(length);
          if (length == 0) {
            // console.log('test')
            $('span#watchers_inputs').append(
              $('<label id="issue_watcher_user_ids_'+user_id+'" class="floating">').append(
                $('<input type="checkbox" name="issue[watcher_user_ids][]" value="'+user_id+'" checked="checked">'),
              )
            )
            $('label#issue_watcher_user_ids_'+user_id).append(user_name)
          }
      });
  });
};