/**
 * Store for holding
 * state of selected 
 * poems
 */

import { defineStore } from 'pinia'
import { IPoem, IPoemsSection, IPoemLine, poems } from '@/data/PoemsList'

interface IState {
    poems: IPoemsSection[]
    selectedSection: IPoemsSection | null
    selectedPoem: IPoem | null
    poemLines: IPoemLine[] | null
    fixedItemsCount: number
}

export const usePoemStore = defineStore('PoemStore', {
    state: (): IState => ({
        poems,
        selectedSection: null,
        selectedPoem: null,
        poemLines: null, 
        fixedItemsCount: 0
    }),

    actions: {
        /**
         * Select section of poems
         * and sets it in store
         * 
         * @param val : IPoemsSection
         */
        selectSection(val: IPoemsSection): void {
            this.selectedSection = val
        },

        /**
         * Select poem from selected section 
         * of poems and set it in store
         * 
         * @param val : IPoems
         */
        selectPoem(val: IPoem): void {
            this.selectedPoem = val

            const splitedPoemLines = this.selectedPoem.content.split("\n")
                .map((val, i) => ({ id: i, text: val.trim() } as IPoemLine))

            const shuffle = (): IPoemLine[] => { 
                const result =  splitedPoemLines.sort(() => .5 - Math.random());

                //Original first element must not be first
                //thats why there is recursion
                return (result[0]?.id === 0) 
                    ? shuffle()
                    : splitedPoemLines
            };

            this.poemLines = shuffle()
        },

        /**
         * Check if poem line is right and must
         * be fixed in the top
         * 
         * @returns void
         */
        fixItems(): void {
            if(!this.poemLines) return
            
            this.fixedItemsCount = 0

            for(let i = 0; i < this.poemLines.length; i++) {
                const item = this.poemLines[i]
                if(item.id !== i) return
        
                this.fixedItemsCount++
            }
        }
    }
})