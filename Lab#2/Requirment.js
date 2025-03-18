/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class pt {
  //this constructor is used to construct the pt class 
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
}

class Quadrilateral {
  //this constructor is used to construct the Quadrilateral class 
  constructor(startingPoint, width, height, isSquare) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0 or if inputs not provided or null
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
    this.isSquare = isSquare;
  }

  // ***************
  // METHODS
  // ***************

  area() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  updateSquare(length) {
    if (this.isSquare) {
      this.width = length;
      this.height = length;
    }
  }

  setHeight(height) {
    if (this.isSquare) {
      throw Error("This is a square use the updateSquare method");
    }
    if (height && height > 0) {
      this.h = height;
    }
  }

  setWidth(width) {
    if (this.isSquare) {
      throw Error("This is a square use the updateSquare method");
    }
    if (width && width > 0) {
      this.width = width;
    }
  }

  updateRect({ startingPoint, width, height }) {
    if (this.isSquare) {
      throw Error("This is a square");
    }
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0 or null
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  getHeight() {
    return this.height;
  }


  printEndPoints() {
    const topRight = this.startingPoint.coordX + this.width;
    const bottomLeft = this.startingPoint.coordY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  getWidth() {
    return this.width;
  }
}

function constructQuad(width, cordX, height, cordY) {
  if (!cordX || !cordY) {
    throw Error("invalid coordinates");
  }
  if (height && height > 0 && width && width > 0) {
    const mainPoint = new pt(cordX, cordY);
    const rect = new Quadrilateral(mainPoint, width, height);
    return rect;
  } else {
    throw Error("invalid height or width");
  }
}

function constructSquare(cordX, cordY, squareHeight) {
  let square;
  if (!cordX || !cordY) {
    throw Error("invalid coordinates");
  }
  if (squareHeight && squareHeight > 0) {
    square = constructQuad(squareHeight, cordX, squareHeight, cordY);
  }
  else {
    throw Error("invalid square height");
  }
  return square;
}

const rect = constructQuad(2, 3, 5, 4);
const square = constructSquare(1, 2, 5);

console.log(square.calculatePerimeter());
square.printEndPoints();
rect.setHeight(3);
