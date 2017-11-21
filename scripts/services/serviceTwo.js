(function() {
    function ServiceTwo($location, $http) {
        var weatherData = {};
        
        return {
            weatherRequest: weatherRequest,
            weatherReturn: weatherReturn
        };
        function weatherRequest(state, city) {
            return $http({
                method: "GET",
                url: "http://api.wunderground.com/api/43104bd34a030ed2/conditions/q/" + state + "/" + city + ".json"
            }).then(function (display) {
                weatherData = display;
                console.log(weatherData);
            });
        }
        function weatherReturn() {
            return weatherData;
        }
    }
  
    angular
      .module("app")
      .factory("ServiceTwo", ServiceTwo);
})();