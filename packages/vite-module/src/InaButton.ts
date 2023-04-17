export class InaButton {
  private readonly _button;

  constructor() {
    this._button = document.createElement('button');
    this._button.name = 'my-button';
    this._button.innerText = 'my-button';
    this._button.onclick = () => {
      alert('Ninomae Inanis');
    };
  }
  get button() {
    return this._button;
  }
}
