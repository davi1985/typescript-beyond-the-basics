export function add(x: unknown, y: unknown) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }

  return `${x} ${y}`;
}

// console.log(add('a', 2));

type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  if ('color' in obj) {
    console.log(obj.color);
  }

  if (obj instanceof Student) {
    console.log(obj.name);
  }
}

showName(new Student('Jonh'));
