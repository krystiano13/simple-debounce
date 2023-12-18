import type { func } from './types';
function debounce(callBack: func, delay:number) {
    return (...args) => {
        setTimeout(()=> {
            callBack(...(args as []));
        }, delay)
    }
}

module.exports = debounce;