$(function hoge1 () {
  // プロジェクトid取得
  var project_id = $('#issue_project_id').val();
  // トラッカーid取得
  var tracker_id = $('#issue_tracker_id').val();
  //console.log(tracker_id);
  //console.log(typeof tracker_id);
  if (typeof project_id === "undefined") {
    // プロジェクトのセレクトBOXがない場合の取得方法
    var project_id = ViewCustomize.context.project.id;
  }
  // console.log('project_id'+project_id)
  $('#issue_assigned_to_id').val(0);

  // API Key 取得
  var api_key = ViewCustomize.context.user.apiKey;
  var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
  //console.log(api_key)

  $.get(`/projects/${project_id}.json?key=${api_key}`,
    function hoge2 (data1){
      var project_desc = data1.project.description;
      // プロジェクト管理
      var tracker_list1 = ['59','43','47','48','49','50','51','52','53','54','55','57']; 
      // プロジェクトの説明に何もいれていない場合（全体・顧客名・工場名のプロジェクト）
      if (project_desc === "") {
        ;
      }
      // 存在するトラッカーのみ指定（今後増えるトラッカーに反映されないように）
      else if (tracker_list1.includes(tracker_id) === true) {
        // console.log('test30.js1');
        var obj_project_desc = JSON.parse(project_desc);
        var user_mail = obj_project_desc.営業;
        // console.log(user_mail);
        $.get(`/users.json?name=${user_mail}&key=${api_key}`,
          function hoge3 (data2){
            // console.log(data2);
            var user_id = data2.users[0].id;
            var user_name = data2.users[0].lastname + ' ' + data2.users[0].firstname;
            // console.log(user_id, user_name);
            $('#issue_assigned_to_id').val(user_id);
            $('#issue_assigned_to_id').removeClass('select2-hidden-accessible');
            // 5/18トラブル対応
            $('#select2-issue_assigned_to_id-container').parent().remove();
        });
        $('#issue_due_date').datepicker();
        $('#issue_due_date').datepicker('option', 'dateFormat', 'yy-mm-dd' );
        $('#issue_due_date').datepicker('setDate', '');
      }
      else if (tracker_list2.includes(tracker_id) === true) {
        var user_id = $('.assign-to-me-link').attr('data-id');
        // console.log('user_id');
        $('#issue_assigned_to_id').val(user_id);
        $('#issue_assigned_to_id').removeClass('select2-hidden-accessible');
        // 5/18トラブル対応
        $('#select2-issue_assigned_to_id-container').parent().remove();

        var date = new Date();
        // 日付の型　2023-01-04
        date.setDate(date.getDate() +1);
        date_text = date.getFullYear().toString()+'-'+(date.getMonth() + 1).toString().padStart(2, '0')+'-'+date.getDate().toString().padStart(2, '0');
        // console.log(date_text)
        $('#issue_due_date').datepicker();
        $('#issue_due_date').datepicker('option', 'dateFormat', 'yy-mm-dd' );
        $('#issue_due_date').datepicker('setDate', date_text);
      };
      var project_name = data1.project.name;
      var project_array = project_name.split('_');
      $('#issue_custom_field_values_20').val(project_array[1]);
      $('#issue_custom_field_values_21').val(project_array.slice(-1)[0]);
    }
  ); //.getクローズ
});