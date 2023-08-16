/**
 * Store for holding
 * current displaying 
 * page state
 * 
 * We need it because
 * publisher do not allow
 * any url changing and we
 * can't use router
 */

import { defineStore } from 'pinia';
import { PagesEnum } from '@/enums/PagesEnum';

interface IState {
    screens: PagesEnum[]
    current: PagesEnum
}

export const useRootScreenStore = defineStore('RootScreenStore', {
    state: (): IState => ({
        screens: [PagesEnum.StartMenuScreen, PagesEnum.GameScreen],
        current: PagesEnum.StartMenuScreen
    }),

    actions: {
        goTo(val: PagesEnum) {
            this.current = val
        }
    }
})