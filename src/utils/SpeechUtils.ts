/**
 * Util function for reading text
 * by browser Speech API
 * 
 * @param {string} text Text to read
 * @param {object} incOptions Speech settings
 */

export const readText = (text: string, incOptions = {}): void => {
    const defaultOptions = { 
        pitch: 1,
        rate: .8,
        volume: 1
    }

    const options = { ...defaultOptions, ...incOptions }

    if(typeof(window.speechSynthesis) === "undefined") 
        throw new Error("Web Speech API not supported")

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = options.pitch
    utterance.rate = options.rate
    utterance.volume = options.volume
    window.speechSynthesis.speak(utterance)
}