<template>
  <v-layout row wrap justify-center align-center style="heigth: 100%">
    <v-card>
      <v-card-title primary-title>
        LOGUEATE EN TU CUENTA
      </v-card-title>
      <v-card-text>
        <v-text-field label="Correo" v-model="correo"></v-text-field>
        <v-text-field label="Contraseña" type="password" v-model="contrasena"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="logueo()">LOGIN</v-btn>
        <v-btn color="blue" to="/registro">REGISTRO</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      correo: '',
      contrasena: ''
    }
  },
  methods: {
    logueo() {
      axios.post('http://localhost:3000/logueo', {
        correo: this.correo,
        contrasena: this.contrasena
      })
      .then((response) => {
        var usuario = response.data;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.$router.push('/usuario')
      })
    }
  },
}
</script>