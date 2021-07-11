  export interface EntityMap {
    book: Book;
  }


export class Book {
  constructor(name: string) {}
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
