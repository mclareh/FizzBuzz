(function() {
var componentThree = {
	controller: "ControllerThree",
	template: `
		<input type="text" placeholder="enter a number" ng-model="$ctrl.newNum">
		<p> {{ $ctrl.newNum }} </p>
		<p> {{ $ctrl.numFizz }} {{ $ctrl.numBuzz }} {{ $ctrl.numNada }} </p>
		<button ng-click="$ctrl.changeNum();">enter</button>
	<p> {{ $ctrl.numInfo }} </p>
	`			
};

angular
	.module("app")
	.component("componentThree", componentThree)
})();