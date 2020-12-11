const model = require('./Model');

exports.getAllProducts = async (req, res) => {
    const data = await model.find()

    res.json({
        data : data
    });
}

exports.getProductById = async (req, res) => {
    const data = await model.findOne({'_id' : req.params.id})
    res.json({data});
}
