<template>
  <div>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  </div>
  <div>
    <button @click="increase()">+1</button>
    <button @click="decrease()">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 6,
      validator(value) {
        return value > 100;
      },
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  // Valores que se quedan en cache
  computed: {
    squareCounter() {
      console.log("el computes");
      return this.counter * this.counter;
    },
    customTitle() {
      if (this.title) return this.title;
      else return "Ops, no hay props";
    },
  },
};
</script>
<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>