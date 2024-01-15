function required_change(){
  var flag_memo = $('#issue_custom_field_values_184').val();
  var flag_report = $('#issue_custom_field_values_186').val();

  if (flag_memo == "無" && flag_report == "無") {

    $('input[name="issue[custom_field_values][127][dummy][file]"]').parent().parent().parent().css('display', 'none');
    $('input[name="issue[custom_field_values][35][dummy][file]"]').parent().parent().parent().css('display', 'none');
    $('input[name="commit"]').attr('type', 'submit');
    $('input[name="commit"]').prop('disabled', false);
    $('p#wait_memo').remove();
    $('p#wait_report').remove();

  } else if (flag_memo == "有" && flag_report == "無") {

    $('input[name="issue[custom_field_values][35][dummy][file]"]').parent().parent().parent().css('display', 'none');
    $('input[name="issue[custom_field_values][127][dummy][file]"]').parent().parent().parent().css('display', '');
    var attachement_memo = $('input[name^="issue[custom_field_values][127]["]').length;
    var caution_memo = $('p #wait_memo').length;
    $('p#wait_report').remove();
    $('p#wait_memo_report').remove();
    // 編集タグをあけたあと
      if (attachement_memo == 2 && caution_memo == 0) {
        //console.log('test1'+attachement_memo);
        $('input[name="commit"]').attr('type', 'wait');
        $('input[name="commit"]').prop('disabled', true);
        $('input[name="commit"]').after('<p id="wait_memo" style="font-weight:bold; color:red">社内用(売上証憑用)報告書を「有」に修正し、添付してください</p>')
      } else if (attachement_memo == 2 && caution_memo >= 1) {
        //console.log('test2'+attachement_memo);
        $('input[name="commit"]').attr('type', 'wait');
        $('input[name="commit"]').prop('disabled', true);
      } else { 
        //console.log('test3'+attachement_memo);
        $('input[name="commit"]').attr('type', 'submit');
        $('input[name="commit"]').prop('disabled', false);
        $('p#wait_memo').remove();
      }

  } else if (flag_memo == "無" && flag_report == "有")  {

    $('input[name="issue[custom_field_values][35][dummy][file]"]').parent().parent().parent().css('display', '');
    $('input[name="issue[custom_field_values][127][dummy][file]"]').parent().parent().parent().css('display', 'none');
    var attachement_report = $('input[name^="issue[custom_field_values][35]["]').length;
    var caution_report = $('p #wait_report').length;
    $('p#wait_memo').remove();
    $('p#wait_memo_report').remove();
    // 編集タグをあけたあと
    if (attachement_report == 2 && caution_report == 0) {
      //console.log('test5');
      $('input[name="commit"]').attr('type', 'wait');
      $('input[name="commit"]').prop('disabled', true);
      $('input[name="commit"]').after('<p id="wait_report" style="font-weight:bold; color:red">社内用(売上証憑用)報告書を添付してください</p>')
    } else if (attachement_report == 2 && caution_report >= 1) {
      //console.log('test6');
      $('input[name="commit"]').attr('type', 'wait');
      $('input[name="commit"]').prop('disabled', true);
    } else { 
      //console.log('test7');
      $('input[name="commit"]').attr('type', 'submit');
      $('input[name="commit"]').prop('disabled', false);
      $('p#wait_report').remove();
    //
    }

  } else if (flag_memo == "有" && flag_report == "有")  {
    $('input[name="issue[custom_field_values][127][dummy][file]"]').parent().parent().parent().css('display', '');
    var attachement_memo = $('input[name^="issue[custom_field_values][127]["]').length;
    $('input[name="issue[custom_field_values][35][dummy][file]"]').parent().parent().parent().css('display', '');
    var attachement_report = $('input[name^="issue[custom_field_values][35]["]').length;
    var caution_memo_report = $('p #wait_memo_report').length;
    $('p#wait_report').remove();
    $('p#wait_memo').remove();

    // 添付ファイルが2つともつけられている状態以外はdisable
    if (attachement_report == 4 && attachement_memo == 4) {
      //console.log(attachement_report+','+attachement_memo+','+caution_memo_report+','+'test8');
      $('input[name="commit"]').attr('type', 'submit');
      $('input[name="commit"]').prop('disabled', false);
      $('p#wait_memo_report').remove();
    } else if (caution_memo_report == 0) {
      $('input[name="commit"]').attr('type', 'wait');
      $('input[name="commit"]').prop('disabled', true);
      $('input[name="commit"]').after('<p id="wait_memo_report" style="font-weight:bold; color:red">成約メモ・社内用(売上証憑用)報告書を添付してください</p>')
    } else { 
      //console.log(attachement_report+','+attachement_memo+','+caution_memo_report+','+'test9');
      $('input[name="commit"]').attr('type', 'wait');
     $('input[name="commit"]').prop('disabled', true);
    }
  }
}



$('div#wrapper').mouseover(function(){
  //console.log( $('#issue_status_id').val() );
  if ($('div #update').length == 1) {
    // ステータスが作業完了（売上依頼）のときのみ実施
    if ( $('#issue_status_id').val() == 82 ) {
      required_change();      
    }
  }
});
