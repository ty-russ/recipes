<template>
  <div class="flex p-8 pb-0 ">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals" v-model="keyword"
      @change="searchMeals" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl" :meal="meal">

    </MealItem>
  </div>
</template>

<script setup>
import store from '../store'
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';

//route param
const route = useRoute();

//search keyword
const keyword = ref('');

//fetch meals from store
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch('searchMeals', keyword.value)

}
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()

  }

})
</script>