<template>

<div class="contact">
  <div>
    <h2>{{contact.pseudo}}| </h2>
    <span>Tel: {{contact.age}}</span>
  </div>
  <div class="appel">
    <button @click="calls">appel</button>
  </div>
</div>




</template>
<script>
export default {
  name:'CartePerso',
  props:[
    'contact'
  ],
  data(){
    return{
      call:{
        numero: null,
        date:null

      },
    }
  },
  methods:{
    calls(){
      this.call.numero=this.contact.age
      this.call.date=new Date().toTimeString()
      this.$store.commit("call",this.call)
    }
  }
}
</script>
<style scoped>

.contact {
  color: white;
  width: 400px;
  border: #2c3e50 solid 2px;
  border-radius: 15px;
  padding-left:15px ;
  align-items: center;
  background-color: #42b983;
  display: flex;
  text-align: start;
  justify-content: space-between;
}

.contact div{
  align-items: center;
  display: flex;
}

.contact iconify-icon{
  border-radius: 3px;
  padding:2px ;
  margin-right:15px ;
  border: #2c3e50 solid 2px;
}
</style>