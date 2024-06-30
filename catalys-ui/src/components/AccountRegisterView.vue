<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import { ref } from 'vue'

const checked = ref(false);
const modalVisible = ref(false);
</script>

<template>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex-1 overflow-auto">
        <div class="text-900 font-medium text-xl mb-3">Enroll in the Catalys Program</div>
        <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at. Mauris pellentesque 
            pulvinar pellentesque habitant morbi tristique senectus et.
        </p>
        <div class="surface-card p-4 shadow-2 border-round">
            <ul class="list-none p-6 m-0 surface-0">
                <li class="p-3 mb-2 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                            <i class="pi pi-check"></i>
                        </span>
                        <div class="h-full surface-300" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Complete Your Profile</div>
                        <span class="line-height-3 text-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua.
                        </span>
                        <div class="p-4">
                            <div class="grid formgrid p-fluid">
                                <div class="field mb-4 col-12 md:col-6">
                                    <label for="dateOfBirth" class="font-medium text-900">Date of Birth</label>
                                    <Calendar id="dateOfBirth" :showIcon="true"></Calendar>
                                </div>
                                <div class="field mb-4 col-12 md:col-6">
                                    <label for="phoneNumber" class="font-medium text-900">Phone Number</label>
                                    <InputMask id="phoneNumber" type="phone" mask="(000) 000-0000" placeholder="(000) 000-0000" />
                                </div>
                                <div class="field mb-4 col-12">
                                    <label for="linkedinProfile" class="font-medium text-900">Your LinkedIn Profile</label>
                                    <div class="p-inputgroup">
                                        <span class="p-inputgroup-addon">www.linkedin.com/in/</span>
                                        <InputText id="linkedinProfile" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <Button label="Save" class="w-auto"></Button>
                        </div>
                    </div>
                </li>

                <li class="p-3 mb-2 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="surface-0 text-blue-500 border-blue-500 border-2 border-circle flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                            2
                        </span>
                        <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-blue-500 mb-2">Previous Education</div>
                        <span class="line-height-3 text-700">Tempus iaculis urna id volutpat.</span>
                        <div class="p-4">
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
                            </div>
                        </div>
                        <div class="col-12">
                            <Button label="Save" class="w-auto"></Button>
                        </div>
                    </div>
                </li>

                <li class="p-3 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                            3
                        </span>
                        <div class="h-full surface-300" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-600 mb-2">Application Review</div>
                        <span class="line-height-3 text-500">Sit amet est placerat in egestas erat.</span>
                    </div>
                </li>

                <li class="p-3 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                            4
                        </span>
                        <div class="h-full surface-300" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-600 mb-2">Payment Options</div>
                        <span class="line-height-3 text-500">Sit amet est placerat in egestas erat.</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>



  <Button label="Display" @click="modalVisible = true"></Button>
    <Dialog v-model:visible="modalVisible" appendTo="body" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '40vw'}">
        <template #header>
            <div class="flex align-items-center">
                <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                    <i class="pi pi-info text-lg"></i>
                </span>
                <span class="font-medium text-2xl text-900">Ready to Join Catalys Program?</span>
            </div>
        </template>
        <p class="line-height-3 p-0 m-0">
            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
            Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
        </p>
        <template #footer>
            <div class=" border-top-1 surface-border pt-3">
                <Button icon="pi pi-times" @click="modalVisible = false" label="Cancel" class="p-button-text"></Button>
                <Button icon="pi pi-check" @click="modalVisible = false" label="Enroll"></Button>
            </div>
        </template>
    </Dialog>
</template>

<style scoped>

</style>