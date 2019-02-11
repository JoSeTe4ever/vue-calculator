<template>
  <div class="calculator">
    <div class="display">{{current || 0}}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percentage">%</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="times" class="btn operator">X</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="plus" class="btn operator">+</div>
    <div @click="append('0')" class="btn zeroKey">0</div>
    <div @click="dot()" class="btn">.</div>
    <div class="btn">=</div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String,
  },
  data() {
    return {
      operatorClicked: false,
      previous: null,
      current: '',
      operator: null,
    }
  },
  methods: {
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    clear() {
      this.current = ''
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
    },
    percentage() {
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number) {
      this.current = `${this.current}${number}`
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    divide() {
      this.operator = (a, b) => {
        a / b
      }
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => {
        a / b
      }
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => {
        a - b
      }
      this.setPrevious();
    },
    plus() {
      this.operator = (a, b) => {
        a + b
      }
      this.setPrevious();
    },
    equal() {},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  background-color: #333;
  color: white;
  grid-column: 1 / 5;
}

.zeroKey {
  grid-column: 1 / 3;
}

.btn {
  background-color: #eee;
  border: 1px solid #999;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
