function sayGoodMorning(country: Languages) {
  return <i>{localization[country]}</i>;
}

const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
};

type Localization = typeof localization;
type Languages = keyof Localization;

export const element = <h1>{sayGoodMorning("de")}, Sara!</h1>;

// console.log(sayGoodMorning("pl")); // not allowed

console.log(localization["de"]);
console.log(localization.de);
