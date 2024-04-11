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
            "ӨМЧИЙН ӨӨРЧЛӨЛТИЙН ТАЙЛАН",
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
            "( Аж ахуйн нэгж, байгууллагын нэр )",
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
            "Үзүүлэлт",
            "Өмч",
            "Халаасны хувьцаа",
            "Нэмж төлөгдсөн капитал",
            "Хөрөнгийн дахин үнэлгээний нэмэгдэл",
            "Гадаад валютын хөрвүүлэлтийн нөөц",
            "Эздийн өмчийн бусад хэсэг",
            "Хуримтлагдсан ашиг",
            "Нийт дүн",
          ],
          [
            "1",
            "20.. оны 01-р сарын 01-ний үлдэгдэл",
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
            "2",
            "Нягтлан бодох бүртгэлийн бодлогын өөрчлөлтийн нөлөө, алдааны залруулга",
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
            "3",
            "Залруулсан үлдэгдэл",
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
            "4",
            "Тайлант үеийн цэвэр ашиг (алдагдал)",
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
            "5",
            "Бусад дэлгэрэнгүй орлого",
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
            "6",
            "Өмчид гарсан өөрчлөлт",
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
            "7",
            "Зарласан ногдол ашиг",
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
            "8",
            "Дахин үнэлгээний нэмэгдлийн хэрэгжсэн дүн",
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
            "9",
            "20.. оны 12-р сарын 31-ний үлдэгдэл",
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
            "",
            "Захирал :			",
            "",
            "",
            "",
          ],
          [
            "",
            "Ерөнхий нягтлан бодогч :			",
            "",
            "",
            "",
          ],
         
        ],
        hotSettings: {
          mergeCells: [
            { row: 0, col: 0, rowspan: 1, colspan: 10 },
            { row: 1, col: 0, rowspan: 1, colspan: 2 },



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