/**
 * Store for holding
 * main game information 
 */


import { defineStore } from 'pinia'
import { IPoemLine } from '@/data/PoemsList'
import { closestNumber } from '@/utils/ArrayUtils.js'

/**
 * Game info interface
 * containst data for
 * change score and information 
 * about moved poem line
 */
export interface IPoemLineInfo {
    item: IPoemLine
    from: number
    to: number
}

interface IState {
    score: number
    baseScoreStep: number
    isScoreAnimate: boolean
    scoreMultiplier: number
}

export const useGameStore = defineStore('GameStore', {
    state: (): IState => ({
        score: 0,
        baseScoreStep: 10, 
        isScoreAnimate: false,
        scoreMultiplier: 1
    }),

    actions: {
        /**
         * Game score animation
         * trigger method
         */
        animateScore(): void {
            this.isScoreAnimate = true
            setTimeout(() => this.isScoreAnimate = false, 500)
        },

        /**
         * Method for update score value
         * 
         * @param {IPoemLineInfo} payload 
         * @returns  void
         */
        setScore(payload: IPoemLineInfo): void {
            const closestToGoal: number = closestNumber([payload.from, payload.to], payload.item.id)

            if(closestToGoal === payload.to) {
                const scoreDiff: number = this.baseScoreStep * this.scoreMultiplier

                if(isNaN(scoreDiff)) return
                this.score += scoreDiff

                this.animateScore()

                if(this.scoreMultiplier < 5) this.scoreMultiplier++
            } else {
                this.scoreMultiplier = 1
            }
        },
    },
})