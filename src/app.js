// Función que genera una excusa aleatoria
function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Seleccionar un elemento aleatorio de cada array
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Concatenar la excusa
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Función que actualiza el contenido del elemento #excuse al cargar la página
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};

// Evento que escucha el clic del botón para generar una nueva excusa
document
  .getElementById("generateExcuseButton")
  .addEventListener("click", function() {
    document.getElementById("excuse").innerHTML = generateExcuse();
  });
