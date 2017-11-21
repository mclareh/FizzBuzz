(function(){
function ControllerThree(ServiceOne) {
	var vm = this;
	vm.newNum = 0;
	vm.numInfo = "";
	vm.num = 0;
	vm.numFizz = ServiceOne.numFizz;
	vm.changeNum = function() {
		vm.num = vm.newNum;
		console.log(vm.num);
		ServiceOne.checkNum(vm.num);
		vm.numInfo = ServiceOne.getNum();
	};
	
}
	
angular
	.module("app")
	.controller("ControllerThree", ControllerThree)
})();