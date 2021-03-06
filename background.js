//コンテキストメニューに拡張のメニューを追加
chrome.contextMenus.create({
    id: 'periodBreakSelection',
    title: '句読点の次を改行する',
    contexts: ['selection'], //選択しているときのみメニューに表示される
    onclick: function(info, tab) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                "periodBreakAction"
            );
        });
    }
});
