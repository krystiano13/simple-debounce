function debounce(callBack, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(...args);
        }, delay);
    };
}
module.exports = debounce;
//# sourceMappingURL=index.js.map