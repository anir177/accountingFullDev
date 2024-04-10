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
          "№",
          "Эд хөрөнгийн нэр",
          "Огноо",
          "Элэгдэл байгуулах жил",
          "Хэмжих нэгж",
          "Тоо ширхэг",
          "Үнэ",
          "Хөрөнгийн өртөг",
          "2019 оны элэгдэл",
          "",
          "",
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "Нэг бүрийн",
          "Бүгд",
          "Тооцож эхлэх огноо",
          "Тооцоолол дуусах огноо",
          "Байгуулсан элэгдэл",
        ],
        ["а", "б", "", "1", "2", "3", "4", "5", "", "", "", "", ""],
        [
          "1",
          "Барилга",
          "7/1/2019",
          "25",
          "ком",
          "1",
          "  125,000,000.0 ",
          "  125,000,000.0 ",
          "7/1/2019",
          "12/31/2019",
          "  2,506,849.32 ",
        ],
        [
          "2",
          "Тоног төхөөрөмж",
          "7/1/2019",
          "5",
          "ком",
          "1",
          "  74,000,000.0  ",
          "  74,000,000.0 ",
          "7/1/2019",
          "12/31/2019",
          "  7,420,273.97 ",
        ],
        [
          "3",
          "Компьютер",
          "7/1/2019",
          "5",
          "ком",
          "1",
          "  4,207,600.0 ",
          "  4,207,600.0  ",
          "7/1/2019",
          "12/31/2019",
          "  1,054,781.92 ",
        ],
        [
          "4",
          "Тавилга эд хогшил",
          "7/1/2019",
          "5",
          "ком",
          "1",
          "  6,258,000.0 ",
          "  6,258,000.0 ",
          "7/1/2019",
          "12/31/2019",
          "  627,514.52 ",
        ],
        [
          "5",
          "Тээврийн хэрэгсэл",
          "7/1/2019",
          "10",
          "ком",
          "1",
          "  13,000,000.0 ",
          "  13,000,000.0 ",
          "7/1/2019",
          "12/31/2019",
          "  651,780.82 ",
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "  222,465,600.0 ",
          "",
          "",
          "",
          "  12,261,200.55  ",
        ],
      ],
      hotSettings: {
        mergeCells: [{ row: 0, col: 8, rowspan: 1, colspan: 3 }],
        cell: [{ row: 0, col: 0, className: "htCenter" }],
        licenseKey: "non-commercial-and-evaluation",
      },
    };
  },
  components: {
    HotTable,
  },
});
</script>
