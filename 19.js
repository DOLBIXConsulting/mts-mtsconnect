// API Key 取得
var api_key = ViewCustomize.context.user.apiKey;
var api_key = 'a4eeb16bfa543bed524690cee06e4806292cbab6';
// プロジェクトid取得
var project_id = $('#issue_project_id').val();
if (typeof project_id === "undefined") {
  // プロジェクトのセレクトBOXがない場合の取得方法
  var project_id = ViewCustomize.context.project.id;
}
// トラッカーid取得
var tracker_id = $('#issue_tracker_id').val();
// 営業起票親チケットのトラッカー一覧
var tracker_list1 = ['7','8','9','21','25'];
// 子チケットのトラッカー
var tracker_list2 = ['14','16','17','19','22','23','24']
// TC起票親チケットのトラッカー一覧
var tracker_list3 = ['10','11','12','13'];
// 移動日
var tracker_list4 = ['26'];
// トレーニング
var tracker_list5 = ['27'];
// 入出庫
// 3/20追加
var tracker_list6 = ['36','37','39','40','45','46'];
// 休日
// 4/6追加
var tracker_list7 = ['20'];
// MTS出社
// 4/6追加
var tracker_list8 = ['31'];
// 健康診断
// 4/6追加
var tracker_list9 = ['33'];
// 在宅
// 4/6追加
var tracker_list10 = ['34'];
// 海外出張
// 4/6追加
var tracker_list11 = ['32'];
// その他
// 4/6追加
var tracker_list12 = ['35'];
// 休日（不可）
// 8/9追加
var tracker_list13 = ['42'];









if (tracker_list1.includes(tracker_id) === true) {
  $.get(`/projects/${project_id}.json?key=${api_key}`,
    function hoge8 (data1) {
    var project_desc = data1.project.description;
    var obj_project_desc = JSON.parse(project_desc);
    var project_name = obj_project_desc.技師スケジュール表記方法;
    if (tracker_id == 7) {var tracker_name = 'OH'}
    else if (tracker_id == 8) {var tracker_name = 'AU'}
    else if (tracker_id == 9) {var tracker_name = '新規'}
    else {var tracker_name = '(作業名はReDiS/FAT/WDB/Retrofits/SlipRing/Program/生産立合/その他から記載)'; $('#issue_subject').after('<br>作業名は、ReDiS/FAT/WDB/Retrofits/SlipRing/Program/生産立合/その他、のいずれかへ書き換えること')}
    $('#issue_subject').val('');
    $('#issue_subject').val(project_name+' '+tracker_name); 
  });
  $('#issue_custom_field_values_18').attr('placeholder', '入力不要');
  $('div#attributes').after('').append($('#issue_priority_id').parent());
  $('div#attributes').after('').append($('textarea#issue_description').parent().parent().parent().parent());
} 
else if (tracker_list2.includes(tracker_id) === true) {
// タイトルは親チケットのタイトルと同じとする
  $('#issue_custom_field_values_18').attr('placeholder', '入力不要');
  $('div#attributes').after('').append($('textarea#issue_description').parent().parent().parent().parent());
  $('textarea#issue_description').attr('placeholder', '入力不要');
  var parent_id = $('#issue_parent_issue_id').attr('value');
  // console.log(parent_id);
  if (!isNaN(parent_id)) {
    $.get(`/issues/${parent_id}.json?key=${api_key}`,
      function hoge9 (data2) {      
        // console.log(data2);
        var parent_subject = data2.issue.subject;
        $('#issue_subject').val(parent_subject); 
    });
  };
} 
else if (tracker_list3.includes(tracker_id) === true) {
// タイトルはつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('-'); 
  $('#issue_custom_field_values_18').attr('placeholder', '入力不要');
  $('div#attributes').after('').append($('textarea#issue_description').parent().parent().parent().parent());
  // $('textarea#issue_description').attr('placeholder', '入力不要');
}
else if (tracker_list4.includes(tracker_id) === true) {
// タイトルはプロジェクトの設定内容から考える
  $('#issue_subject').val(''); 
  $('#issue_subject').val('移動日');
} 
else if (tracker_list5.includes(tracker_id) === true) {
// タイトルはプロジェクトの設定内容から考える
  $('#issue_subject').val(''); 
  $('#issue_subject').val('トレ');
}else if (tracker_list6.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('-'); 
}else if (tracker_list7.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('休'); 
} else if (tracker_list8.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('MTS'); 
}else if (tracker_list9.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('健診'); 
}else if (tracker_list10.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('在宅'); 
}  else if (tracker_list11.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('海外'); 
} else if (tracker_list12.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('他'); 
} else if (tracker_list13.includes(tracker_id) === true) {
// タイトルつけない
  $('#issue_subject').val(''); 
  $('#issue_subject').val('休(不可)');
}
;
