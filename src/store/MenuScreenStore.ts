/**
 * Store for holding
 * current displaying 
 * menu subpage state
 * 
 * We need it because
 * publisher do not allow
 * any url changing and we
 * can't use router
 */

import { defineStore } from 'pinia'
import { MenuViewsEnum } from '@/enums/MenuViewsEnum'

export const useMenuScreenStore = defineStore('MenuScreenStore', {
    state: () => ({
        screens: [ 
            MenuViewsEnum.HomeView, 
            MenuViewsEnum.AboutGameView, 
            MenuViewsEnum.SelectPoemView, 
            MenuViewsEnum.SelectSectionView, 
            MenuViewsEnum.UploadPoemView
        ],
        current: MenuViewsEnum.HomeView
    }),

    actions: {
        goTo(val: MenuViewsEnum) {
            this.current = val
        }
    }
})