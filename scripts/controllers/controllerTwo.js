(function() {
	
    function ControllerTwo (ServiceTwo){
        var vm = this;
        vm.weatherJSON= [];
        vm.weatherInformation = function(state, city) {
            ServiceTwo.weatherRequest(state, city).then(function() {
                vm.weatherJSON = ServiceTwo.weatherReturn();
                console.log(vm.weatherJSON)
            });
        };
    
    };
    
    angular
        .module("app")
        .controller("ControllerTwo", ControllerTwo);
    
})();