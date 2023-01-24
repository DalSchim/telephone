<template>
  <div class="contact">
    <div>
      <h2> {{cheak(list.numero.toString())}} </h2>
      <span>Tel: {{list.date}}</span>
    </div>
    <div class="appel">
      <button @click="calls">appel</button>
    </div>
  </div>
</template>

<script>
export default {

  name: "CallCard",
  props:['list'],
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
      this.call.numero=this.list.numero
      this.call.date=new Date().toTimeString()
      this.$store.commit("call",this.call)
    },
    cheak(numero){
      let persoFromData = this.$store.state.contacts.find((c)=>{
        return c.age.toString() === numero
      })
      console.log(persoFromData)
      if(persoFromData !== null && persoFromData!== undefined){
        return persoFromData.pseudo
      }else{
        return numero
      }
    }
  }
}
</script>

<style scoped>

</style>