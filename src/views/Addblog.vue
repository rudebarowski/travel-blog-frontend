<template>
<div class="bg-gray-100 min-h-screen">
      <dashboard-header />
      <div>
           <header class=" shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">Add Blog</h1>
          </div>
        </header>
      </div>
  <form class="max-w-7xl mx-auto">
              
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-1 gap-6">
                        <div class="">
                          <label  class="block text-sm font-medium text-gray-700">Title</label>
                          <input type="text" name="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>                   
              <div class="mt-1">
                <label  class="block text-sm font-medium text-gray-700">Content</label>
                        <textarea id="about" name="about" rows="9" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                      </div>
                    </div>

                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button @click.prevent="addBlog" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                  </div>
                </div>
                </div>
              </form>
</div>
</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
export default {
  components: { DashboardHeader },
  data(){
   
      return{
         blog_data: {
           content: "",
      title: ""
      }
     
    }
  },
  methods: {
    async addBlog(){
      try {
         let data = await this.$store.dispatch("auth/addBlog", this.blog_data);
         console.log(data)
         this.$toast.success("successfully added blog post")
        
      } catch (error) {
                this.$toast.error("failed to update profile");
      }
    }
  }
}
</script>

<style>

</style>