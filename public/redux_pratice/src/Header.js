import { Component } from "./core/Component.js";
import { setHeader, store } from "./store.js";

export class Header extends Component {
  static instance;
  constructor($el, name) {
    super($el, name);
    if (Header.instance) return this.set();

    Header.instance = this;
    this.setup();
  }
  template() {
    // <h2 class="set__header">${store.getState().header}</h2>
    // <h2 class="set__header">2</h2>
    return `
    <h2 class="set__header">${store.getState().header}</h2>
    `;
  }

  setEvent() {
    const { $el } = this;

    $el
      .querySelector(".set__header")
      .addEventListener("click", ({ target }) => {
        store.dispatch(setHeader(store.getState().header + 1));
        // store.dispatch(setHeader(10));
      });
  }
}
