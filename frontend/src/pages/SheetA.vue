<template>
  <hot-table
    :settings="settings"
    licenseKey="non-commercial-and-evaluation"
    :data="data"
    :rowHeaders="true"
    :colHeaders="true"></hot-table>
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
          "Guilgeenii dugaar",
          "Debit dans",
          "Credit dans",
          "Ognoo",
          "Dun",
        ],
        [
          1,
          "Mungun hurungu",
          "Banknii zeel",
          "1/1/2021",
          1500000,
        ],
        [
        2,
          "Avlaga",
          "Bor.orlogo",
          "1/1/2021",
          500000,
        ],
      ],
    };
  },
  components: {
    HotTable,
  },
});
</script>