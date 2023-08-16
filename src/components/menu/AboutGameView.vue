<script setup lang="ts">
import { MenuViewsEnum } from '@/enums/MenuViewsEnum'
import MenuButton from '@/components/shared/MenuButton.vue'
import { useMenuScreenStore } from '@/store/MenuScreenStore'

const menuScreenStore = useMenuScreenStore()
</script>

<template>
    <div class="select-poem">
        About

        <div class="menu__btns">
            <div class="menu__btn">
                <MenuButton @btn-clicked="menuScreenStore.goTo(MenuViewsEnum.HomeView)">
                    Назад
                </MenuButton>
            </div>
        </div>
    </div>
</template>