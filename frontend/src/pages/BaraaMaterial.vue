<template>
  <div id="example">
    <hot-table
      ref="hotTableComponent"
      :data="data"
      :settings="hotSettings"
    ></hot-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";

// register Handsontable's modules
registerAllModules();

export default defineComponent({
  data() {
    return {
      data: [
        [
          "БАРАА МАТЕРИАЛЫН ТАЙЛАН",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        [
          "№",
          "Бараа материалын код",
          "Бараа, материалын үнэт зүйлийн нэр, зэрэг, дугаар",
          "Хэмжих нэгж",
          "Огноо",
          "Орлого",
          "",
          "",
          "Зарлага",
          "",
          "",
          "Үлдэгдэл",
        ],
        [
          2,
          "",
          "",
          "",
          "",
          "Тоо",
          "Үнэ",
          "Нийт",
          "Тоо",
          "Н.Өртөг",
          "Нийт",
          "Тоо",
          "Н.Өртөг",
          "Нийт",
        ],
        [
          2,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/3",
          "",
          "",
          0,
          400,
          340,
          136000,
          100,
          340,
          34000
        ],
        [
          5,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/8",
          "",
          "",
          0,
          2000,
          355,
          710769,
          600,
          355,
          213231
        ],
        [
          6,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/9",
          "",
          "",
          0,
          50,
          355,
          17769,
          550,
          355,
          195462
        ],
        [
          7,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/9",
          "",
          "",
          0,
          40,
          355,
          14215,
          510,
          355,
          181246
        ],
        [
          8,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/9",
          "",
          "",
          0,
          30,
          355,
          10662,
          480,
          355,
          170585
        ],
        [
          10,
          "A001",
          "Материал А",
          "Ш",
          "2019/11/10",
          "",
          "",
          0,
          300,
          361,
          108218,
          780,
          360,
          281367
        ]
      ],
      hotSettings: {
        mergeCells: [
          { row: 0, col: 0, rowspan: 1, colspan: 14 },
          { row: 1, col: 0, rowspan: 1, colspan: 1 },
          { row: 1, col: 5, rowspan: 1, colspan: 3 },
          { row: 1, col: 8, rowspan: 1, colspan: 3 },
          { row: 1, col: 11, rowspan: 1, colspan: 3 },
          { row: 1, col: 2, rowspan: 1, colspan: 1 },
        ],
        cell: [
          { row: 0, col: 0, className: 'htCenter'}
        ],
        licenseKey: "non-commercial-and-evaluation",
      },
    };
  },
  components: {
    HotTable,
  },
});
</script>