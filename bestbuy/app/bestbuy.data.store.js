BestBuy.Data.Store = (function(){
	'use strict'
	
	var ajax = BestBuy.Utils.Ajax,
		jsonp = BestBuy.Utils.JSONP;
	
	var _params = {}, 
		_products = [], 
		_product = [], 
		_categories = undefined, 
		_result = undefined;

	return {
		getProducts : getProducts,
		getProductDetails : getProductDetails,
		getCategories : getCategories
	}	

	function getProducts (categoryId, onSuccess) {		
		var qs = _params,
			key = 'all';
	
		if (categoryId) {
			qs.categoryId = categoryId;
			key = categoryId;
		}

		if (_products[key]) { 
			if (typeof(onSuccess) === 'function') {
				onSuccess(_products[key]);
			}	
		} else {
			jsonp.get(BestBuy.Config.apiBase + 'search', qs, function(data) {			
				_products[key] = data.products;
				if (typeof(onSuccess) === 'function') {
					onSuccess(data.products);
				}
			});			
		}
		
	};

	function getCategories (onSuccess) {

		if (_categories) { 
			if (typeof(onSuccess) === 'function') {
				onSuccess(_categories);
			}
		} else {
			jsonp.get(BestBuy.Config.apiBase + 'category/departments', {}, function(data) {			
				_categories = data.subCategories;
				if (typeof(onSuccess) === 'function') {
					onSuccess(_categories);
				}
			});		
		}

	};

	function getProductDetails (productId, onSuccess) {

		if (_product[productId]) { 
			if (typeof(onSuccess) === 'function') {
				onSuccess(_product[productId]); 
			}						
		} else {
			jsonp.get(BestBuy.Config.apiBase + 'product/' + productId, _params, function(data) {	
				_product[productId] = data;
				if (typeof(onSuccess) === 'function') {
					onSuccess(_product[productId]); 
				}					
			});	
		}

	};

})();
