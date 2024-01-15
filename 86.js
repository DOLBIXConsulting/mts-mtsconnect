// トラッカーID取得
var tracker_id = $('#issue_tracker_id').val();

// 入出庫チケットのトラッカー一覧 実際に入力項目があるのは'36','37','45','46'のみ
var tracker_list2 = ['36', '37', '45', '46'];

if (tracker_list2.includes(tracker_id)) {
  var splitContentLeft = $('<div class="splitcontentleft">')
    .append(
      $(':input#issue_custom_field_values_158').parent(),
      $(':input#issue_custom_field_values_233').parent(),
      $(':input#issue_custom_field_values_159').parent(),
      $(':input#issue_custom_field_values_154').parent(),
      $(':input#issue_custom_field_values_187').parent(),
      $(':input#issue_custom_field_values_156').parent(),
      $(':input#issue_custom_field_values_222').parent(),
      $(':input#issue_custom_field_values_217').parent(),
      $(':input#issue_custom_field_values_215').parent(),
      $(':input#issue_custom_field_values_191').parent(),
      $(':input#issue_custom_field_values_189').parent(),
      $(':input#issue_custom_field_values_220').parent(),
//    20230817追加
      $(':input#issue_custom_field_values_236').parent(),
      $(':input#issue_custom_field_values_216').parent(),
      $(':input#issue_custom_field_values_221').parent(),
      $(':input#issue_custom_field_values_164').parent(),
      $(':input#issue_custom_field_values_165').parent(),
      $(':input#issue_custom_field_values_204').parent(),
      $(':input#issue_custom_field_values_169').parent(),
      $(':input#issue_custom_field_values_190').parent(),
      $(':input#issue_custom_field_values_214').parent(),
      $(':input#issue_custom_field_values_234').parent(),
      $(':input#issue_custom_field_values_235').parent(),

      $('span.cf_220').parent(),
      $('span.cf_214').parent(),
//      $('span.cf_191').parent(),
//      $('span.cf_169').parent(),
//      $('span.cf_190').parent(),
      $('#issue_custom_field_values_191_blank').parent(),
      $('input[name="issue[custom_field_values][191][dummy][file]"]').parent(),
      $('#issue_custom_field_values_190_blank').parent(),
      $('input[name="issue[custom_field_values][190][dummy][file]"]').parent(),
      $('#issue_custom_field_values_169_blank').parent(),
      $('input[name="issue[custom_field_values][169][dummy][file]"]').parent()
    );

  var attributesDiv = $('div#attributes');
  attributesDiv.after(
    $('<div id="hearing_items_list" style="padding: 20px">').append(splitContentLeft)
  );
  
  // テキストエリアの上にスペースを追加
  $('div#hearing_items_list').after('').append($('textarea#issue_description').parent().parent().parent().parent().css('padding-top', '20px')); 
}