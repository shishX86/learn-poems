<script setup lang="ts">
import HomeView from '@/components/menu/HomeView.vue'
import { useMenuScreenStore } from '@/store/MenuScreenStore'
import AboutGameView from '@/components/menu/AboutGameView.vue'
import UploadPoemView from '@/components/menu/SelectPoemView.vue'
import SelectPoemView from '@/components/menu/SelectPoemView.vue'
import SelectSectionView from '@/components/menu/SelectSectionView.vue'

const menuScreenStore = useMenuScreenStore()
</script>

<script lang="ts">
//Need to be difined because 
//it dynamic components
export default {
    components: { 
        HomeView, 
        AboutGameView, 
        SelectPoemView, 
        SelectSectionView, 
        UploadPoemView 
    }
}
</script>

<template>
    <div class="menu">
        <div class="menu__logo-cont">
            <img class="menu__logo" src="@/assets/images/logo.png">
        </div>

        <div class="menuinner">
            <Transition name="fade" mode="out-in">
                <component :is="menuScreenStore.current" />
            </Transition>
        </div>
    </div>
</template>