<template>
  <div>
      <navbar />
      <div class="bg-gray-900 mt-10">
        <div class="w-4/5 mx-auto py-20 pt-10 px-10">
            <h1 class="text-4xl text-center tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl">Travel Blog</h1>
          <div class="mt-10" v-if="data.length > 0">
            <div class="grid grid-cols-3 gap-10">
          
 <div v-for="d in data" :key="d.id" class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{d.title}}</div>
        <p class="text-gray-700 text-base">
          {{d.content}}
        </p>
      </div>
    </div>
    </div>
    
            </div>
            <div v-else>
        <h1 class="text-3xl text-white text-center mt-10 pb-30">No blog Content yet</h1>
    </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar },
   data(){
    return{
      data: []
    }
  },
  methods: {
    async getBlog(){
      try {
     let res =  await this.$store.dispatch("auth/getBlog");
      console.log("helo data", res)
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

</style>User
