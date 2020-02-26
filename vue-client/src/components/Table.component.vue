<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="list" :items-per-page="5" class="elevation-1">
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon small @click="deleteItem(item.id)">delete</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "TableContainer",
  props: {
    list: {
      type: [Object, Array]
    }
  },
  data: () => ({
    headers: [
      {
        text: "id",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "Nombre", value: "nombre" },
      { text: "Apellido", value: "apellido" },
      { text: "Empresa", value: "empresa" },
      { text: "Actions", value: "action", sortable: false }
    ]
  }),
  
  methods: {
    editItem(item) {
      console.log("EDIT: ",item);
    },
    deleteItem(id) {
      console.log("DELETE: ",id);
    }
  }
};
</script>
