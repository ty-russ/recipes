<template>

    
  

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import state from '../store/state';
import axiosClient from '../axiosClient.js'


const ingredients = ref([])


onMounted(async ()=>{
  const response = await  axiosClient.get('/list.php?i=list')
  console.log("==response===",response)
  ingredients.value = response.data
})
</script>