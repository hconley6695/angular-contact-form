
function MainController($scope) {
	$scope.contacts = [];

	$scope.addContact = function (person) {
		let newContact = { fullname: fullname, email: email, website: website, comments: comments};
		$scope.contacts.push();
		console.log($scope.contacts);
	}
	

	console.log("Am I doing this correctly?");
}

MainController.$inject = ['$scope'];
export { MainController };