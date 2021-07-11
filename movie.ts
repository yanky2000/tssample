import  {EntityMap, Book} from "./book";

const chalk = require("chalk");
console.log(chalk.bgBlue("im blue"));
console.log(chalk.red("im blue"));
console.log(chalk.bgWhite.red("warning!!!!"));

interface Color {
  green: number;
  blue: number;
  isHot: boolean;
}

type FilteredKeys<toFilter, Condition> = {
  [P in keyof toFilter]: toFilter[P] extends Condition ? P : never;
};

// type SelectedColors = FilteredKeys<Color, number>
type SelectedColors = FilteredKeys<Color, number>["green" | "blue" | "isHot"];

class Movie {
  constructor(title: string) {}
}

declare module "./book" {
  interface EntityMap {
    movie: Movie;
  }
}

class Store {
  get<K extends keyof EntityMap>(kind: K, id: string): EntityMap[K] {
    return;
  }
  create() {}
}

const store = new Store();
store.get("book", "1234");
store.get("movie", "1234");
