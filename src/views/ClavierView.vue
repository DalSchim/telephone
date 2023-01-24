<template>
<div class="global">
    <div>
      <p class="affiche">{{numero}}</p>
    </div>

    <div>
      <button @click="restenumero">reset</button>
    </div>

    <div class="button">
      <div v-for="chifre in Listechiffre" :key="chifre" >
        <button @click="ajoutnumero(chifre)">{{chifre}}</button>
      </div>
    </div>

  <div class="appel">
    <button @click="calls">appel</button>
  </div>
</div>

</template>
<script>
export default {
    name:'ClavierView',
  data(){
      return{
        Listechiffre:[1,2,3,4,5,6,7,8,9,0],
        numero:'',
        call:{
          numero: null,
          date:null

        }
      }
  },


  methods:{
      ajoutnumero(chifre){
        this.numero += chifre
      },
      restenumero(){
        this.numero = ""
      },
    calls(){
        this.call.numero=this.numero.toString()
        this.call.date=new Date().toTimeString()
        this.$store.commit("call",this.call)
    }
  }
}
</script>
<style scoped>

div iconify-icon{
  border-radius: 3px;
  padding:2px ;
 cursor: pointer;
  font-size: 32px;
  border: #42b983 2px solid;
  border-radius: 10px;
}

.affiche{
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 30px;
  border: #42b983 2px solid;
  border-radius: 10px;
}
body{
  display: flex;
  justify-content: center;
}
.button{
  gap: 10px;
  width:160px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

}



.global{
  align-items: center;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.button button{
  cursor: pointer;
  border: #42b983 2px solid;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 32px;
}
</style>