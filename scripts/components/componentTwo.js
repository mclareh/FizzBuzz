(function () {
    var componentTwo = {
            controller: "ControllerTwo",
            template: ` 
            <input type="text" placeholder="City" ng-model="$ctrl.city">
            <input type="text" placeholder="State" ng-model="$ctrl.state">
            <button type="button" ng-click="$ctrl.weatherInformation($ctrl.state, $ctrl.city)">Enter</button>
            <p> {{$ctrl.weatherJSON.data.current_observation.temp_f}} </p>
        `
        };
    angular
        .module("app")
        .component("componentTwo", componentTwo);
})();