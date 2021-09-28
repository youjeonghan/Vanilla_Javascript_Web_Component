import { Component } from "./core/Component.js";
import { Header } from "./Header.js";
import { setApp, store } from "./store.js";

export class App extends Component {
  static instance;
  constructor($el, name) {
    super($el, name);
    if (App.instance) return this.set();

    App.instance = this;
    this.setup();
  }
  template() {
    return `
    <h1 class="set__app">${store.getState().app}${store.getState().header}</h1>
      <div class="header__container"></div>
    `;
  }

  mounted() {
    new Header(document.querySelector(".header__container"), Header.name);
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector(".set__app").addEventListener("click", ({ target }) => {
      store.dispatch(setApp(1));
    });
  }
}
