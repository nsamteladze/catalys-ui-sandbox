<script lang="ts" setup>
import { ref, onMounted, watch, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

import Chatbot from './Chatbot.vue'

let testCall: any = {}

const markdownRenderer = ref();

const route = useRoute()
const obj = reactive({ area: 1 })

watch(
  () => obj.area,
  (area) => {
    console.log(`Area is: ${area}`)
  }
)

const showChatbot = computed(() => {
  return route.path == "/player" 
})

</script>

<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <!-- Navigation sidebar -->
    <div 
      id="app-sidebar-3" 
      class="bg-gray-100 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" 
      style="width:280px">

      <div class="flex flex-column h-full">
        <!-- Catalys logo -->
        <RouterLink to="/">
          <div class="flex flex-shrink-0 py-3">
            <img src="../assets/logo_color_no_background.svg" alt="Image" height="50" />
          </div>
        </RouterLink>
        
        <!-- Area navigation menu -->
        <div class="overflow-y-auto mt-3">
          <RouterLink to="/player">
            <a class="m-3 my-0 p-3 flex align-items-center justify-content-center cursor-pointer text-gray-800 transition-colors transition-duration-150"
              :class="{ '': obj.area != 1, 'bg-primary-600 text-white': obj.area == 1}"
              @click="obj.area = 1">
              <span class="font-medium">Content Player</span>
            </a>
          </RouterLink>
          <RouterLink to="/portal">
            <a class="m-3 mt-0 p-3 flex align-items-center justify-content-center cursor-pointer text-gray-800 transition-colors transition-duration-150"
              :class="{ '': obj.area != 2, 'bg-primary-600 text-white': obj.area == 2}"
              @click="obj.area = 2">
              <span class="font-medium">Student Portal</span>
            </a>
          </RouterLink>
          <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
        </div>

        <!-- Sub-navigation menu -->
        <div class="overflow-y-auto">
          <ul class="list-none p-3 m-0" v-show="obj.area == 1">
            <li>
              <span class="block p-3 pt-0 text-gray-600" style="text-transform: uppercase;">Financial Accounting</span>
            </li>
            <li>
              <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                <span class="font-medium">Chapter 2: An Introduction to Financial Statements</span>
                <i class="pi pi-chevron-down ml-auto"></i>
              </a>
              <ul
                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                <li>
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">The Four Financial Statements</span>                    
                  </a>
                </li>
                <li> 
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">Preparing Financial Statements</span>
                  </a>
                </li>
                <li>
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">Comprehension Check</span>
                  </a>
                </li>
                <li>
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">Financial Statement Analysis</span>
                  </a>
                </li>
                <li>
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">Comprehension Check</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="list-none p-3 m-0" v-show="obj.area == 2">
            <li>
              <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">

                <span class="font-medium">Courses</span>
                <i class="pi pi-chevron-down ml-auto"></i>
              </a>
              <ul
                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                <li>
                  <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                    <span class="font-medium">Accounting & Finance</span>                    
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                <span class="font-medium">My Account</span>
                <i class="pi pi-chevron-down ml-auto"></i>
              </a>
              <ul
                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                <li>
                  <RouterLink to="/account/trial">
                    <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                      <span class="font-medium">Free Trial</span>                    
                    </a>
                  </RouterLink>
                  <RouterLink to="/account/register">
                    <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-primary-600 text-gray-800 hover:text-white transition-duration-150 transition-colors">
                      <span class="font-medium">Register</span>                    
                    </a>
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Page Content -->
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="p-3 flex flex-column flex-auto max-h-screen">
        <RouterView />
      </div>
    </div>

    <!-- Placeholder for Chatbot Interface -->
    <div v-if="showChatbot" class="min-h-screen flex flex-column relative flex-auto">
      <div class="py-3 pr-3 flex flex-column flex-auto max-h-screen">
          <Chatbot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
