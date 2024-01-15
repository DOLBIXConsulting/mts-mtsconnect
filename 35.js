// API Key 取得
var api_key = ViewCustomize.context.user.apiKey;
var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
// プロジェクトid取得
var project_id = $('#issue_project_id').val();
if (typeof project_id === "undefined") {
  // プロジェクトのセレクトBOXがない場合の取得方法
  var project_id = ViewCustomize.context.project.id;
}

// 不明部品問合せのトラッカーid
// var tracker_list = ['10']
// var tracker_id = $('#issue_tracker_id').val();
// if (tracker_list.includes(tracker_id) === true) {
//   $('span.cf_67 label:first').remove();

//   // 担当者はデフォルトでロジーさんを設定 16は中島のidだが、ロジーさんのidに変更
//   $('#issue_assigned_to_id').val('16');

//   // ウォッチャーに営業担当を追加
//   $.get(`/projects/${project_id}.json?key=${api_key}`,
//     function hoge4 (data1){
//       var project_desc = data1.project.description;
//       //console.log(project_desc);
//       var obj_project_desc = JSON.parse(project_desc);
//       var user_mail = obj_project_desc.営業;   
//       $.get(`/users.json?name=${user_mail}&key=${api_key}`,
//         function hoge5 (data2) {
//           //console.log(data2.users[0]);
//           var user_id = data2.users[0].id;
//           var user_name = data2.users[0].lastname+data2.users[0].firstname;
//           // ウォッチャー の設定
//           var length = $('span#watchers_inputs').find('#issue_watcher_user_ids_'+user_id).length;
//           //console.log(length);
//           if (length == 0) {
//             // console.log('test')
//             $('span#watchers_inputs').append(
//               $('<label id="issue_watcher_user_ids_'+user_id+'" class="floating">').append(
//                 $('<input type="checkbox" name="issue[watcher_user_ids][]" value="'+user_id+'" checked="checked">'),
//               )
//             )
//             $('label#issue_watcher_user_ids_'+user_id).append(user_name)
//           }
//       });
//   });
// }