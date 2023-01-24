import { createStore } from 'vuex'

export default createStore({
  state: {
    compteurs: 0,
    contacts: [
      {
        pseudo: 'KILL',
        age: 15
      },
      {
        pseudo: 'gabriel',
        age: 69
      },
      {
        pseudo: 'PL',
        age: 80
      },
    ],

    calls: [

    ]



  },
  getters: {
  },
  mutations: {
    ajoutPerso(state,contact) {
      state.contacts.push(contact)
    },

    increment(state){
      state.compteurs++

    },

    call(state,called){
      console.log(called)
      state.calls.push(called)
    }




  },
  actions: {
  },
  modules: {
  }
})
