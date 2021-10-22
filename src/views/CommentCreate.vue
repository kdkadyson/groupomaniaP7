<template>

<h1>Déposer votre commentaire</h1>

<div class="form-container">

  <form @submit.prevent="onSubmit">
    <label>Category: </label>
    <select v-model="comment.category">
      <option
        v-for="option in categories"
        :value="option"
        :key="option"
        :selected="option === comment.category"
      >{{ option }}</option>
    </select>

    <h3>Titre & Commentaire</h3>

    <BaseInput
      v-model="comment.title"
      label="Titre"
      type="text" 
      
    />

    <BaseInput
      v-model="comment.description"
      label="Description"
      type="text"
    />

    <h3>Ajouter une image ?</h3>

    <BaseInput
      v-model="comment.img"
      label="Image"
      type="text"
      
    />

    <button type="submit">Envoyer</button>
  </form>

</div>

</template>


<script>
//id library
import { v4 as uuidv4 } from "uuid";

export default {
  data () {
    return {
      categories: [
        "sustainability",
        "nature",
        "animaux",
        "vancances",
        "education",
        "food",
        "rencontres",
        "sorties"
      ],

      comment: {
        id: "",
        category: "",
        name: "",
        photo: "",
        title: "",
        img: "",
        description: '',
        date: '',
        time: '',
      }
    }
  },
  methods: {
    onSubmit() {
        const comment = {
            ...this.comment,//méthode spread 
            id: uuidv4(),
            name: this.$store.state.user
        }
       this.$store.dispatch("createComment", comment)//add to Vuex state
       .then( () => {
        this.$router.push({//return to CommentList Page on (new) created
          name: 'CommentDetails',
          params: { id: comment.id }
        })
      })
      .catch(error => {
        this.$router.push({
            name: "ErrorDisplay",
            params: { error: error }//props
        })
      })
    }
  }
}
</script>