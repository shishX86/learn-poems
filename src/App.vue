<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import GameScreen from './components/GameScreen.vue'
import { useRootScreenStore } from '@/store/RootScreenStore'
import StartMenuScreen from './components/StartMenuScreen.vue'

const rootScreenStore = useRootScreenStore()
const { current } = storeToRefs(rootScreenStore)
</script>

<script lang="ts">
//Need to be difined because 
//it dynamic components
export default {
    components: {
        GameScreen,
        StartMenuScreen
    }
}
</script>

<template>
    <!-- MAIN CONTENT -->
    <main class="content">
        <keep-alive>
            <Transition name="fade" mode="out-in">
                <component :is="current"></component>
            </Transition>
        </keep-alive>
    </main>

    <!-- BACKGROUND -->
    <div class="bg-main">
        <img class="bg-main__bg" alt="background" src="@/assets/images/bg.jpg" />
        <img class="bg-main__animated-bg" alt="background" src="@/assets/images/first_plan.png" />
    </div>
</template>