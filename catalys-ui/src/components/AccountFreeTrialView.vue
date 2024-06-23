<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue'

var checked = ref(false);

</script>

<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex-1 overflow-auto">
    <div class="text-900 font-medium text-xl mb-3">Free Trial Registration</div>
    <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Please complete the below form to register for a free trial of the Catalys program.</p>
    <div class="surface-card p-4 shadow-2 border-round">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
                <label for="firstName" class="font-medium text-900">First Name</label>
                <InputText id="firstName" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="lastName" class="font-medium text-900">Last Name</label>
                <InputText id="lastName" type="text" />
            </div>
            <div class="field mb-4 col-12">
                <label for="email" class="font-medium text-900">Email</label>
                <InputText id="email" type="email" />
            </div>
            <div class="field mb-4 col-12 flex align-items-center">
                <Checkbox id="acceptTerms" v-model="checked" :binary="true" />
                <span class="ml-2">I agree to Catalys Education terms and conditions.</span>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="col-12">
                <Button label="Start Free Trial" class="w-auto"></Button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>