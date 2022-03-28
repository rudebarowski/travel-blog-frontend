<template>
  <div class="bg-gray-100 min-h-screen">
      <dashboard-header />
      <div>
           <header class=" shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">Blog</h1>
            <button @click="$router.push('/admin/add-blog')" class="py-2 text-white rounded px-4 bg-green-800">Add Blog</button>
          </div>
        </header>
      </div>
       <div v-if="data.length > 0">
      <div  class="grid  max-w-7xl mx-auto  grid-cols-3 gap-5">
          <div v-for="d in data" :key="d.id" class="p-10">  
    <!--Card 1-->
   
 <div  class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="@/assets/img/2a.jpg" alt="">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{d.title}}</div>
        <div>Created by: <span class="text-gray-500">{{d.creator.first_name}}</span></div>
      </div>
    </div>
    </div>
      </div>
       </div>
    <div v-else>
        <h1 class="text-3xl text-white">No blog Content yet</h1>
    </div>
   
  </div>

</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
export default {
  components: { DashboardHeader },
  data(){
    return{
      data: []
    }
  },
  methods: {
    async getBlog(){
      try {
     let res =  await this.$store.dispatch("auth/getBlog");
      console.log("helo data", res.data.data)
        this.data = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
    },
  
  mounted(){
    this.getBlog()
  } 
}
</script>

<style>

</style>