
BestBuy.Utils.DOM = (function(document){
	'use strict'

	return {
		addEvent : addEventListenerByClass,
		removeClass : removeClass,
		addClass : addClass,
		el : getElementByQuery,
		attr : getAttribute
	};

	function addEventListenerByClass(className, event, fn) {
	    var list = document.getElementsByClassName(className);
	    for (var i = 0, len = list.length; i < len; i++) {
	        list[i].addEventListener(event, fn, false);
	    }
	}

	function removeClass(className, callback) {
	    var list = document.getElementsByClassName(className);
	    for (var i = 0, len = list.length; i < len; i++) {
	        list[i].className = list[i].className.replace(className,'');
	    }
	    if (typeof(callback) === 'function') {
	    	callback();
	    }
	}

	function addClass(el, className) {
	    el.setAttribute("class", className);
	}

	function getElementByQuery() {
		
		var el;
		if (arguments.length === 1) {
			el = document.getElementById(arguments[0]);
			if (!el) {
				el = document.querySelector(arguments[0]);	
			}
		} else if (arguments.length === 3) {			
			var t = document.querySelector(arguments[0]);
			if (t) {	
				var data = t.dataset;
				el = data[arguments[1]];
			}
		}

	    return el;
	}

	function getAttribute(el, id) {
		return el.getAttribute(id);	
	}

	(function() {
		String.prototype.text = function() {
			return BestBuy.Utils.Common.getParameterByName(this);
		}
	})();

})(document);