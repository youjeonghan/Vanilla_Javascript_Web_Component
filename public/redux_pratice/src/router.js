import { App } from "./App.js";

export const routes = {
  "/app": () => {
    new App(document.querySelector("#app"), App.name);
  },
  "/map": () => {}
};
