<script lang="ts" setup>
    import { IPoemLine } from '@/data/PoemsList'
    import UpBtn from '@/assets/icons/UpBtn.vue'
    import DownBtn from '@/assets/icons/DownBtn.vue'
    import { readText } from '@/utils/SpeechUtils.js'
    import { IPoemLineInfo } from '@/store/GameStore'
    import SoundIcon from '@/assets/icons/SoundIcon.vue'

    interface IProps{
        item: IPoemLine | null,
        index: number,
        isMoveUpDisabled: boolean,
        isMoveDownDisabled: boolean
    }

    const {
        item, 
        index, 
        isMoveUpDisabled=false, 
        isMoveDownDisabled=false
    } = defineProps<IProps>()

    const emit = defineEmits<{
        (e: 'move', payload: IPoemLineInfo): void
    }>()

    const playLine = () => readText( item ? item.text : '')
</script>

<template>
    <div class="poemline">
        <div class="poemline__col poemline__col--sound">
            <button 
                class="iconbtn" 
                type="button" 
                @click="playLine">

                <SoundIcon></SoundIcon>
            </button>
        </div>

        <div class="poemline__col poemline__col--text">
            {{ item?.text ? item.text : '' }}
        </div>

        <div class="poemline__col poemline__col--order-btns">
            <button 
                class="iconbtn"
                :class="{'disabled': isMoveUpDisabled}"
                type="button" 
                @click="emit('move', {item: item, from: index, to: index - 1} as IPoemLineInfo)">

                <UpBtn></UpBtn>
            </button>
            
            <button 
                class="iconbtn" 
                :class="{'disabled': isMoveDownDisabled}"
                type="button" 
                @click="emit('move', {item: item, from: index, to: index + 1} as IPoemLineInfo)">

                <DownBtn></DownBtn>
            </button>
        </div>
    </div>
</template>