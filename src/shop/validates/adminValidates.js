const Joi = require("joi");


const validateAddProduct = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
    });
    try {
        const { errrr, value } = schema.validateAsync({ username: 'abc', birth_year: 1994 });
        if (errrr) {
            return res.status(400).json({ errrr: errrr.details[0].message });
        }
        next();
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
    }


}
const validateEditProduct = (req, res, next) => {
    next();
}

module.exports = {
    validateAddProduct,
    validateEditProduct,
}