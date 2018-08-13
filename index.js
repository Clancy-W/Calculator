var app = new Vue({
  el: '#main',
  data () {
    return {
      current: "0",
      op: "plus",
      memory: "0"
    }
  },
  methods: {
    handle(num) {
      num = num.toString();
      if (this.current === "0") {
        this.current = num
      }
      else {
        this.current += num;
      }
    },
    clear() {
      this.current = "0";
      this.op = "plus";
      this.memory = "0";
    },
    point() {
      if (this.current.indexOf(".") == -1) {
        this.current += "."
      }
    },
    oper(type) {
      if (this.op == "plus") {
        this.memory = (parseFloat(this.current) + parseFloat(this.memory)).toString();
      }
      else if (this.op == "minus") {
        this.memory = (parseFloat(this.memory) - parseFloat(this.current)).toString();
      }
      else if (this.op == "multi") {
        this.memory = (parseFloat(this.memory) * parseFloat(this.current)).toString();
      }
      else if (this.op == "divide") {
        this.memory = (parseFloat(this.memory) / parseFloat(this.current)).toString();
      }
      this.op = type;
      this.current = "0";
    },
    equal() {
      if (this.op == "plus") {
        this.memory = (parseFloat(this.current) + parseFloat(this.memory)).toString();
      }
      else if (this.op == "minus") {
        this.memory = (parseFloat(this.memory) - parseFloat(this.current)).toString();
      }
      else if (this.op == "multi") {
        this.memory = (parseFloat(this.memory) * parseFloat(this.current)).toString();
      }
      else if (this.op == "divide") {
        this.memory = (parseFloat(this.memory) / parseFloat(this.current)).toString();
      }
      this.current = this.memory;
      this.memory = "0";
      this.op = "plus";
    }
  }
});
