const Vote = require('../model/schemas/vote.js')

const defaultFunc = () => {
    return true
}
const create = async (body) => {
    return await Vote.create(body)
}

module.exports = {
    create
}