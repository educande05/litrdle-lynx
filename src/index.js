const WORDS = ["abre", "allo", "amas", "amen", "ames", "ampo", "ando", "anos", "anuo", "aoja", "aojo", "aran", "aras", "arda", "ardo", "aren", "ares", "ario", "arma", "asan", "asas", "asen", "aseo", "ases", "asia", "atas", "ates", "auno", "aves", "ayas", "baga", "bala", "bañe", "bisa", "boas", "boba", "boja", "bojo", "bosa", "bota", "bote", "boto", "boya", "boyo", "cace", "caen", "caer", "calo", "case", "cave", "cayo", "cedo", "cefo", "ceno", "cesa", "chad", "coge", "coja", "cojo", "come", "crea", "cree", "cuba", "dañe", "deja", "dias", "dijo", "dime", "dome", "dora", "dore", "duos", "dura", "echa", "echo", "ecos", "emes", "emus", "enes", "eñes", "enya", "eran", "eras", "eres", "esas", "eses", "fico", "fumo", "gato", "goda", "guam", "hace", "haga", "hago", "hala", "hara", "hare", "haya", "hice", "hile", "hube", "hubo", "huna", "huya", "iban", "ibas", "ices", "idas", "idos", "iran", "iras", "iria", "izas", "jade", "jugo", "kiev", "lami", "lave", "lees", "lega", "leia", "lima", "loas", "luca", "lusa", "mala", "mali", "mece", "medi", "mees", "mesa", "mese", "meso", "meto", "mide", "moja", "mojo", "mola", "moño", "more", "moza", "muca", "nace", "ndea", "niue", "note", "nuda", "nuez", "nula", "odas", "ojos", "olas", "Oman", "oras", "oren", "ores", "orno", "orzo"]; // eslint-disable-line no-use-before-define
const WORD_SIZE = 4;
const NUM_TRYS = 8;
<<<<<<< HEAD
=======
const colors = require("colors");
>>>>>>> af7890b... Input tries now works properly
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

<<<<<<< HEAD
<<<<<<< HEAD
// Tu código empieza aquí

=======
// Nuestras variables

=======
>>>>>>> f4884bd... landing mockups
// Tu código empieza aquí
>>>>>>> af7890b... Input tries now works properly
function getRandomWord() {
  return (WORDS[Math.floor(Math.random() * WORDS.length)]);
}

function checkIsOnDictionary(word) {
  return WORDS.includes(word) ? word : console.log("Esa palabra no existe en el diccionario!");
}

function splitResult(randomWord, userWord) {
  const user = userWord.split("");
  const random = randomWord.split("");
  const succed = []; const fail = []; const wrongPosition = [];
  user.forEach((char, i) => {
    if ((random.includes(char)) && (i === random.indexOf(char))) {
      succed.push(char);
      random[random.indexOf(char)] = " ";
    } else if ((random.includes(char)) && (i !== random.indexOf(char))) {
      if (random[random.indexOf(char)] !== user[random.indexOf(char)]) {
        wrongPosition.push(char);
        random[random.indexOf(char)] = " ";
      } else {
        fail.push(char);
      }
    } else {
      fail.push(char);
    }
  });
  return [succed, fail, wrongPosition];
}

function main() {
  let tries = 0;
  const rndWord = getRandomWord();
  const recursiveAsyncReadLine = function() {
    readline.question(`Introduce una Palabra de tamaño ${WORD_SIZE}: `, function(word) {
      tries++;
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`La palabra ingresada es ${word.green}!`);
      if (checkIsOnDictionary(word)) {
        const [succed, fail, wrongPosition] = splitResult(rndWord, word);
        console.log(`[ ${succed.toString().green} ],` +
                    `[ ${wrongPosition.toString().yellow} ],` +
                    `[ ${fail.toString().red} ]`);
      }
      if (tries === NUM_TRYS) return readline.close();
=======
      console.log(rndWord);
      if (tries === NUM_TRYS) return readline.close();
=======
>>>>>>> f4884bd... landing mockups
      console.log(`La palabra ingresada es ${word.green}!`);
      if (checkIsOnDictionary(word)) {
        const [succed, fail, wrongPosition] = splitResult(rndWord, word);
        console.log(`[ ${succed.toString().green} ],` +
                    `[ ${wrongPosition.toString().yellow} ],` +
                    `[ ${fail.toString().red} ]`);
      }
<<<<<<< HEAD
>>>>>>> af7890b... Input tries now works properly
=======
      if (tries === NUM_TRYS) return readline.close();
>>>>>>> f4884bd... landing mockups
      recursiveAsyncReadLine();
    });
  };
  recursiveAsyncReadLine();
}

main();
