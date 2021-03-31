const Room = require('../model/schemas/room.js');

const create = async body => {
    return await Room.create({ ...body });
};

module.exports = {
    create,
};
