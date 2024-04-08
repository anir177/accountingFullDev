<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      py-8
      gap-12
      min-h-screen
      bg-lime-500
    "
  >
    <Header :text="currentValue || 0 " />
    <div class="bg-indigo-300 w-80 p-5 rounded space-y-4 max-w-[300px]">
      <div class="bg-white p-4 rounded text-xl font-medium text-right">
        {{ currentValue || 0 }}
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button
          class="
            text-lg text-center
            font-medium
            bg-slate-400
            rounded
            py-2
            hover:bg-slate-300
            transition-all
            duration-75         
          "
          :class="{
            'bg-slate-200': ['C', '*', '/', '-', '+', '%', '=', '+/-'].includes(
              number
            ),
            'bg-cyan-600 text-white text-3xl col-span-2 hover:bg-cyan-500': [
              '=',
            ].includes(number),
          }"
          v-for="(number, index) in numbers"
          :key="index"
          @click="action(number)"
        >
          {{ number }}
        </button>
      </div>
    </div>
    <Footer :links="links" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const links = [
  {
    name: "Github",
    link: "https://github.com/JenilGajjar20",
    icon: "github",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jenil-gajjar-27934920a/",
    icon: "linkedin",
  },
  {
    name: "Medium",
    link: "https://medium.com/@jenilgajjar",
    icon: "medium",
  },
];
export default {
  name: "CalculatorComp",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentValue: "",
      numbers: [
        "C",
        "+/-",
        "*",
        "/",
        "-",
        7,
        8,
        9,
        "+",
        4,
        5,
        6,
        "%",
        1,
        2,
        3,
        "=",
        0,
        ".",
      ],
      operator: null,
      previousValue: "",
      operatorClicked: false,
      links,
    };
  },
  methods: {
    action(number) {
      // If the value is a numeric value or a '.' operator then append the value to the currentValue variable.
      if (!isNaN(number) || number === ".") {
        this.currentValue += number;
      }
      // If clicked on '+/-' then negate the number
      if (number === "+/-") {
        this.currentValue =
          this.currentValue.charAt(0) === "-"
            ? this.currentValue.slice(1)
            : `-${this.currentValue}`;
      }
      // If clicked on 'C' then the clear the display box
      if (number === "C") {
        this.currentValue = "";
      }
      // If clicked on '%' then divide the value by 100 and convert the number into string
      if (number === "%") {
        this.currentValue = this.currentValue / 100;
      }
      // If clicked on the operators
      if (["+", "-", "*", "/"].includes(number)) {
        this.operator = number;
        this.previousValue = this.currentValue;
        this.currentValue = "";
      }
      // If clicked on '=' then display the answer
      if (number === "=") {
        this.currentValue = eval(
          this.previousValue + this.operator + this.currentValue
        );
      }
    },
  },
};
</script>