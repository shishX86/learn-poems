<script lang="ts" setup>
import { IPoem } from '@/data/PoemsList'
import { PagesEnum } from '@/enums/PagesEnum'
import { usePoemStore } from '@/store/PoemStore'
import { MenuViewsEnum } from '@/enums/MenuViewsEnum'
import MenuButton from '@/components/shared/MenuButton.vue'
import { useRootScreenStore } from '@/store/RootScreenStore'
import { useMenuScreenStore } from '@/store/MenuScreenStore'

const poemStore = usePoemStore()
const menuScreenStore = useMenuScreenStore()
const rootScreenStore = useRootScreenStore()

const selectPoem = (item: IPoem) => {
    poemStore.selectPoem(item)
    rootScreenStore.goTo(PagesEnum.GameScreen)
};
</script>

<template>
    <div class="select-poem">
        <div class="menu__btns menu__btns--2rows" 
            v-if="poemStore && poemStore.selectedSection">

            <div class="menu__btn" 
                v-for="item in poemStore.selectedSection.data"
                :key="item.id">

                <MenuButton @btn-clicked="selectPoem(item)">
                    {{item.name}}
                </MenuButton>
            </div>

            <div class="menu__btn">
                <MenuButton 
                    @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.SelectSectionView)">

                    Назад
                </MenuButton>
            </div>
        </div>
    </div>
</template>