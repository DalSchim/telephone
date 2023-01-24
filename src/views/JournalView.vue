<template >
    
    <div v-for="list in appel" :key="list" >
      <CallCard :list="list"/>
	</div>

</template>
<script>

import CallCard from "@/components/CallCard.vue"

export default {
    name:'JournalView',
  components: {
      CallCard
  },
  computed: {
      appel(){
        console.log(this.$store.state.calls)
        return this.$store.state.calls

      }
  }
}
</script>
<style lang="">
    
</style>