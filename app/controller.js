"use strict";
//we are puttiing in cntroller whatever name is in config.
//$scope is the variables that are public within this controller.
app.controller("mushroomCntrl", function(
    $scope, Factory) {
    //Named this in Factory
    Factory.getMushroom()
        .then(function(mushroomCollection) {

            let newarray = [];


            for (let property in mushroomCollection) {

                newarray.push(mushroomCollection[property]);

            }
            console.log("newarray", newarray);

            //musrooms(can be taco)
            $scope.mushrooms = newarray;
            console.log($scope.mushrooms);

        });
});
