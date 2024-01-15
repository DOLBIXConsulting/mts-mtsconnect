$(':input#issue_custom_field_values_89,:input#issue_custom_field_values_101,'
  +':input#issue_custom_field_values_102,:input#issue_custom_field_values_91,'
  +':input#issue_custom_field_values_123,:input#issue_custom_field_values_124,'
  +':input#issue_custom_field_values_125').change(function() {
  var unit1 = $(':input#issue_custom_field_values_89').val();   //仕入金額1
  var unit2 = $(':input#issue_custom_field_values_101').val();  //仕入金額2
  var unit3 = $(':input#issue_custom_field_values_102').val();  //仕入金額3

  var unit4 = $(':input#issue_custom_field_values_123').val();   //原価1
  var unit5 = $(':input#issue_custom_field_values_124').val();   //原価2
  var unit6 = $(':input#issue_custom_field_values_125').val();   //原価3

  var unit7 = $(':input#issue_custom_field_values_91').val();   //売金額

  // 103:仕入れ金額合計 168:利益率

  // 入力バリデーション
  if (unit1.match(/^[0-9]*$/) && unit2.match(/^[0-9]*$/) && 
    unit3.match(/^[0-9]*$/) && unit4.match(/^[0-9]*$/) && 
    unit5.match(/^[0-9]*$/) && unit6.match(/^[0-9]*$/) && unit7.match(/^[0-9]*$/)) {
    $(':input#issue_custom_field_values_103').val(Number(unit1)+Number(unit2)+Number(unit3));
    var unit8 = $(':input#issue_custom_field_values_103').val();   //仕入れ金額合計

    $(':input#issue_custom_field_values_126').val(Number(unit4)+Number(unit5)+Number(unit6));
    var unit9 = $(':input#issue_custom_field_values_126').val();   //原価合計

    $(':input#issue_custom_field_values_129').val(Number(unit8)+Number(unit9));
    var unit10 = $(':input#issue_custom_field_values_129').val();   //仕入れ＋原価
    //3/23 issue_custom_field_values_98をissue_custom_field_values_168へ変更
    $(':input#issue_custom_field_values_168').val(((Number(unit7)-Number(unit10))/Number(unit7))*100);

  } 
  // 半角数字以外の入力あり
  else {
    $(':input#issue_custom_field_values_103').val("NaN");
    //3/23 issue_custom_field_values_98をissue_custom_field_values_168へ変更
    $(':input#issue_custom_field_values_168').val("NaN");
  }
});