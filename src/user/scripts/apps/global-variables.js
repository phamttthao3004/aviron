class GLOBAL_VARIABLES {
    constructor() {
        this.user_id = '';
        this.user_name = '';
        this.user_email = '';
        this.user_role = '';
        this.user_avatar = '';
    }

    Set(newData) {
        if (newData !== undefined) {
            const keys = Object.keys(newData);
            keys.map(k => {
                this[k] = newData[k];
                return k;
            });
        }
    }

    Get(key) {
        return this[key];
    }
}

export default new GLOBAL_VARIABLES();
