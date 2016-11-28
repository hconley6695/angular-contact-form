
function MainController($scope, $http) {
	$scope.contacts = [];
	$scope.errors = {};


	$scope.validateName = function (name) {
		if (name === '') {
			$scope.errors.name = "You must supply a name."
		};
	};

	// $scope.validateEmail = function (emailAddress) {
	// 	if (emailAddress === '' || emailAddress.includes('@')) {
	// 		$scope.errors.emailAddress = "You must supply an email address."
	// 	}; 
	// }



	// $scope.validateWebsite = function (site) {
	// 	if (site === '' || site.startsWith('http://') || site.startsWith('https://')) {
	// 		$scope.errors.site = "You must supply a valid website."
	// 	};
	// }

	// $scope.validateMsg = function (msg) {
	// 	if (msg === '') {
	// 		$scope.errors.msg = "You must fill out a comment."
	// 	};
	// }
	

	// 'https://class-server.herokuapp.com/collections/hconley-contactform'

	$scope.addContact = function (person) {
		
	}


	console.log("Am I doing this correctly?");
}

MainController.$inject = ['$scope', '$http'];
export { MainController };