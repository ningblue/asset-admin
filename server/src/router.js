var express = require('express');
var router = express.Router();

//验证账号信息
router.post('/account/login',require('./controllers/account/login.js'));

//获取资产列表
router.get('/asset/list',require('./controllers/asset/getList.js'));

//创建资产
router.post('/asset/upsert',require('./controllers/asset/upsert.js'));

//删除资产
router.post('/asset/delete',require('./controllers/asset/delete.js'));

//获取记账列表
router.get('/charge/list',require('./controllers/charge/getList.js'));

//创建记账
router.post('/charge/upsert',require('./controllers/charge/upsert.js'));

//删除记账
router.post('/charge/delete',require('./controllers/charge/delete.js'));

//获取定期记账列表
router.get('/regular-charge/list',require('./controllers/regular-charge/getList.js'));

//创建定期记账
router.post('/regular-charge/upsert',require('./controllers/regular-charge/upsert.js'));

//删除定期记账
router.post('/regular-charge/delete',require('./controllers/regular-charge/delete.js'));

module.exports = router;