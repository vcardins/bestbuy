
BestBuy.Utils.Common = (function(){
	'use strict'

	return {
		getParameterByName : getParameterByName,
		getHashParameter : getHashParameter
	};

	function getParameterByName(name) {
		name = name.valueOf();
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function getHashParameter(hash) {
	    return hash.replace('#','');
	}

})();