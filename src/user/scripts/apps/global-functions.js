const GLOBAL_FUNCTIONS = new (function() {
    this.SetObject = (sourceObject, desObject) => {
        const obj = Object.assign({}, sourceObject);
        if (desObject !== undefined) {
            const keys = Object.keys(desObject);
            keys.forEach(k => {
                obj[k] = desObject[k];
            });
        }
        return obj;
    };
    this.FormatNumToThousand = (pNum, pUnitStr) => {
        const unitStr = pUnitStr === undefined ? ',' : pUnitStr;
        return pNum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${unitStr}`);
    };
    this.GetRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };
})();

export default GLOBAL_FUNCTIONS;
