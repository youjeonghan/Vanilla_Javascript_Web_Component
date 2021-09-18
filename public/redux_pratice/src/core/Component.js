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
    console.log(this.name, ": setup 실행");
    // this.state = observable(this.initState());
    observe(() => {
      console.log(this.name, ": render, setEvent, mounted 실행");
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  set() {
    console.log(this.name, ": set 실행");
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
