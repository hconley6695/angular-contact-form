
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
		//RUNS VALIDATIONS.  IF ALL ARE TRUE, WILL ADD THE CONTACT
		if ($scope.validateName(person.name) && $scope.validateMsg(person.comments) && $scope.validateEmail(person.email) && $scope.validateWebsite(person.site)) {	
			$http.post(SERVER, person).then((resp) => {
				//CREATED NEW OBJECT	
				let person = resp.data; 

				//ADDING NEW PERSON TO ARRAY NAMED CONTACTS
				$scope.contacts.push(person);
				console.log($scope.contacts);

				//CLEARING INPUT SO THAT PLACEHOLDERS SHOW UP AFTER PRESS SUBMIT BUTTON
				$scope.person.name = " ";
				$scope.person.email = " ";
				$scope.person.site = " ";
				$scope.person.comments = " ";		

			});
		} else {
			//ALERTS ME TO AN ERROR
			console.log("You have a problem.");
		}
	};

	$scope.deleteItem = function (person) {
		// console.log(person._id);

		$http.delete(SERVER + '/' + person._id).then((resp) => {
			// console.log(resp);
			//RETURN ALL OBJECTS FROM THE SERVER THAT DO NOT MATCH THIS ID
			$scope.contacts = $scope.contacts.filter((obj) => {
				return obj._id !== person._id;
			});
		});
	}

//VALIDATIONS--IF THIS CONDITIONS ARE TRUE, RETURN FALSE, IF NONE OF CONDITIONS ARE TRUE, RETURN TRUE
	$scope.validateName = function (name) {
		if (name === '') {
			$scope.errors.name = "Name cannot be left empty."

		};

		return true;
	};

	$scope.validateEmail = function (email) {
		console.log(email);
		if  (!email.includes('@')) {
			$scope.errors.email = "Your email address must include @." 
			return false;
		}
		
		if (email === '' ) {
			$scope.errors.email = " ";
		} 

		return true;

	}



	$scope.validateWebsite = function (site) {

		if (!site.startsWith('http')) {
			$scope.errors.site = "You must supply a valid web address starting with http:// or https://"
			return false;
		}

		if (site === '' ) {
			$scope.errors.site = " ";
		};

		return true;

	}

	$scope.validateMsg = function (comments) {
		
		if (comments === '') {
			$scope.errors.comments = "Comments cannot be left empty."
		};

		return true;

	}
	

}

MainController.$inject = ['$scope', '$http'];
export { MainController };




