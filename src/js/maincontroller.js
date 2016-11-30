
import { SERVER } from './server';

function MainController($scope, $http) {
	$scope.contacts = [];
	// $scope.errors = {};


	function init() {
		$http.get(SERVER).then((resp) => {
			$scope.contacts = resp.data;
		});
	};

	init();

	$scope.addContact = function (person) {

		$http.post(SERVER, person).then((resp) => {
			//CREATED NEW OBJECT
			console.log ('response', resp);		
			let person = resp.data; 

			console.log('person', person);


			//ADDING NEW PERSON TO ARRAY NAMED CONTACTS
			$scope.contacts.push(person);
			console.log($scope.contacts);

			//CLEARING INPUT SO THAT PLACEHOLDERS SHOW UP AFTER PRESS SUBMIT BUTTON
			$scope.person.name = " ";
			$scope.person.email = " ";
			$scope.person.website = " ";
			$scope.person.comments = " ";		

		});
	}


	// $scope.validateName = function (name) {
	// 	if (name === '') {
	// 		$scope.errors.name = "You must supply a name."

	// 	};
	// 	// HAD THIS LINE IN TO CLEAR TYPED IN DATA
	// 	// $scope.errors = '';		
	// };

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
	

}

MainController.$inject = ['$scope', '$http'];
export { MainController };




