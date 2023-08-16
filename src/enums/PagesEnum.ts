/**
 * Enum of available pages in game.
 * 
 * We can't use router, because publisher
 * do not allow to change url, so we need to
 * use dynamic components
 */

export const enum PagesEnum {
    StartMenuScreen = 'StartMenuScreen',
    GameScreen = 'GameScreen'
}