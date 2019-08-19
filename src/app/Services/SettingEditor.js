export class SettingEditor {
  constructor() {
    this.items = [];
  }

  addItem(component)
  {
    this.items.push(component)
  }

  getItems()
  {
    return this.items;
  }
};
