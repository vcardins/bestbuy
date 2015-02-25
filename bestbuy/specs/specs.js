// Code inlined in the HTML
// Tests here

QUnit.test('Config setup', function (assert) {
    expect(2);

    assert.strictEqual(BestBuy.Config.domain, 'http://www.bestbuy.ca/', 'Valid Domain');
    assert.strictEqual(BestBuy.Config.application, 'BBYC', 'Valid Application Name');
    
});

QUnit.test('Products', function (assert) {
    expect(3);
    
    var done = assert.async();
    BestBuy.Data.Store.getProducts(null, 
      function(data) {
        assert.strictEqual(data.length, 32, 'Valid Product Count');
        done();
      }
    );

    var done2 = assert.async();
    BestBuy.Data.Store.getProducts(20002, 
      function(data) {
        assert.ok(data.length > 0, 'Product By Category');
        done2();
      }
    );

    var done3 = assert.async();
    BestBuy.Data.Store.getProductDetails(10341178, 
      function(data) {
        assert.strictEqual(data.name, 'HP Stream S7-5701CA 7" 32GB Windows 8.1 Tablet With Intel Atom Z3735G Processor - Black Licorice', 'Product Details');
        done3();
      }
    );
    
});

QUnit.test('Categories', function (assert) {
    expect(1);
    
    var done = assert.async();
    BestBuy.Data.Store.getCategories(function(data) {
        assert.ok(data.length > 0, 'Categories');
        done();
      }
    );
});