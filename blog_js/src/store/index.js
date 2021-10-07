import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
  La state est uniquement modifiable via les mutations,
  elle contient toute la donnée du Store,
  accessible de puis n'importe ou sur votre App
  Accessible depuis un composant Vue, via les computed:
  "this.$store.state.todos"
  */
  state: {
    articles :   [
      {
        titre : "Cassoulet",
        intro : "L’origine du cassoulet remonte à la période médiévale",
        date : "07/10/2021",
        nom: "Baptiste",
        content: "Les habitants, menacés par la famine mirent en commun tout ce qu’ils avaient pour nourrir les soldats de la ville. Lard, porc, fèves, saucisses et viandes furent mis à mijoter dans une grande jatte. Revigorés par ce repas, les soldats chauriens boutèrent les Anglais hors du Lauragais et même, jusqu’aux rivages….de la Manche."
      } ,
      {
        titre : "Rendu de liste",
        intro : "Associer un tableau à des éléments avec v-for",
        date : "07/10/2021",
        nom : "Léonard",
        content: "Nous pouvons utiliser la directive v-for pour faire le rendu d’une liste d’éléments en nous basant sur un tableau. La directive v-for utilise une syntaxe spécifique de la forme item in items, où items représente le tableau source des données et où item est un alias représentant l’élément du tableau en cours d’itération :"
      } ,
    ],
    
  },
  /*
  Les mutations permettent de modifier la donnée contenue dans la "state"
  On appelle une mutation via un ` commit('nomMutation', data) `
  */
  mutations: {
    /* Les mutations ont 2 params: state, et la data que vous lui envoyez */
    addTodo(state, data) {
      state.todos.push(data)
    },
    removeTodoByIndex(state, index) {
      state.todos.splice(index, 1)
    },
  },
  /*
  Les actions sont commes des méthodes, un peu plus générales, qui peuvent lire
  la state et "commit" des mutations pour modifier la state.
  On peut y mettre des call API, du traitement, etc...
  
  Les actions sont appelées avec la fonction dispatch du store (this.$store.dispatch('nomAction', param)) depuis un composant Vue
  */
  actions: {
    /* Les actions ont 2 params: context, et la data que vous lui envoyez */
    removeTodoByID(context, id) {
      id = parseInt(id)
      const index = context.state.todos.findIndex((todo) => { return todo.id == id })
      context.commit('removeTodoByIndex', index)
    }
  },

  /* Getters:
  Similaires aux computed, ce sont des fonctions utilisées comme des variables
  Ils peuvent lire la state
  et retourner de la donnée modifiée (sans la modifier dans la state!!)
  */
  getters: {

  },
  /* Nous ne verrons pas les modules tout de suite */
  modules: {

  }
})