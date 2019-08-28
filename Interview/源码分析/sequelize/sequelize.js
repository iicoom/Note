class Sequelize {

    constructor(database, username, password, options) {

        this.importCache = {};
    }

    import(path) {
        // 在做ES6 兼容
        if (!this.importCache[path]) {
            let defineCall = arguments.length > 1 ? arguments[1] : require(path);
        }

        return this.importCache[path]
    }
}

module.exports = Sequelize;
