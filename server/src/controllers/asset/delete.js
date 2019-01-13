const asset = require('../../models/asset');

module.exports = (req, res) => {
    if (!req.body.asset_id) {
        return res.send({
            status: 0,
            msg: '参数错误'
        })
    }
    asset.update({ is_delete: 1 }, { where: { asset_id: req.body.asset_id } }).then(data => {
        res.send({
            status: 1
        })
    }).catch(e => {
        res.send({
            status: 0,
            msg: '数据库错误'
        })
    })

}