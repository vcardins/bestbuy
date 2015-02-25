BestBuy.Utils.JSONP = (function(document){
	'use strict'

 	var requests = 0,
        head = document.getElementsByTagName('head')[0];

	return {
		get: get
	};

	function get(src, data, callback) {

        // check if data was passed
        if (!arguments[2]) {
            callback = arguments[1];
            data = {};
        }
		
        // determine if there already are params
        src += (src.indexOf('?')+1 ? '&' : '?');

        var script = document.createElement('script'),
            params = [],
            requestId = requests,
            param;
        
        // increment the requests
        requests++;

        // create external callback name
        data.callback = 'callback_request_' + requestId;
        
        // set callback function
        window['callback_request_' + requestId] = function (data) {
            // clean up
            head.removeChild(script);
            delete window['callback_request_' + requestId];

            // fire callback
            callback(data); 
        };
        
        // traverse data
        for (param in data) {
            params.push(param + '=' + encodeURIComponent(data[param]));
        }

        // generate params
        src += params.join('&');

        // set script attributes
        script.type = 'text/javascript';
        script.src = src;

        // add to the DOM
        head.appendChild(script); 
	}

})(document);