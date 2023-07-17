// Here we consider our House to be the product.  Our house is a complex
// Object that requires lots of members to be intialized. We create a seperate Builder class that implements an interface for builders
// and make it build each member of our (Product/House) class in a seperate function.
// A director class could be used to choose the right builder and pre-define building steps.

// To run this app
// npm install -g ts-node
// ts-node builder.ts


class House {
  // defining the members needed to build the product
  doors: Number = 0;
  windows: Number = 0;
  garden: Boolean = false;
  roof: Boolean = false;
  constructor() {}
  printHouse() {
    console.log("Printing Started....");
    console.log("doors are", this.doors);
    console.log("windows are", this.windows);
    console.log("garden is", this.garden);
    console.log("roof is", this.roof);
    console.log("Printing Finished....");
  }
}

interface Builder {
  house: House;
  build(): House;
  setDoors(doors: Number):void;
  setWindows(windows: Number):void;
  setGarden(garden: Boolean):void;
  setRoof(roof: Boolean):void;
  reset():void;
}

class HouseBuilderA implements Builder {
  house: House;
  constructor() {
    // initiates the product
    this.house = new House();
  }
  setDoors(doors:Number) {
    // door complex logic
    this.house.doors = doors;
  }
  setWindows(windows:Number) {
    this.house.windows = windows;
  }
  setGarden(garden:Boolean) {
    this.house.garden = garden;
  }
  setRoof(roof:Boolean) {
    this.house.roof = roof;
  }
  build(): House {
    // always copying the product the then resetting it after
    const houseTemp = this.house;
    this.reset();
    return houseTemp;
  }
  reset() {
    this.house = new House();
  }
}

// this class could be omitted if needed, it is useful to create a layer between creating builders and choosing
// which builder to use. also you can pre-define your building process in functions over here.
// Having a director class in your program isn’t strictly neces-sary.
class Director {
  builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  builderNormalHouse() {
    this.builder.setDoors(1);
    this.builder.setWindows(5);
    this.builder.setGarden(false);
    this.builder.setRoof(true);
  }
  buildLuxuryHouse() {
    this.builder.setDoors(100);
    this.builder.setWindows(100);
    this.builder.setGarden(true);
    this.builder.setRoof(true);
  }
}
function logTitle(message:String){
console.log(`--------------------------- ${message} ------------------------------`)
}
function main() {
  const houseBuilder = new HouseBuilderA();
  const director = new Director(houseBuilder);
  director.buildLuxuryHouse();

  const luxuryHouse = houseBuilder.build();

  director.builderNormalHouse();

  const normalHouse = houseBuilder.build();

  logTitle(" print luxuryHouse")
  luxuryHouse.printHouse();

  logTitle(" print normalHouse")
  normalHouse.printHouse();


  const customeHouseBuilder = new HouseBuilderA()
  customeHouseBuilder.setDoors(2)
  customeHouseBuilder.setWindows(6)
  customeHouseBuilder.setRoof(true)
  customeHouseBuilder.setGarden(false)


  const customeHouse = customeHouseBuilder.build();

  logTitle(" print customeHouse")
  customeHouse.printHouse()

}

main();

/*
Use the Builder pattern when you want your code to be able to
create different representations of some product (for example,
stone and wooden houses).

Some of the construction steps might require different imple-
mentation when you need to build various representations of
the product. For example, walls of a cabin may be built of
wood, but the castle walls must be built with stone.
*/
