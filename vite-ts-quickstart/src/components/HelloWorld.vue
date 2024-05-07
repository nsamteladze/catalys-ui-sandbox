<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import markdownit from 'markdown-it';
import MarkdownRenderer from './MarkdownRenderer.vue'
import Avatar from 'primevue/avatar';

</script>

<template>

  <div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-3"
      class="bg-gray-100 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" style="width:280px">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center px-4 flex-shrink-0 mt-3">
          <img src="../assets/logo_color_no_background.svg" alt="Image" height="50" />
        </div>
        <div class="overflow-y-auto mt-3">          
          <a v-ripple
            class="m-3 my-0 flex align-items-center cursor-pointer p-3 border-round bg-indigo-500 hover:bg-indigo-500 text-white hover:text-white transition-duration-150 transition-colors p-ripple">
            <span class="font-medium">Content Player</span>
          </a>
          <a v-ripple
            class="m-3 mt-0 flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
            <span class="font-medium">Student Portal</span>
          </a>
          <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none p-3 m-0">
            <li>
              <span class="block p-3 pt-0 text-gray-600" style="text-transform: uppercase;">Financial Accounting</span>
            </li>
            <li>
              <a v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                <span class="font-medium">Chapter 2: An Introduction to Financial Statements</span>
                <i class="pi pi-chevron-down ml-auto"></i>
              </a>
              <ul
                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                <li>
                  <a v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">The Four Financial Statements</span>
                  </a>
                </li>
                <li>
                  <a v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">Preparing Financial Statements</span>
                  </a>
                </li>
                <li>
                  <a v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">Comprehension Check</span>
                  </a>
                </li>
                <li>
                  <a v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">Financial Statement Analysis</span>
                  </a>
                </li>
                <li>
                  <a v-ripple
                    class="flex align-items-center cursor-pointer p-3 border-round hover:bg-indigo-500 text-gray-800 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">Comprehension Check</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="min-h-screen w-4 flex flex-column relative flex-auto">
      <div
        class="flex justify-content-between align-items-end px-5 surface-0 border-bottom-1 surface-border relative lg:static"
        style="height:60px">
        
        <Avatar v-badge.danger="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
        <!-- <ul
          class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
          <li class="border-top-1 surface-border lg:border-top-none">
            <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
              <Avatar v-badge.danger="4" label="NS" size="large" />
            </a>
          </li>
        </ul> -->
      </div>
      <div class="p-5 flex flex-column flex-auto" style="height: 100px;">
        <MarkdownRenderer />
      </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
      
      <div class="p-5 flex flex-column flex-auto" style="height: 100px;">
        <div class="p-5 border-2 border-dashed surface-border border-round surface-section flex-1 w-20rem">
            [PLACEHOLDER] <br />
            Chatbot Interface
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
