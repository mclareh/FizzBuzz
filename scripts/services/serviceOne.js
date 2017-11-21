(function() {
function ServiceOne() {
	var numFizz = "";
	var numBuzz = "";
	var numNada = "";
	this.checkNum = function(num) {
		console.log(num);
		if (num % 5 === 0 ) {
			numFizz = "number is fizzy";
		} else if (num % 3 === 0) {
			numBuzz = "number is buzzy";
		} else {
			numNada = "no";
		}
	};
	this.getNum = function() {
		return this.num;
	};
}
	

angular
	.module("app")
	.service("ServiceOne", ServiceOne);

})();