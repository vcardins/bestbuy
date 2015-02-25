//Define the namespaces
var BestBuy = BestBuy || {};
BestBuy.Utils = {};
BestBuy.Core = {};
BestBuy.Data = {};

//Site wide configuration parameters
BestBuy.Config = (function(){
	'use strict'

	var domain = 'http://www.bestbuy.ca/',
		config = {		
			domain : domain,
			apiBase : domain + 'api/v2/json/',
			application : 'BBYC',
			apiKey: '9qe6x6k6wturma7whkqbw74m'
		};

	(function() {
		String.prototype.qsParam = function() {
			return BestBuy.Utils.Common.getParameterByName(this);
		}
		String.prototype.hashParam = function() {
			return BestBuy.Utils.Common.getHashParameter(location.hash);
		}
	})();

	return config;

})();
