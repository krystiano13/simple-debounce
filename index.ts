import type { func } from './types';
function debounce(callBack: func, delay:number) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            callBack(...(args as []));
        }, delay)
    }
}

module.exports = debounce;