<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>

        <div class="px-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, itaque? Dolorum velit accusantium
                laudantium voluptate nam est minus officia.</p>
            <div class="p-3 flex justify-between ">
                <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                    class="px-3 py-2 rounded  text-blue-600  transition-colors">
                    View Details
                </router-link>
            </div>
        </div>


    </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const props = defineProps({
    meal: {}
})
</script>