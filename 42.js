// 技師向けのガントチャートデザインカスタマイズ
// URLは最初の読み込み時のみ判定
var url = location.href;

$('div#main').mouseover(function(){
  
  // URLの判定
  if (url == 'https://mts-blow-support.cloudmine.jp/projects/blow_molding_machine/lgc?query_id=51') {

    // すでに横幅を広げているかどうかの判定
    var width = $('div.lgc-chart-date').css('width');
    var width = width.replace('px', '');
    var width = Math.round(Number(width));


    // 不要なリンク、ボタンの削除
    $('form.lgc-queryForm-form').css({'cssText': 'display: none;'});
    //$('div.contextual').css({'cssText': 'display: none;'});
    $('ol.lgc-tree-expander-list').css({'cssText': 'display: none;'});
    $('fieldset.collapsible').css({'cssText': 'display: none;'});
    $('div.contextual').css({'cssText': 'display: none;'});
    $('ul.contextual').css({'cssText': 'display: none;'});

    if (width == 16 && $('div.lgc-tree-cell:contains("99_Dummy")').length > 0) {

      // PDFボタンが動作しないので非表示
      $('a.icon-save').css({'cssText': 'display: none;'});
      // 4/3調査
      //console.log($('div.lgc-chart-date').length);
      //console.log($('div.lgc-chart-parallelView-item-subject').length);
      //console.log($('div.lgc-tree-cell:contains("06_個人業務委託")').length);


      // 日付の赤線の強調
      var wid0 = $('div.lgc-chart-today').css('width');
      var left0 = $('div.lgc-chart-today').css('left');
      $('div.lgc-chart-today').css({'cssText': 'width: '+wid0+'; left: '+left0+'; border-right: 4px dashed red;'});

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


        var customer = $(this).children('span').text();
        // Dong Wong 1/2 グレー
        if (customer.startsWith('Dong')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #dcdcdc !important;'});
        };
        // ロッテ くらい赤
        if (customer.startsWith('Lotte')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #8b0000 !important;'});
        };
        // PTCS2 グレー
        if (customer.startsWith('PTCS2')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #dcdcdc !important;'});
        };
        // UCC コーヒー色
        if (customer.startsWith('UCC')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #8b4513 !important;'});
        };        
        // VKBC 黄色
        if (customer.startsWith('VKBC')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffff00 !important;'});
        }; 
        // アサヒ飲料 濃い青
        if (customer.startsWith('ASD')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #0000cd !important;'});
        };
        // アサヒビール 濃い青
        if (customer.startsWith('AB')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #0000cd !important;'});
        };
        // えひめ飲料 蜜柑色
        if (customer.startsWith('えひめ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffa500 !important;'});
        };
        // カゴメ  緑色
        if (customer.startsWith('カゴメ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #008000 !important;'});
        };
        // 神奈川柑橘  肌色
        if (customer.startsWith('神奈柑')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #f5deb3 !important;'});
        };
        // キリンディスティラリー  黄
        if (customer.startsWith('KD')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffff00 !important;'});
        };
        // キリンビバレッジ   黄
        if (customer.startsWith('KB')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffff00 !important;'});
        };
        // キンキサイン 紫
        if (customer.startsWith('キンキ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #800080 !important;'});
        };
        // ゴールドパック 金
        if (customer.startsWith('GP')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffd700 !important;'});
        };
        // コカコーラ 赤
        if (customer.startsWith('コカ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ff0000 !important;'});
        };
        // サントリービール・プロダクツ・ホールディングス　水色
        if (customer.startsWith('SU')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #87ceeb !important;'});
        };
        // ミツウロコ　若草色
        if (customer.startsWith('ミツウロコ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #98fb98 !important;'});
        };
        // ジャパンフーズ　ピンク
        if (customer.startsWith('JF')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ff69b4 !important;'});
        };
        // 信州ビバレッジ　薄い黄
        if (customer.startsWith('SB')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #fffacd !important;'});
        };
        // 大日本印刷　青
        if (customer.startsWith('DNP')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #0000ff !important;'});
        };
        // 日本アスパラガス　薄緑
        if (customer.startsWith('日アス')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #66cdaa !important;'});
        };
        // パイオニア　明るい紫
        if (customer.startsWith('関東')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ee82ee !important;'});
        };
        // 北陸コカ　赤
        if (customer.startsWith('北陸コカ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ff0000 !important;'});
        };
        // 北海製缶　藍
        if (customer.startsWith('北海千代田')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #4b0082 !important;'});
        };
        // 北海道コカ　赤
        if (customer.startsWith('北コカ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ff0000 !important;'});
        };
        // ポッカ 札幌　エメラルド
        if (customer.startsWith('ポッカ')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #40e0d0 !important;'});
        };
        // 丸善　黄緑
        if (customer.startsWith('丸善')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #adff2f !important;'});
        };
        // みちのくコカ　赤
        if (customer.startsWith('みちのく')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ff0000 !important;'});
        };
        // 和歌山ノーキョー　薄い黄
        if (customer.startsWith('WN')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #fffacd !important;'});
        };
        // アセプティック　青
        if (customer.startsWith('APS')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #0000ff !important;'});
        };
        // 日本キャンパック　オレンジ
        if (customer.startsWith('NCP')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #ffa500 !important;'});
        };
        // 明治　濃い赤
        if (customer.startsWith('明治')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #8b0000 !important;'});
        };
        // 九星　明るい水色
        if (customer.startsWith('九星')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #00ffff !important;'});
        };
        // 山形食品　ブルーベリー
        if (customer.startsWith('YMF')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #6a5acd !important;'});
        };
        // 信濃高原　黄緑
        if (customer.startsWith('信濃')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #adff2f !important;'});
        };
        // 日本果実　ブルーベリー
        if (customer.startsWith('日果工')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #6a5acd !important;'});
        };
        // 移動 白
        if (customer.startsWith('移')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #fffafa !important;'});
        };
        // 休日 白
        if (customer.startsWith('休')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #fffafa !important;'});
        };
        // 祝日 白
        if (customer.startsWith('祝')) {
          $(this).next().find('div[class^="lgc-chart-bar_"]').css({'cssText': 'background: #fffafa !important;'});
        };
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
