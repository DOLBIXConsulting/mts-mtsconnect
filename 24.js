$(function(){
    // tracker idの取得
    var tracker_id = $('#issue_tracker_id').val();
    // console.log(tracker_id);
    // 営業起票親チケットのトラッカー一覧
    var tracker_list1 = ['7','8','9','21','25'];
    //　TC起票親チケットのトラッカー一覧
    var tracker_list2 = ['10','11','12','13','38'];
    //　入出庫のトラッカー一覧
    var tracker_list3 = ['36','37','39','45','46'];
   //　勤怠登録のトラッカー一覧
    var tracker_list4 = ['20','31','32','33','27','34','35'];
   //　新設のトラッカー一覧
    var tracker_list5 = ['29'];

    //　status idの取得
    var status_id = $('#issue_status_id').val();
   //　営業のみのステータス一覧
    var status_list1 = ['58','60','62','63','23','24','45','25'];
   //　アシスタントのみのステータス一覧
    var status_list2 = ['59','61'];
   //　TCのみのステータス一覧
    var status_list3 = ['35'];
    
    // 営業起票親チケットの場合
    if (tracker_list1.includes(tracker_id) === true) {
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
      // 2023.4.18追加
           if (status_list1.includes(status_id) === true) {// 営業のみ
          $('select#issue_group_id option[value=9]').remove();
          $('select#issue_group_id option[value=10]').remove();
          }else if (status_list2.includes(status_id) === true) { // アシスタントのみ
          $('select#issue_group_id option[value=9]').remove();
          $('select#issue_group_id option[value=13]').remove();
          }
    } else if (tracker_list2.includes(tracker_id) === true) { // TC起票
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
      // 2023.5.1追加
           if (status_list1.includes(status_id) === true) {// 営業のみ
          $('select#issue_group_id option[value=9]').remove();
          $('select#issue_group_id option[value=10]').remove();
          }else if (status_list3.includes(status_id) === true) { // TCのみ
          $('select#issue_group_id option[value=10]').remove();
          $('select#issue_group_id option[value=13]').remove();
          }
    } else if (tracker_list3.includes(tracker_id) === true) { // 入出庫
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_list4.includes(tracker_id) === true) { // 技師の勤怠
          $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();

      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
     } else if (tracker_list5.includes(tracker_id) === true) {
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_id == '14') { // MTS技師
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_id == '16') { // 作業依頼(協力会社)_要発注書
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
    } else if (tracker_id == '24') { // 作業依頼(協力会社)_作業指示書のみ
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
           //2023.5.12追加
      $('select#issue_group_id option[value=168]').remove();
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=136]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_id == '22') { // KHS技師
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=98]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_id == '17') { // 通訳
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=99]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
    } else if (tracker_id == '23') { // プロマネ
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=99]').remove();
      // 2023.3.1追加
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=136]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
      } 
       // 2023.3.1追加
       else if (tracker_id == '28') { // アシスタント
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=99]').remove();
      $('select#issue_group_id option[value=135]').remove();
      $('select#issue_group_id option[value=7]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=149]').remove();
      $('select#issue_group_id option[value=146]').remove();
      $('select#issue_group_id option[value=147]').remove();
      $('select#issue_group_id option[value=138]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=143]').remove();
      $('select#issue_group_id option[value=144]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=137]').remove();
      $('select#issue_group_id option[value=136]').remove();
      $('select#issue_group_id option[value=145]').remove();
      $('select#issue_group_id option[value=141]').remove();
      $('select#issue_group_id option[value=142]').remove();
      $('select#issue_group_id option[value=98]').remove();
      $('select#issue_group_id option[value=140]').remove();
      $('select#issue_group_id option[value=139]').remove();
      $('select#issue_group_id option[value=148]').remove();
     //2023.7.03追加
      $('select#issue_group_id option[value=179]').remove();
      }
       else if (tracker_id == '19') { // 作業報告書
      $('select#issue_group_id option[value=182]').remove();
      $('select#issue_group_id option[value=183]').remove();
      $('select#issue_group_id option[value=173]').remove();
      $('select#issue_group_id option[value=169]').remove();
      $('select#issue_group_id option[value=168]').remove();
     //2023.5.12追加
      $('select#issue_group_id option[value=164]').remove();
      $('select#issue_group_id option[value=166]').remove();
      $('select#issue_group_id option[value=154]').remove();
      $('select#issue_group_id option[value=155]').remove();
      $('select#issue_group_id option[value=9]').remove();
      $('select#issue_group_id option[value=6]').remove();
      $('select#issue_group_id option[value=10]').remove();
      $('select#issue_group_id option[value=97]').remove();
      $('select#issue_group_id option[value=13]').remove();
      $('select#issue_group_id option[value=12]').remove();
      $('select#issue_group_id option[value=98]').remove();

      }
});