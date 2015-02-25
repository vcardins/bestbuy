
BestBuy.Utils.Ajax = (function(){
	'use strict'

	return {
		get: get,
		post: post
	};

	function get(url, data, callback, async) {
	    request(url, data, callback, 'GET', async);
	};

	function post (url, data, callback, async) {
	    request(url, data, callback, 'POST', async);
	};

	function request(url, data, callback, method, async) {
	    var query = [];
	    for (var key in data) {
	        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	    }
	    if (query.length > 0) {
	    	url += '?' + query.join('&');
	    }
	    send(url, callback, method, null, async)
	};

	function send(url, callback, method, data, async) {
	    var x = new XMLHttpRequest();
	    x.open(method, url, async);
	    x.onreadystatechange = function() {
	        if (x.readyState == 4) {
	            callback(x.responseText)
	        }
	    };
	    if (method == 'POST') {
	        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    }
	    x.send(data)
	};

})();