var express = require('express');
var router = express.Router();
var dbConfig = require('./../const/config')
var util = require('../db/util')

var pool = util.createPool();

router.get('/homeList', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var data = {}
        connection.query(dbConfig.newsSql.queryAll, function (err, dbRes) {
            if (dbRes) {
                data.result = {
                    newsList: dbRes
                }
            }
            // 发送数据
            console.log(data.result)
            util.responseJSON(res, data)
        })
        // 断开数据库
        connection.release()
    });
})
module.exports = router;