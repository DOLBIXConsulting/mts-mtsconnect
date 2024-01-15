// 営業向けのガントチャートデザインカスタマイズ
var url = location.href;
//console.log('test1');

$('div#main').mouseover(function(){
  // URLの判定
  if (url == 'https://mts-blow-support.cloudmine.jp/projects/blow_molding_machine/lgc?query_id=155') {

    // すでに横幅を広げているかどうかの判定
    var width = $('div.lgc-chart-date').css('width');
    var width = width.replace('px', '');
    var width = Math.round(Number(width));
    //console.log(width);

    // 不要なリンク、ボタンの削除
    $('p.buttons').css({'cssText': 'display: none;'});
    $('ol.lgc-tree-expander-list').css({'cssText': 'display: none;'});
    $('span.lgc-queryForm-dateRange').css({'cssText': 'display: none;'});
    $('a.icon-checked').css({'cssText': 'display: none;'});
    $('a.icon-reload').css({'cssText': 'display: none;'});
    $('ul.contextual').css({'cssText': 'display: none;'});
    $('div.contextual').css({'cssText': 'display: none;'});

    $('p.buttons').css({'cssText': 'display: none;'});
    $('ol.lgc-tree-expander-list').css({'cssText': 'display: none;'});
    $('span.lgc-queryForm-dateRange').css({'cssText': 'display: none;'});
    $('a.icon-checked').css({'cssText': 'display: none;'});
    $('a.icon-reload').css({'cssText': 'display: none;'});
    $('ul.contextual').css({'cssText': 'display: none;'});
    $('div.contextual').css({'cssText': 'display: none;'});
    $('form.lgc-queryForm-form').css({'cssText': 'display: none;'});
    //$('div.contextual').css({'cssText': 'display: none;'});
    $('ol.lgc-tree-expander-list').css({'cssText': 'display: none;'});
    $('fieldset.collapsible').css({'cssText': 'display: none;'});
    $('div.contextual').css({'cssText': 'display: none;'});
    $('ul.contextual').css({'cssText': 'display: none;'});


    if (width == 16)  {
      //console.log('mouseover');

      // PDFボタンが動作しないので非表示
      $('a.icon-save').css({'cssText': 'display: none;'});

      // 日付の赤線の強調
      var wid0 = $('div.lgc-chart-today').css('width');
      var left0 = $('div.lgc-chart-today').css('left');
      $('div.lgc-chart-today').css({'cssText': 'width: '+wid0+'; left: '+left0+'; border-right: 4px dashed red;'});

      
      // バーの色の変更・ ticketの左サイドの幅と、ticket自体の幅を2倍にする
      $('div.lgc-chart-parallelView-item-subject').each(function(index) {
        var customer = $(this).children('span').text();
        // タイトルがOC(order confirmed)で終わるものを緑に
        if (customer.endsWith('OC')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #00ff7f !important;'});
        };

      });

    }
  }
});

