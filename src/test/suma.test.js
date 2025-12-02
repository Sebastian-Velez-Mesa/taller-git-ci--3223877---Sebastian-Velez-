const { test, describe } = require("node:test");
const suma = require("../app");

test("suma 1 + 2 es igual a 3", () => {
  const resultado = suma(1, 2);
  if (resultado !== 3) {
    throw new Error(`Esperado 3, recibido ${resultado}`);
  }
});
