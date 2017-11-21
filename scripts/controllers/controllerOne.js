(function(){
function ControllerOne() {
	var vm = this;
	vm.info = [];
	vm.favFood = ["whatever", "food", "loala"];
	vm.morganInfo = function () {
		vm.info.push(vm.favFood[0]);
		console.log("morgan button working");
	};
	vm.muhammedInfo = function () {
		vm.info.push(vm.favFood[1]);
		console.log("muhammed button working");
	};
	vm.mcInfo = function () {
		vm.info.push(vm.favFood[2]);
		console.log("mc button working");
	};
}
	
angular
	.module("app")
	.controller("ControllerOne", ControllerOne);
})();