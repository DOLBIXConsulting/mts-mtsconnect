// 営業向けのガントチャートデザインカスタマイズ
var url = location.href;
//console.log('test1');

$('div#main').mouseover(function(){
  // URLの判定
  if (url == 'https://mts-blow-support.cloudmine.jp/projects/blow_molding_machine/lgc?query_id=119') {

    // すでに横幅を広げているかどうかの判定
    var width = $('div.lgc-chart-date').css('width');
    var width = width.replace('px', '');
    var width = Math.round(Number(width));
    //console.log(width);

    // 不要なリンク、ボタンの削除
//    $('p.buttons').css({'cssText': 'display: none;'});
//    $('ol.lgc-tree-expander-list').css({'cssText': 'display: none;'});
//    $('span.lgc-queryForm-dateRange').css({'cssText': 'display: none;'});
//    $('a.icon-checked').css({'cssText': 'display: none;'});
//    $('a.icon-reload').css({'cssText': 'display: none;'});
//    $('ul.contextual').css({'cssText': 'display: none;'});
//    $('div.contextual').css({'cssText': 'display: none;'});

    if (width == 16 && $('div.lgc-tree-cell:contains("99_Dummy")').length > 0)  {
      //console.log('mouseover');

      // PDFボタンが動作しないので非表示
      $('a.icon-save').css({'cssText': 'display: none;'});

      // 日付の赤線の強調
      var wid0 = $('div.lgc-chart-today').css('width');
      var left0 = $('div.lgc-chart-today').css('left');
      $('div.lgc-chart-today').css({'cssText': 'width: '+wid0+'; left: '+left0+'; border-right: 4px dashed red;'});

      // スクロールバー表示の調整
      //$('div.lgc-chart.lgc-sync-scroll-from').css({'cssText':'transform: rotateX(180deg);'});
      //$('div.lgc-chart').css('transform', 'rotateX(180deg)');

      // 左右のスクロール量の調整
      $('div.lgc-chart').scrollLeft(left0.replace('px', '')*2);

      // セルの横幅の調整
      $('div.lgc-header-date-day').css({'cssText': 'width: 32px !important;'});
      $('div.lgc-header-date-dayName').css({'cssText': 'width: 32px !important;'});
      $('div.lgc-header-date-itemList').css({'overflow': 'hidden', 'display':'inline-flex'});

      var wid1 = $('div.lgc-scrollable').css('width');
      var wid1 = wid1.replace('px', '');
      // ＋でスクロールバー表示の調整をいれる必要あり・・・
      $('div.lgc-header-date-grids.lgc-scrollable').css({'cssText': 'width: '+ String(wid1*2) + 'px !important; '});
      $('div.lgc-scrollable.lgc-chart-scrollable').css({'cssText': 'width: '+ String(wid1*2) + 'px !important;'});
      //$('div.lgc-scrollable.lgc-chart-scrollable').css({'cssText': 'width: '+ String(wid1*2) + 'px !important; transform: rotateX(180deg);'});

      // バーの色の変更・ ticketの左サイドの幅と、ticket自体の幅を2倍にする
      $('div.lgc-chart-parallelView-item-subject').each(function(index) {

        var wid3 = $(this).parent().css('width');
        var wid3 = wid3.replace('px', '');
        var new_wid3 = Number(wid3*2); 
        $(this).parent().css({'width': new_wid3});

        var left1 = $(this).parent().css('left');
        var left1 = left1.replace('px', '');
        var new_left1 = Number(left1*2); 
        $(this).parent().css({'left': new_left1});

      });

      // headerの幅を2倍にする
      $('div.lgc-header-date-yearMonth').each(function(index) {

        var wid2 = $(this).css('width');
        var wid2 = wid2.replace('px', '');
        var new_wid2 = Number(wid2*2); 
        //console.log(new_wid1);
        $(this).css({'width': new_wid2});

      });

      $('div.lgc-chart-date').each(function(index) {

        var wid4 = $(this).css('width');
        var wid4 = wid4.replace('px', '');
        var new_wid4 = Number(wid4*2); 
        $(this).css({'width': new_wid4});
        //console.log(wid3 + ' : ' + new_wid3);

        var left2 = $(this).css('left');
        var left2 = left2.replace('px', '');
        var new_left2 = Number(left2*2); 
        $(this).css({'left': new_left2});
        //console.log(left2 + ' : ' + new_left2);

      });
    }
  }
});
