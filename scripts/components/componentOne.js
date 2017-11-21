(function() {
var componentOne = {
	controller: "ControllerOne",
	template: `
		<h1>our favorite foods</h>
		<button ng-click="$ctrl.morganInfo();">morgan</button>
		<button ng-click="$ctrl.muhammedInfo();">muhammed</button>
		<button ng-click="$ctrl.mcInfo();">mc</button>
		<p> {{ $ctrl.info }} </p>
	`
};

angular
	.module("app")
	.component("componentOne", componentOne);
})();