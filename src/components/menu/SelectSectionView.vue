<script lang="ts" setup>
import { usePoemStore } from '@/store/PoemStore'
import { IPoemsSection } from '@/data/PoemsList'
import { MenuViewsEnum } from '@/enums/MenuViewsEnum'
import MenuButton from '@/components/shared/MenuButton.vue'
import { useMenuScreenStore } from '@/store/MenuScreenStore'

const poemStore = usePoemStore()
const menuScreenStore = useMenuScreenStore()

const selectSection = (section: IPoemsSection) => {
    poemStore.selectSection(section)
    menuScreenStore.goTo(MenuViewsEnum.SelectPoemView)
};
</script>

<template>
    <div class="select-poem">
        <div class="menu__btns">
            <div class="menu__btn" 
                v-for="item in poemStore.poems"
                :key="item.sectionId">

                <MenuButton @btn-clicked="selectSection(item)">
                    {{item.name}}
                </MenuButton>
            </div>

            <div class="menu__btn">
                <MenuButton @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.HomeView)">
                    Назад
                </MenuButton>
            </div>
        </div>
    </div>
</template>