$(document).ready(function() {
  // カスタムフィールドの初期値によって表示・非表示を切り替える
  toggleCustomFields($('#issue_custom_field_values_111').val());

  // カスタムフィールドの値が変更された時に表示・非表示を切り替える
  $('#issue_custom_field_values_111').change(function() {
    toggleCustomFields($(this).val());
  });
});

// カスタムフィールドの表示・非表示を切り替える関数
function toggleCustomFields(value) {
  if (value === '有') {
    $('#issue_custom_field_values_35').prop('required', true).show();
    $('#issue_custom_field_values_174').prop('required', true).show();
  } else {
    $('#issue_custom_field_values_35').prop('required', false).hide();
    $('#issue_custom_field_values_174').prop('required', false).hide();
  }
}
