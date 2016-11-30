
import { SERVER } from './server';

function MainController($scope, $http) {
	$scope.contacts = [];
	// $scope.errors = {};


	function init() {

		console.log($scope.contacts);

		$http.get(SERVER).then((resp) => {
			console.log(resp.data);

			$scope.contacts = resp.data;
			$scope.contacts.splice(0, 4);
			$scope.contacts.splice(2, 6);

			console.log($scope.contacts);

		});
		


	};

	init();

	$scope.addContact = function (person) {


		$http.post(SERVER, person).then((resp) => {
			//CREATED NEW OBJECT
			console.log (resp);		

			let person = {
				name: resp.name, 
				email: resp.email, 
				website: resp.website, 
				comments: resp.comments, 
				id: $scope.contacts.length + 1
			};

			// $scope.contacts.push(person);

		})
		
	
		//ADDING NEW PERSON TO ARRAY NAMED CONTACTS

		console.log($scope.contacts);
		//CLEARING INPUT SO THAT PLACEHOLDERS SHOW UP AFTER PRESS SUBMIT BUTTON
		$scope.person.name = " ";
		$scope.person.email = " ";
		$scope.person.website = " ";
		$scope.person.comments = " ";
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




