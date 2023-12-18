function debounce(callBack, delay) {
    return (...args) => {
        setTimeout(() => {
            callBack(...args);
        }, delay);
    };
}
module.exports = debounce;
export {};
//# sourceMappingURL=index.js.map