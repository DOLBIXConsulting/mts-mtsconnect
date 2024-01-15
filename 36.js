// テーブルのデザイン変更
if (window.matchMedia('(min-width: 899px)').matches) {

$('.list.issues.odd-even').find('tbody:first').before('<thead class="sortable-table"></thead>');
$('.sortable-table').append('<tr class="sortable-row">');
$('.sortable-row').append('<th id="1" data-sort="" class="sortable sort" style="width: 35%">題名</th>');
$('.sortable-row').append('<th id="2" data-sort="" class="sortable sort" style="width: 13%">ステータス</th>');
$('.sortable-row').append('<th id="3" data-sort="" class="sortable sort" style="width: 13%">担当者</th>');
$('.sortable-row').append('<th id="4" data-sort="" class="sortable sort" style="width: 13%">開始日</th>');
$('.sortable-row').append('<th id="5" data-sort="" class="sortable sort" style="width: 13%">期日</th>');
$('.sortable-row').append('<th id="6" data-sort="" class="sortable" style="width: 13%">操作</th>');
$('.sortable-row').append('<th id="7" data-sort="" class="sortable"></th>');

$('th.sort').css('background','url(../images/arrow_down.png) no-repeat 97% 50%');

$('th.sortable').css('background-color','#00008b');
$('th.sortable').css('border-color','#f0f8ff');
$('th.sortable').css('color','#ffffff');
$('th.sortable').css('cursor','pointer');
$('th.sortable').css('background-position','right');
$('th.sortable').css('background-repeat','no-repeat');

} else {
  // スマホ表示
  $('.list.issues.odd-even').find('tr:first').before('<tr class="header issue hascontextmenu issue priority-default overdue child behind-schedule"></thead>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 30%;font-size: 8px;background-color: #00008b">題名</tr>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 15%;font-size: 8px;background-color: #00008b">ステータス</tr>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 15%;font-size: 8px;background-color: #00008b">担当者</tr>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 15%;font-size: 8px;background-color: #00008b">開始日</tr>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 15%;font-size: 8px;background-color: #00008b">期日</tr>');
  $('tr.header').append('<td style="text-align: center; color: #ffffff; width: 10%;font-size: 8px;background-color: #00008b">操作</tr>');

  $('.list.issues.odd-even').find('.subject').css({'cssText': 'width: 30% !important; white-space: normal !important;text-overflow: clip !important;font-size: 8px;'});
  $('.list.issues.odd-even').find('.status').css({'cssText': 'width: 15% !important; overflow: auto;font-size: 8px;'});
  $('.list.issues.odd-even').find('.assigned_to').css({'cssText': 'width: 15% !important; overflow: auto;font-size: 8px;'});
  $('.list.issues.odd-even').find('.start_date').css({'cssText': 'width: 15% !important; overflow: auto;font-size: 8px;'});
  $('.list.issues.odd-even').find('.due_date').css({'cssText': 'width: 15% !important; overflow: auto;font-size: 8px;'});
  console.log($('.list.issues.odd-even').find('.subject'));
};


$('th').click(function(){
  // 情報取得
  let ele = $(this).attr('id');
  let sortFlg = $(this).data('sort');

  // リセット
  $('th').data('sort', "");

  // ソート順序
  if(sortFlg == "" || sortFlg == "desc"){
    sortFlg = "asc";
    $(this).data('sort', "asc");
  }else{
    sortFlg = "desc";
    $(this).data('sort', "desc");
  }

  // テーブルソート処理
  sortTable(ele, sortFlg);
});


/**
  * テーブルソートメソッド
  * 
  * @param ele 
  * @param sortFlg 
  */
function sortTable(ele, sortFlg){
  let arr = $('table tbody tr').sort(function(a, b){
    // ソート対象が数値の場合
    if($.isNumeric($(a).find('td').eq(ele).text())){
      let aNum = Number($(a).find('td').eq(ele).text());
      let bNum = Number($(b).find('td').eq(ele).text());

      if(sortFlg == "asc"){
        return aNum - bNum;
      }else{
        return bNum - aNum;
      }
    }else{ // ソート対象が数値でない場合
      let sortNum = 1;

      // 比較時は小文字に統一
      if($(a).find('td').eq(ele).text().toLowerCase() > $(b).find('td').eq(ele).text().toLowerCase()){
        sortNum = 1;
      }else{
        sortNum = -1;
      }
      if(sortFlg == "desc"){
        sortNum *= (-1);
      }

      return sortNum;
    }
  });
  $('table tbody').html(arr);
}