<template>
    <div class="container h-screen">
        <!-- center the content below -->
        <div class="flex flex-col">
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="welcomeBackground">
                <div class="text-md md:text-xl">Welcome To</div>
                <div class="font-bold text-xl md:text-4xl">Experience of Indonesia</div>
                <hr class="underline mt-2 border-4" />
                <div class="text-center w-full px-4 text-sm mt-3 md:text-lg md:w-full md:px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                </div>
                <div>
                    <div class="flex flex-row mt-8">
                        <div>
                            <tombol @click="openVR" class="ml-6 mt-2 text-sm md:text-lg  md:mt-4 md:ml-4" title="Sight" />
                        </div>
                    </div>
                </div>
            </top>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Tombol from '../components/Tombol.vue'
const { ipcRenderer } = require('electron')
export default {
  name: 'Home',
  components: {
    Top,
    Tombol
  },
  data () {
    return {
      welcomeBackground: require('../assets/Borobudur.jpg')
    }
  },
  methods: {
    async openVR () {
      await ipcRenderer.invoke('openVR', null)
    }
  }
}
</script>

<style>

</style>
