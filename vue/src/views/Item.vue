<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <projects-table :header="['barang', 'harga', 'stock', 'satuan', 'action']"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsTable from "./components/ItemTable.vue";

export default {
  name: "tables",
  components: {
    ProjectsTable
  },
  data() {
    return {
      head : 'asdasd'
    };
  },
};
</script>
