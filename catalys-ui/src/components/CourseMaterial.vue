<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';

let active: any = {};

</script>

<template>
  <div class="p-5 border-2 border-dashed surface-border border-round surface-section flex-1 overflow-auto">
    <!-- Header and sub-header-->
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

    <!-- Overview and topics -->
    <div class="px-4 md:px-6 lg:px-8">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h3>Topics</h3>
      <ul>
        <li>Accounting: Understanding financial statements (income statement, balance sheet, cash flow), bookkeeping, accounting principles.</li>
        <li>Corporate Finance: Basics of finance, budgeting, forecasting, investment decisions, understanding and analyzing financial statements.</li>
      </ul>
    </div>

    <!-- Sections with chapters-->
    <div class="px-4 md:px-6 lg:px-8 mt-4">
      <h4>Financial Accounting</h4>
      <Accordion v-model:activeIndex="active">
          <AccordionTab header="Chapter 1: Role of Accounting in Society">
              <p class="m-0 text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </AccordionTab>
          <AccordionTab header="Chapter 2: Introduction to Financial Statements">
              <p class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
          </AccordionTab>
          <AccordionTab header="Appendix A: Financial Statement Analysis">
              <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
          </AccordionTab>
          <AccordionTab header="Chapter 3: Analyzing and Recording Transactions">
              <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
          </AccordionTab>
          <AccordionTab header="Chapter 4: Accounting Information Systems">
              <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
          </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-size: 1.6rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
h4 {
  font-size: 1.2rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-weight: 500;
}
.p-accordion-header {
  background-color: #3f51b5 !important;
  color: white !important;
}
.p-accordion {
  background-color: #3f51b5 !important;
  color: white !important;
}
.p-accordion-content {
  background-color: #3f51b5 !important;
  color: white !important;
}
</style>