<template>
    <div>

      <form @submit.prevent="ajoutPerso">
        <h2>ajouter un contact</h2>
        <input type="text" placeholder="Nom" v-model="formPerso.pseudo"/>
        <span v-if="formPerso.pseudo.length <2  && error" class="error">Le pseudo doit avoir au moins 3 charactères !</span>
        <input type="number" placeholder="numéro " v-model="formPerso.age"/>
        <button type="submit">Ajouter</button>

      </form>
    </div>
  </template>
  <script>
  export default {
    name: 'FormPerso',
    props: ['contacts'],

    data() {
      return {
        error: false,
        formPerso: {
          pseudo: '',
          age: null,
        },
      }
    },
    methods: {
      ajoutPerso() {
        if(this.formPerso.age == null) return
        if(this.formPerso.pseudo.length<2){
          this.error=true
          return
        }

        console.log(this.contacts)
        if(this.contacts.find(contact => contact.pseudo == this.formPerso.pseudo)) return
  
        this.$store.commit('ajoutPerso',this.formPerso)
  
        this.error = false
  
        this.formPerso = {
          pseudo: "",
          age: null
        }
  
      }
    }
  }
  </script>
  <style scoped>
  form {
    background-color: #42b983;
    width: 20vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  form h2{
    color: white;
  }
  
  input {
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
  
  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
  }
  
  </style>