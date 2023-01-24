<template>
  <div>
    <h1>Contact</h1>

    <FormPerso :contacts="contacts"/>


    <div class="repertoir">
      <div class="cartes" v-for="contact in contacts" :key="contact.pseudo" >
          <CartePerso :contact="contact"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormPerso from "@/components/FormPerso";
import CartePerso from "@/components/CartePerso.vue";

export default {
  name : 'ContactView',
  components: {
    CartePerso,
    FormPerso
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  }
}

</script>

<style scoped>
form {
  background-color: #42b983;
  width: 50vw;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
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

.repertoir{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}


.cartes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>