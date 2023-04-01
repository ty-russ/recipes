<template>
  <div class="flex justify-center gap-2 mt-1">
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="{ letter }">
      {{ letter }}
    </router-link>

  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >
      <MealItem v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl"  :meal="meal">

      </MealItem>
    </div>
</template>

<script setup>
import store from '../store'
import { computed, onMounted, ref, watch } from 'vue';
import {useRoute} from 'vue-router'
import MealItem from '../components/MealItem.vue';


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//route param
const route = useRoute();

//search keyword
const keyword = ref('');

//fetch meals from store
const meals = computed(() => store.state.mealsByLetter);
watch(route,() => {
  store.dispatch('searchMealFirstLetter',route.params.letter)

})
onMounted(()=>{
  store.dispatch('searchMealFirstLetter',route.params.letter)
}
)

</script>