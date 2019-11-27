<template>
  <v-layout row wrap justify-center align-start style="height: 100%">
    <h1 style="width: 100%; text-align: center">Bienvenido {{usuario.nombre}} {{usuario.apellido}}</h1>
    <br>
    <p>Correo: {{usuario.correo}}</p>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      usuario: {}
    }
  },
  mounted() {
    var usuario = JSON.parse(localStorage.getItem('usuario'))
    var id = usuario._id;
    axios.get('http://localhost:3000/usuarios/' + id)
    .then((response) => {
      this.usuario = response.data;
    })
  }
}
</script>