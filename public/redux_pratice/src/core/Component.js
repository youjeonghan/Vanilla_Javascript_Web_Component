import { observable, observe } from "./observer.js";

export class Component {
  state;
  props;
  $el;
  name;

  constructor($el, name, props) {
    this.$el = $el;
    this.props = props;
    this.name = name;
  }

  setup() {
    observe(() => {
      console.log(this.name, ": render, setEvent, mounted 실행");
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  set() {
    this.render();
    this.setEvent();
    this.mounted();
  }

  initState() {
    return {};
  }
  template() {
    return "";
  }
  render() {
    this.$el.innerHTML = this.template();
  }
  setEvent() {}
  mounted() {}
}
