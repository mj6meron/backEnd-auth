// Validation
const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        employment: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation
};