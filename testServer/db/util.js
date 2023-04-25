var mysql = require('mysql');
var dbConfig = require('./../const/config')

var createPool = function () {
    return mysql.createPool(dbConfig.mysql)
}

var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        })
    } else {
        res.json(ret)
    }
}

module.exports = {
    responseJSON,
    createPool
}