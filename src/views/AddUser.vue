<template>
<div class="bg-gray-100 min-h-screen">
      <dashboard-header />
      <div class="mb-10">
           <header class=" shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">Add User</h1>
          </div>
        </header>
      </div>
  <form class="max-w-7xl mx-auto">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-2 gap-6">
                        <div class="">
                          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                          <input v-model="user_data.first_name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
          
                        <div>
                          <label  class="block text-sm font-medium text-gray-700">Last name</label>
                          <input v-model="user_data.last_name" type="text"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
                         <div>
                          <label  class="block text-sm font-medium text-gray-700">Email</label>
                          <input v-model="user_data.email" type="email"   class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
                         <div>
                          <label  class="block text-sm font-medium text-gray-700">Role</label>
                          <input v-model="user_data.role" type="text"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
                         <div>
                          <label  class="block text-sm font-medium text-gray-700">Password</label>
                          <input v-model="user_data.password" type="password"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3">
                        </div>
                      <div>
                        <button @click.prevent="addUser" class="py-2 w-2/4 bg-gray-900 text-white rounded">Add User</button>
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
      user_data: {
        first_name: "",
        last_name: "",
        email: "",
        role: "",
        password: ""
      }
    }
  },
  methods: {
    async addUser(){
      try {
         let data = await this.$store.dispatch("auth/addUser", this.user_data);
         console.log(data)
         this.$toast.success("successfully added user")
         this.$router.push("/admin/user")
        
      } catch (error) {
          this.$toast.error("failed to update profile");
      }
    },
  },

}
</script>

<style>

</style>