<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';

var checked = true;

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
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="privacy2" class="font-medium text-900">Privacy</label>
                <div class="flex align-items-center">
                    <InputSwitch id="privacy2" v-model="checked"></InputSwitch>
                    <span class="ml-2">Share my data with contacts</span>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="col-12">
                <Button label="Save Changes" class="w-auto h-auto"></Button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>