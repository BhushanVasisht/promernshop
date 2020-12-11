const model = require('./Model');

exports.addEntry = async (req, res) => {
    const data = await model.find()

    const entry = new model(req.body);
    entry._id = (data.length + 1).toString()
    await entry.save();
    res.send("OK");
}
