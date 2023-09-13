type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  red: 'vermelho',
  blue: 'azul',
  green: 'verde',
};

function translateColor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color];
}

// console.log(translateColor('red', colorsObj));
