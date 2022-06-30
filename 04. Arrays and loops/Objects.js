var mobile = {
		modelName : "Redmi note 9 pro",
		camera: "18 megapixel",
		ram: "4 GB",
		storage: "64 GB",
		processor: "Snapdragon",
		functionality : function(){
			return `Model is ${this.modelName}, Camera is ${this.camera}, Ram is ${this.ram}, Storage is ${this.storage} and processor is ${this.processor}`;
		}
};

console.table(mobile);
console.log(mobile.functionality());