<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5"> {{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="strMeal" class="max-w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Origin :</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags :</strong> {{ meal.strTags }}
            </div>
            <div>
                <strong class="font-bold">Category :</strong> {{ meal.strCategory }}
            </div>

        </div>
        <div class="my-3">
                {{ meal.strInstructions }}
            </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl fonst-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]" class="list-none">
                            {{ index + 1 }}.{{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>

            </div>

            <div>
                <h2 class="text-2xl fonst-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]" class="list-none">
                            {{ index + 1 }}.{{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>

 

            <div class="mt-4">
                <YouTubeButton :href="meal.strYoutube">Go to Youtube</YouTubeButton>
                <a :href="meal.strSource" target="_blank"
                    class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600  transition-colors">
                    View Original Source
                </a>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        debugger;
        meal.value = data.meals[0] || {}
    })
})
</script>