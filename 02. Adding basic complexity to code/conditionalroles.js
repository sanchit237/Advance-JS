// var role = "admin";
var role = "user";

switch (role) {

	case "admin":
		console.log("Gets full access");
		break;

	case "subadmin":
	console.log("Gets full access to create / delete courses");
	break;

	case "testprep":
		console.log("Gets full access to create / delete tests");
		break;

	case "user":
	console.log("Gets access to consume content");
	break;	

	default:
		console.log("Trial user");
		break;
}