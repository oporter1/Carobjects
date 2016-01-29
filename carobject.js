//story1
var car = {make:"Saab", model:"S900", year:"1998", getData: function()
        {return this.make + "," + this.model + "," + this.year;
        }
      }
______________________________
//story 2
function newCar(newMake, newModel, newYear) {
  var speed=10;
  return {
      make: newMake,
      model: newModel,
      year: newYear,
      mph: speed,
      getData: function() {
        return this.make + "," + this.model + "," + this.year;
      },
      accelate: function() {
        speed = speed + 10
        if (speed <= 85){
        return speed}
      }
  };
}
// var saab = newCar("saab", "s900", "1998");
____________________
//story 3

function newCar(newMake, newModel, newYear) {
    var speed=10;
    return {
        make: newMake,
        model: newModel,
        year: newYear,
        mph: speed,
        getData: function() {
          return this.make + "," + this.model + "," + this.year;
        },
        increaseSpeed: function () {
          while(speed<=60) {
            speed = speed + 10;
            console.log(speed);
          }
        },

        decreaseSpeed: function () {
          while(speed > 0) {
            speed = speed - 10;
            console.log(speed);
            }
        }
      }
    }
//fluidly increasing then decreasing
function increaseDecrease (car) {
  car.increaseSpeed();
  car.decreaseSpeed();
  }
_______________________
Story 4 (stretch):

Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed with a random amount with a maximum of plus or minus of the current speed. (Hint: try Math.random();)
Resources

var brakes

brakes change speed a math.Floor(math.Random) with > of +-decreaseSpeed
