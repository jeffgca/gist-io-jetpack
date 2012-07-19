
var data = require('self').data;
var { Hotkey } = require("hotkeys");
var tabs = require("tabs");
var gist_url_rx = /^https:\/\/gist.github.com\/[\d]+$/;

require("page-mod").PageMod({
	include: gist_url_rx,
	contentScriptFile: [data.url('jquery.js'), data.url('cs.js')]
});
 
var showHotKey = Hotkey({
	combo: "accel-z",
	onPress: function() {
		if (!gist_url_rx.test(tabs.activeTab.url)) {
			return;
		}
		var gist_id = /.+\/([\d]+)$/.exec(tabs.activeTab.url).pop();
	var gist_io_url = 'http://gist.io/'+ gist_id;
	tabs.activeTab.url = gist_io_url;
	}
});

