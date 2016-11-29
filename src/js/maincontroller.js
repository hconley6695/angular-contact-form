
function MainController($scope, $http) {
	$scope.contacts = [];
	$scope.errors = {};


	$scope.validateName = function (name) {
		if (name === '') {
			$scope.errors.name = "You must supply a name."

		};
		// HAD THIS LINE IN TO CLEAR TYPED IN DATA
		// $scope.errors = '';		
	};

	// $scope.validateEmail = function (email) {
	// 	if  (email !== email.includes('@')) {
	// 		$scope.errors.email = "You must include an @ in your email address." 
	// 	}
	// 	else if (email === '' ) {
	// 		$scope.errors.email = "You must supply an email address."
	// 	} else {
	// 		$scope.errors.email = "I don't know what I'm doing."
	// 	}; 
	// }



	// $scope.validateWebsite = function (site) {
	// 	// || site.startsWith('http://') || site.startsWith('https://')
	// 	if (site === '' ) {
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
		let newPerson = {
			name: person.name, 
			email: person.email, 
			website: person.website, 
			comments: person.comments, 
			id: $scope.contacts.length + 1
		};
		
		console.log (newPerson);		
		
		$scope.contacts.push(newPerson);
		console.log($scope.contacts);

		$scope.person.name = " ";
		$scope.person.email = " ";
		$scope.person.website = " ";
		$scope.person.comments = " ";
	}

	// console.log($scope.contacts);
	// console.log("Am I doing this correctly?");
}

MainController.$inject = ['$scope', '$http'];
export { MainController };




