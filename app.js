(function() {
	var app = angular.module('store', []);

	app.controlller('StoreController', function(){
		this.product = gem;

	});

	var gem ={
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
	};

})();