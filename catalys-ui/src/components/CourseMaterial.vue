<script lang="ts" setup>
import { ref, onMounted } from 'vue';

</script>

<template>
  <div class="p-5 border-2 border-dashed surface-border border-round surface-section flex-1 overflow-auto">
    <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
      <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
          <div class="mb-3 lg:mb-0">
              <div class="text-3xl font-medium text-900 mb-3">Accounting & Finance</div>
              <div class="flex flex-row">
                <div class="text-500 mr-0 md:mr-3">22 chapters</div>
                <div class="text-500 mr-0 md:mr-3">&#8226;</div>
                <div class="text-500 mr-0 md:mr-3">Average study time: 80 hours</div>
              </div>
          </div>
      </div>
    </div>
    <div class="px-4 md:px-6 lg:px-8">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h4>Topics</h4>
      <ul>
        <li>Accounting: Understanding financial statements (income statement, balance sheet, cash flow), bookkeeping, accounting principles.</li>
        <li>Corporate Finance: Basics of finance, budgeting, forecasting, investment decisions, understanding and analyzing financial statements.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-size: 1.6rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>