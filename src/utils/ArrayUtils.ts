import { IPoemLine } from '@/data/PoemsList'

/**
 * Util method for move item in array
 * 
 * @param  {Array} arr Source array
 * @param  {number} from Current item index
 * @param  {number} to Newly item index
 * @param  {number} on=1 Step size
 */

export const move = (arr: IPoemLine[], from: number, to: number) => {
    const arrCopy = [...arr]
    const startIndex = (from < 0) ? arrCopy.length + from : from
    to = (to > arrCopy.length - 1) ? 0 : to
    
    if (startIndex >= 0 && startIndex < arrCopy.length) {
		const endIndex = to < 0 ? arrCopy.length + to : to
		const [item] = arrCopy.splice(from, 1)
		arrCopy.splice(endIndex, 0, item)
	}

    return arrCopy
}

/**
 * Util method for getting 
 * closest number to exists 
 * values in array
 * 
 * @param {Array} arr 
 * @param {number} needle 
 * @returns {number}
 */
export const closestNumber = (arr: number[], needle: number) => {
    const sortedArr = arr.sort((a: number, b: number) => (Math.abs(a - needle) - Math.abs(b - needle)))

    return sortedArr[0]
}