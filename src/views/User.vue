<template>
  <div class="bg-gray-100 min-h-screen">
      <dashboard-header />
      <div>
           <header class=" shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">User</h1>
            <button @click="$router.push('/admin/add-user')" class="py-2 px-4 bg-green-800 text-white rounded">Add User</button>
          </div>
        </header>
      </div>
      <div class="container mx-auto max-w-7xl px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">Users</h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                  class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          Users
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          Date Added
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="data in data" :key="data.id">
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {{data.first_name}} {{data.last_name}}
                              </p>
                              <p class="text-gray-600 whitespace-no-wrap">{{data.email}}</p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">{{data.role}}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">{{data.created_at}}</p>
                        </td>
                      </tr>
            
                    </tbody>
                  </table>
                </div>
              </div>
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
      data: []
    }
  },
  methods: {
    async getUser(){
      try {
     let res =  await this.$store.dispatch("auth/getUser");
      console.log("helo data", res.data.data)
        this.data = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
    },
  
  mounted(){
    this.getUser()
  } 
}
</script>

<style>

</style>