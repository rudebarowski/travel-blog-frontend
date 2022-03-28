<template>
  <div>
      <dashboard-header />
      <div class="bg-gray-100 min-h-screen">
          <header class=" shadow">
          <div class="max-w-7xl flex justify-between
           mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Welcome {{data && data.first_name}}</h1>
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>

          </div>
        </header>
        
    

    <div v-if="blog.length > 0">
      <div  class="grid  max-w-7xl mx-auto  grid-cols-3 gap-5">
          <div v-for="d in blog" :key="d.id" class="p-10">  
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
    <div class="flex justify-center flex-col mt-10" v-else>
        <h1 class="text-3xl text-gray-600 text-center mt-10">No blog Content yet</h1>
         <button @click="$router.push('/admin/add-blog')" class="w-2/5 mx-auto mt-5 py-2  text-white rounded px-4 bg-green-800">Add Blog</button>

    </div>
   
  </div>

            </div>
</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
export default {
  components: { DashboardHeader },

    data(){
    return{
      data: [],
      blog: [],
      dropDown: false
    }
  },
  methods: {
    logout(){
      localStorage.removeItem("access_token")
      this.$router.push('/')
    },
    toggle(){
      this.dropDown = !this.dropDown
    },
    async getProfile(){
      try {
     let res =  await this.$store.dispatch("auth/getProfile");
      console.log("helo data", res)
        this.data = res.data
      } catch (error) {
        console.log(error)
      }
    },
     async getBlog(){
      try {
     let res =  await this.$store.dispatch("auth/getBlog");
      console.log("helo data", res)
        this.blog = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getProfile()
    this.getBlog()
  }


}
</script>

<style>

</style>