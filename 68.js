	
$('#issue_custom_field_values_14').change(function() {

  var words = {
    "Series 4": [
      "W1001 No preforms",
      "W1002 Inline",
    ],
    "OWC4": [
      "I1006 stretch systems are moving up",
      "F1101 Mould ”x” not Closed"
    ],
    "Series 5": [
      "I1020 Emergency stop circuit safety check required",
      "I1032 Synchronization monitoring star ”x” sensor not detected at start-up",
    ]
  };
  
  // シリーズの値を取得
  var series = $('#issue_custom_field_values_14').val();
  console.log(series);
  
  // 自動完了用の単語を取得
  var autocompleteWords = words[series];
  console.log(autocompleteWords);
  
  // フィールドに自動完了機能を追加
  $("#issue_custom_field_values_56").autocomplete({
    source: autocompleteWords
  });
});