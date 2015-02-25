BestBuy.Core.Store = (function(document, Store, $, Modal){
	
	'use strict'

	var me = this;
	var _contentPanel, _sidebarPanel, _categoryId, $;

	return {
		init : init
	}	

	function init (categoryId) {

		_contentPanel = $.el('content');
		_sidebarPanel = $.el('sidebar');

		_categoryId = categoryId;
		
		Store.getProducts(categoryId, listProducts); 
		Store.getCategories(listCategories); 		
	}


	function listProducts(products) {
		_contentPanel.innerHTML = Mustache.render('<ul>{{#.}} <li class="product-item" data-id="{{sku}}"><div class="image"><img src="' + BestBuy.Config.domain + '{{thumbnailImage}}" title="{{name}}"/></div><div class="amount">${{regularPrice}}</div><div class="discount">Discount</div></li>{{/.}}</ul>', products);
		$.addEvent('product-item','click', displayProduct);
	}

	function listCategories(categories) {
		_sidebarPanel.innerHTML = Mustache.render('<ul>{{#.}} <li id="ctg_{{id}}" class="category-item" data-id="{{id}}"><div class="title">{{name}}</div></li>{{/.}}</ul>', categories);
		$.addEvent('category-item','click', listProductByCategory);
		var el = $.el('#ctg_'+_categoryId);
		if (el) $.addClass(el, 'active');
	}

	function displayProduct () {

		var sku = $.attr(this,'data-id');	

		Store.getProductDetails(sku, function(product) {

			product.domainUrl = BestBuy.Config.domain;
			var modal = $.el('productDetail');
			var output = Mustache.render(modal.innerHTML, product);

			Modal.open({ content: output, draggable: true });

		});

	}

	function listProductByCategory () {
		var el = this;
		_contentPanel.innerHTML = '<div class="spinner"></div>';

		$.removeClass('active', function() {
			$.addClass(el, 'active');
		});		

		_categoryId = $.attr(el,'data-id');
		location.hash = _categoryId;
		Store.getProducts(_categoryId, listProducts);
	}

})(document, BestBuy.Data.Store, BestBuy.Utils.DOM, Modal);