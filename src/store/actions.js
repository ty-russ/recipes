import axiosClient from "../axiosClient"


export function searchMeals ({commit},keyword) {


    //calls server
  axiosClient.get(`/search.php?s=${keyword}`).then(({data})=>{
    //call mutation to save data to store
    commit('setSearchedMeals',data.meals)

  })

}

export function searchMealFirstLetter({commit},keyword) {
    axiosClient.get(`search.php?f=${keyword}`).then(({data})=>{
      commit('setMealsByLetter',data.meals)
    })

}

export function searchMealIngredient({commit},keyword) {
    axiosClient.get(`filter.php?i=${keyword}`).then(({data})=>{
      commit('setMealsByIngredient',data.meals)
    })

}