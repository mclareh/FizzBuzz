(function(){
	
angular
	.module("app", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/one", {
			template: `
				<component-one></component-one>
				`,
			})
			.when("/two", {
			template: `
				<component-two></component-two>
				`,
			})
			.when("/three", {
			template: `
				<component-three></component-three>
			`,
		});
});
	
})();