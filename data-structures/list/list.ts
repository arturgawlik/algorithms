export class List {
  #firsListItem: ListItem;
  #lastListItem: ListItem;

  constructor() {}

  push(value: number) {
    if (!this.#firsListItem) {
      this.#firsListItem = new ListItem(value);
      this.#lastListItem = this.#firsListItem;
    } else {
      const listItem = new ListItem(value);
      this.#lastListItem.setNext(listItem);
      this.#lastListItem = listItem;
    }
  }

  get(index: number) {
    let listItem = this.#firsListItem;
    for (let i = 0; i <= index; i++) {
      if (i === index || !listItem) {
        return listItem.getValue();
      }

      listItem = listItem.getNext();
    }
  }
}

export class ListItem {
  #value: number;
  #nextListItem: ListItem;

  constructor(value: number) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  setNext(nextListItem: ListItem) {
    this.#nextListItem = nextListItem;
  }

  getNext(): ListItem {
    return this.#nextListItem;
  }
}
