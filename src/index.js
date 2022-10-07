// No descomentar la siguiente línea :-)
// prettier-ignore
const WORDS = ["abre", "allo", "amas", "amen", "ames", "ampo", "ando", "anos", "anuo", "aoja", "aojo", "aran", "aras", "arda", "ardo", "aren", "ares", "ario", "arma", "asan", "asas", "asen", "aseo", "ases", "asia", "atas", "ates", "auno", "aves", "ayas", "baga", "bala", "bañe", "bisa", "boas", "boba", "boja", "bojo", "bosa", "bota", "bote", "boto", "boya", "boyo", "cace", "caen", "caer", "calo", "case", "cave", "cayo", "cedo", "cefo", "ceno", "cesa", "chad", "coge", "coja", "cojo", "come", "crea", "cree", "cuba", "dañe", "deja", "dias", "dijo", "dime", "dome", "dora", "dore", "duos", "dura", "echa", "echo", "ecos", "emes", "emus", "enes", "eñes", "enya", "eran", "eras", "eres", "esas", "eses", "fico", "fumo", "gato", "goda", "guam", "hace", "haga", "hago", "hala", "hara", "hare", "haya", "hice", "hile", "hube", "hubo", "huna", "huya", "iban", "ibas", "ices", "idas", "idos", "iran", "iras", "iria", "izas", "jade", "jugo", "kiev", "lami", "lave", "lees", "lega", "leia", "lima", "loas", "luca", "lusa", "mala", "mali", "mece", "medi", "mees", "mesa", "mese", "meso", "meto", "mide", "moja", "mojo", "mola", "moño", "more", "moza", "muca", "nace", "ndea", "niue", "note", "nuda", "nuez", "nula", "odas", "ojos", "olas", "Oman", "oras", "oren", "ores", "orno", "orzo"]; // eslint-disable-line no-use-before-define
const WORD_SIZE = 4;
const colors = require("colors");
const { get } = require("http");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Nuestras variables

// Tu código empieza aquí

let intentos = 0;

var recursiveAsyncReadLine = function() {
  readline.question("Command: ", function(answer) {
    intentos++;

    if (intentos == 6) return readline.close();

    console.log(`Has introducido ${answer}`);

    recursiveAsyncReadLine();
  });
};

function askUserWord() {
  let input = "";

  readline.question(`Introduce una Palabra de tamaño ${WORD_SIZE}: `, (word) => {
    if (word.length !== WORD_SIZE) { return false; }

    input = word;

    console.log(`La palabra ingresada es ${word.green}!`);

    readline.close();
  });

  return input;
}

/**
 * Método que llama una palabra aleatoria de un array
 * @constructor
 */
function getRandomWord() {
  return (WORDS[Math.floor(Math.random() * WORDS.length)]);
}

const testring = getRandomWord();
console.log("La palabra aleatoria es: " + testring); // Para testear, saca por pantalla esa palabra
const testring2 = "paoc";

const divided1 = testring.split(""); // Convierte el string en un array de carácteres y lo guarda en una variable.
const divided2 = testring2.split("");// Convierte el string en un array de carácteres y lo guarda en una variable.

const final = [];

/**
 * Método que llama dos arrays y los compara con cada elemento individualmente
 * @constructor
 */
function compareLetter(divided1, divided2) {
  for (let i = 0; i < divided1.length; i++) {
    if (divided1[i] === divided2[i]) { // Si tienen el mismo valor, se colorea verde
      final.push(divided2[i]);
      console.log(final[i].green);
    } else if (divided1.includes(divided2[i])) { // Si tiene mismo valor pero en posiciones distintas, se colorea amarillo
      final.push(divided2[i]);
      console.log(final[i].yellow);
    } else {
      final.push(divided2[i]); // Si no tiene mismo valor, se colorea rojo
      console.log(final[i].red);
    }
  }
}
(compareLetter(divided1, divided2));
