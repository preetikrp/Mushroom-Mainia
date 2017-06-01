"use strict";
app.factory("Factory", function($q, $http){
	//$q is angngular promise and $http is angular ajax call
	let getMushroom = () => {
		let types = [];
		return $q((resolve, reject) => {
			//$http.get is looking into datafolder and file mushroom.json
			$http.get('https://mushrooms-916cf.firebaseio.com/.json')
			//(itemObject is just the name)
			//=> annonymous function
			.then((itemObject) =>{
				let itemName = itemObject.data;
				console.log("itemObject", itemObject);
				console.log("itemName", itemName);
				resolve(itemName.mushrooms);
			})
			//if the error happens it will catch

			.catch((error) => {
				reject(error);
			});

		});
	};
	 // return getFlavors(); //returns the promise, invoking it, which resolves it.
  return {getMushroom};
});