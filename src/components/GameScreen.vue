<script lang="ts" setup>
import { onMounted } from 'vue'
import { IPoemLine } from '@/data/PoemsList'
import { move } from '@/utils/ArrayUtils.js'
import PoemLine from './shared/PoemLine.vue'
import { usePoemStore } from '@/store/PoemStore'
import { useGameStore, IPoemLineInfo } from '@/store/GameStore'
import HeadPanel from '@/components/shared/HeadPanel.vue'

const poemStore = usePoemStore()
const gameStore = useGameStore()

onMounted(() => {
    if(!poemStore.poems?.length) throw new Error(`poems is empty`)
    if(!poemStore.selectedSection?.data?.length) throw new Error(`section is empty`)
    if(!poemStore.selectedPoem) throw new Error(`poem is empty`)
    if(!poemStore.poemLines) throw new Error(`Can't break poem apart`)

    poemStore.fixItems()
});

/**
 * Move poem line up or down
 * 
 * @param {IPoemLineInfo} payload 
 */
const moveItem = (payload: IPoemLineInfo): void => {
    poemStore.poemLines = move(poemStore.poemLines as Array<IPoemLine>, payload.from, payload.to)
    poemStore.fixItems()
    gameStore.setScore(payload)
}
</script>

<template>
    <div>
        <HeadPanel v-if="poemStore.selectedPoem" :name="poemStore.selectedPoem.name" />

        <div class="game">
            fixed - {{ poemStore.fixedItemsCount }}
            <div class="game__col game__col--items">
                <TransitionGroup tag="div" class="game__list" name="list" v-if="poemStore.poemLines">
                    <PoemLine 
                        v-for="(item, index) in poemStore.poemLines"
                        :key="item.id"
                        :item="item"
                        :index="index"
                        :is-move-up-disabled="index === 0"
                        :is-move-down-disabled="index === poemStore.poemLines.length - 1"
                        @move="moveItem"
                        :class="{'poemline--fixed' : index < poemStore.fixedItemsCount}"
                    />
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>