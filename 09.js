$(function() { 
    var $history = $("#history"); 
    var func = function() { 
        var mode = $(this).attr("data-mode"); 
        if (mode == "showAll") {
            $history.find("div.journal").show(); 
            $history.find("div.journal.has-notes").find("ul.details").show(); 
        } else if (mode == "commentOnly") { 
            // 注記を持たない履歴を非表示
            $history.find("div.journal").not(".has-notes").hide();
            // 注記を持つ履歴の注記以外の内容を非表示 
            $history.find("div.journal.has-notes").find("ul.details").hide(); 
        } 
        $("#history").find("span.history_fillter_links a:hidden").show(); 
        $(this).hide(); 
        return false; 
    } 
    var $links = $("<span class='history_fillter_links'></span>").prependTo($history); 
    $("<a data-mode='showAll' href='#' >show All</a>") 
    .appendTo($links).click(func); 
    $("<a data-mode='commentOnly' href='#' >comment Only</a>") 
    .appendTo($links).click(func).click(); // 初期表示時フィルタを有効化
}); 