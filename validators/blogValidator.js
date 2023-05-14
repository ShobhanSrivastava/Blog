import Joi from "joi";

const blogValidator = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    likes: Joi.number(),
});

export default blogValidator;
