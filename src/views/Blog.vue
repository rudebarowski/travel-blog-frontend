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
      <div class="grid  max-w-7xl mx-auto  grid-cols-3 gap-10">
          <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded cursor-pointer bg-white overflow-hidden shadow-lg">
      <img class="w-full" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
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
}
</script>

<style>

</style>