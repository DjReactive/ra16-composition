export default class CardModel {
  constructor(title, desc, button, visible = true, image = null) {
    this.title = title;
    this.desc = desc;
    this.button = button;
    this.visible = visible;
    this.image = image;
  }
}
