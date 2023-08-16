<script lang="ts" setup>
    import { PagesEnum } from '@/enums/PagesEnum'
    import { usePoemStore } from '@/store/PoemStore'
    import { useGameStore } from '@/store/GameStore'
    import StarIcon from '@/assets/icons/StarIcon.vue'
    import { useRootScreenStore } from '@/store/RootScreenStore'

    const gameStore = useGameStore()
    const poemStore = usePoemStore()
    const rootScreenStore = useRootScreenStore()
</script>

<template>
    <div class="head">
        <div class="head__item head__item--back">
            <button class="mainbtn mainbtn--back" 
                @click="rootScreenStore.goTo(PagesEnum.StartMenuScreen)" 
                type="button">

                <img class="mainbtn__icon" src="@/assets/images/back.svg">
            </button>
        </div>

        <div class="head__item head__item--title">
            <h1 class="head__title" v-if="poemStore?.selectedPoem">
                {{ poemStore.selectedPoem.name }}
            </h1>
        </div>

        <div class="head__item head__item--score">
            <div class="score">
                <div class="score__value"
                    :class="{'groweffect': gameStore.isScoreAnimate}">

                    {{ gameStore.score }}
                </div>

                <StarIcon class="score__icon"/>
            </div>
        </div>
    </div>
</template>