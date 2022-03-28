<template>
<div class="bg-gray-100 min-h-screen">
      <dashboard-header />
      <div>
           <header class=" shadow mb-10">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">Edit User</h1>
          </div>
        </header>
      </div>
  <form class="max-w-7xl mx-auto">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-2 gap-6">
                        <div class="">
                          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                          <input v-model="update_data.first_name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
          
                        <div>
                          <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                          <input v-model="update_data.last_name" type="text" name="last-name" id="last-name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
                      <div>
                        <button @click.prevent="updateProfile" class="py-2 w-2/4 bg-gray-900 text-white rounded">Update Profile</button>
                      </div>
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
      data: [],
      update_data: {
        first_name: "",
        last_name: ""
      }
    }
  },
  methods: {
    async updateProfile(){
      try {
         let data = await this.$store.dispatch("auth/updateProfile", this.update_data);
         console.log(data)
         this.$toast.success("successfully updated profile")
        
      } catch (error) {
          this.$toast.error("failed to update profile");
      }
    },
    async getProfile(){
      try {
     let res =  await this.$store.dispatch("auth/getProfile");
      console.log("helo data", res)
        this.data = res.data
        this.update_data.first_name = res.data.first_name,
        this.update_data.last_name = res.data.last_name
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getProfile()
  }
}
</script>

<style>

</style>