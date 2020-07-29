$(function() {
    switchFixed()
})

function switchFixed (e) {
	if($('#cb').is(':checked')) {
		// 中文
		$(".en").each(function(i, item) {
            $(item).text(chinese[i]);
        });
	} else {
		// 英文
		$(".en").each(function(i, item) {
                $(item).text(english[i]);
            });
	}
}

