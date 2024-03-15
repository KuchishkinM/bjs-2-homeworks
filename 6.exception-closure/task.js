function parseCount(item) {
  let number = Number.parseFloat(item);
  if (isNaN(number)) {
    throw new Error('Невалидное значение')
  }
  return number
}

function validateCount(item) {
  try {
    return parseCount(item)
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if (this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideB + this.sideC < this.sideA) {
      throw new Error('Треугольник с такими сторонами не существует')
    }
  };

  get perimeter() {
    return this.sideA + this.sideB + this.sideC
  }

  get area() {
    let halfPerimeter = this.perimeter / 2
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC))
    return Number(area.toFixed(3))
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC)
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      },
      get area() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}