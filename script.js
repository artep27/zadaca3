"use strict";
/* Zadatak 1 */

const brojLovaca1 = 340;
const brojLovaca2 = 50;
const brojLovaca3 = 140;

function postotakLovaca(brojLovaca) {
  const postoLovaca = (brojLovaca / 1000) * 100;
  return postoLovaca.toFixed(1);
}

const postoLovaca1 = postotakLovaca(brojLovaca1);
const postoLovaca2 = postotakLovaca(brojLovaca2);
const postoLovaca3 = postotakLovaca(brojLovaca3);
console.log(postoLovaca1, postoLovaca2, postoLovaca3);

/* Zadatak 2 */

const igraciHrvatska = 10;
const igraciKina = 3441;
const igraciUSA = 332;

const postoProfIgraca = (brojIgraca) => {
  const postoIgraca = (brojIgraca / 10000) * 100;
  return postoIgraca.toFixed(2);
};

function zemljaPopulacija(zemlja, brojIgraca) {
  return `${zemlja} ima ${brojIgraca} posto profesionalnih igrača stolnog tenisa što je oko ${postoProfIgraca(
    brojIgraca
  )}% svijeta `;
}

console.log(zemljaPopulacija("Hrvatska", igraciHrvatska));
console.log(zemljaPopulacija("Kina", igraciKina));
console.log(zemljaPopulacija("USA", igraciUSA));

/* Zadatak 3  */

const prosjekIzracun = (rez1, rez2, rez3, rez4, rez5) => {
  const prosjek = (rez1 + rez2 + rez3 + rez4 + rez5) / 5;
  return prosjek;
};

const prosjekBarca = prosjekIzracun(2, 3, 1, 3, 4);
console.log(prosjekBarca);
const prosjekReal = prosjekIzracun(1, 4, 1, 5, 0);
console.log(prosjekReal);

const pobjednikJe = (prosjekBarca, prosjekReal) => {
  if (prosjekBarca >= prosjekReal * 2) {
    return `Pobjednik je Barca s prosjekom ${prosjekBarca} naprema ${prosjekReal}`;
  } else if (prosjekReal >= prosjekBarca * 2) {
    return `Pobjednik je Real s prosjekom ${prosjekReal} naprema ${prosjekBarca}`;
  } else {
    return `Nema pobjednika`;
  }
};

console.log(pobjednikJe());

/* Zadatak 4 */

const racunNapojnice = (racun) => {
  let napojnica = racun >= 50 && racun <= 300 ? 0.15 * racun : 0.2 * racun;
  return napojnica;
};

const racuni = [125, 555, 44];

const napojnice = [
  racunNapojnice(racuni[0]),
  racunNapojnice(racuni[1]),
  racunNapojnice(racuni[2]),
];

console.log(napojnice);
const ukupno = [
  racuni[0] + napojnice[0],
  racuni[1] + napojnice[1],
  racuni[2] + napojnice[2],
];
console.log(ukupno);
