const user1 = {
	name : "abc",
	age : 20,
	info : function(){
		console.log(`My name is ${this.name}`);
	}
};

const user2 = {
	name : "def",
	age : 30,
};

user1.info();

user1.info.call(user2);