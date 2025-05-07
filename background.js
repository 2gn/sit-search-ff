browser.contextMenus.create(
  {
    id: "search-on-sit-search",
    title: "Search on SIT Search",
    contexts: ["selection"],
  },
  () => void browser.runtime.lastError,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  _url = `http://slib.shibaura-it.ac.jp/sublib/ja/nalis_sl/display_panel?searchTarget=0&kw=${info.selectionText}&selectedLngOnly=0&selectSubject=1`;

  if (info.menuItemId === "search-on-sit-search") {
    browser.tabs.create({
      url: _url,
    });
  }
});
