<script lang="ts" setup>
import { MenuViewsEnum } from '@/enums/MenuViewsEnum'
import MenuButton from '@/components/shared/MenuButton.vue'
import { useMenuScreenStore } from '@/store/MenuScreenStore'

const menuScreenStore = useMenuScreenStore()
</script>

<template>
    <div class="menu__btns">
        <div class="menu__btn">
            <MenuButton @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.SelectSectionView)">
                Выбрать
            </MenuButton>
        </div>
        <div class="menu__btn">
            <MenuButton @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.UploadPoemView)">
                Загрузить
            </MenuButton>
        </div>
        <div class="menu__btn">
            <MenuButton @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.AboutGameView)">
                Об игре
            </MenuButton>
        </div>
    </div>
</template>