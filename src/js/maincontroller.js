
import { SERVER } from './server';

function MainController($scope, $http) {
	$scope.contacts = [];
	$scope.errors = {};


	function init() {
		$http.get(SERVER).then((resp) => {
			$scope.contacts = resp.data;
		});
	};

	init();

	$scope.addContact = function (person) {
		// if ($scope.validateEmail(person.email) && $scope.validateName(person.name) && $scope.validateWebsite(person.site) && $scope.validateMsg(person.msg)) {
		if ($scope.validateName(person.name) && $scope.validateMsg(person.comments)) {	
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
		} else {
			console.log("You have a problem.");
		}
	};

	$scope.deleteItem = function (person) {
		console.log(person._id);

		$http.delete(SERVER + '/' + person._id).then((resp) => {
			console.log(resp);
			$scope.contacts = $scope.contacts.filter((obj) => {
				return obj._id !== person._id;
			});
		});
	}


	$scope.validateName = function (name) {
		if (name === '') {
			$scope.errors.name = "You must supply a name."

		};
	};

	// $scope.validateEmail = function (email) {
	// 	if  (!email.includes('@')) {
	// 		$scope.errors.email = "You must include an @ in your email address." 
	// 		return false;
	// 	}
		
	// 	if (email === '' ) {
	// 		$scope.errors.email = " ";
	// 	} 

	// 	return true;
	// }



	// $scope.validateWebsite = function (site) {
	// 	if (!site.startsWith('http')) {
	// 		$scope.errors.site = "You must supply a valid web address starting with http:// or https://"
	// 		return false;
	// 	}

	// 	if (site === '' ) {
	// 		$scope.errors.site = " ";
	// 	};

	// 	return true;
	// }

	$scope.validateMsg = function (comments) {
		if (comments === '') {
			$scope.errors.comments = "You must fill out a comment."
		};
	}
	

}

MainController.$inject = ['$scope', '$http'];
export { MainController };




