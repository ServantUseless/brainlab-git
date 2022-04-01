/* 
Evo zadataka:
John Doe je dobio zadatak da napuni kosaru vocem, ali kako John jede samo McDonalds on ne zna koja hrana je voce.
a) Pomozi mu tako da napravis funkciju koja ce primati niz prehrambenih artikala i vracati je li taj proizvod voce.
b) Od voca mu trebaju samo jabuke, kruske, banane, narance i jagode.
c) Takoder, svaki artikal ima svoj cijenu, a John ima samo 50kn. Napravi drugu funkciju koja ce primati
niz voca i vracati kosaru punu voca do 50kn.
Isto tako pripazi na to da John voli raznovrsno voce, stoga mu je bitno da u kosaru pokusa staviti svaku
vrstu voca. Kada se u kosarici nalazi barem 1 komad od svake vrste voca, on ce nastavit uzimat voce po redu,
neovisno o vrsti voca.
*/

// Rješenje zadatka

const food = [
  typeFood("Ananas", 1, "fruit", "kanta"),
  typeFood("Jabuka", 1, "fruit", "kosara"),
  typeFood("Krumpir", 1, "vegetable", "kanta"),
  typeFood("Kruska", 2, "fruit", "kosara"),
  typeFood("Brokula", 3, "vegetable", "kanta"),
  typeFood("Lubenica", 1, "fruit", "kanta"),
  typeFood("Kapula", 2, "vegetable", "kanta"),
  typeFood("Banana", 3, "fruit", "kosara"),
  typeFood("Naranca", 4, "fruit", "kosara"),
  typeFood("Grozdje", 1, "fruit", "kanta"),
  typeFood("Mrkva", 4, "vegetable", "kanta"),
  typeFood("Jagoda", 5, "fruit", "kosara"),
];

function typeFood(fruit, price, type, isNeeded) {
  return {
    fruit,
    price,
    type,
    isNeeded,
  };
}

console.log("John, nize je popis voca i povrca:");

console.log(food.map(({ fruit }) => fruit));

// a) Pomozi mu tako da napravis funkciju koja ce primati niz prehrambenih artikala i vracati je li taj proizvod voce.

const onlyFruit = food.filter(({ type }) => type === "fruit");

console.log("John, nize je popis samo voca:");

console.log(onlyFruit.map(({ fruit }) => fruit));

// b) Od voca mu trebaju samo jabuke, kruske, banane, narance i jagode.

const neededFruit = food.filter(({ isNeeded }) => isNeeded === "kosara");

console.log("John, nize je popis voca koje ti konzumiras:");

console.log(neededFruit.map(({ fruit }) => fruit));

// c) Takoder, svaki artikal ima svoj cijenu, a John ima samo 50kn.
//     Napravi drugu funkciju koja ce primati niz voca i vracati kosaru punu voca do 50kn.

const fruitPrice = food.filter(
  ({ price, isNeeded }) => price > 0 && isNeeded === "kosara"
);

console.log("John, nize je cjenik voca koje ti konzumiras:");

const finalArr = fruitPrice.map(
  ({ fruit, price }) => `${fruit} košta ${price}kn`
);

console.log(finalArr);

console.log(
  "John, obzirom da imas samo 50kn napunit cemo vise komada raznog voca koje ti volis:"
);
