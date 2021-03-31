const Collection = require('../model/schemas/collection.js');

const list = async userId => {
    return await Collection.find({ owner: userId }).populate({
        path: 'owner',
        select: 'name, sex, email-_id',
    });
};

const findById = async (id, userId) => {
    return await Collection.findOne({ _id: id, owner: userId }).populate({
        path: 'owner',
        select: 'name, sex, email-_id',
    });
};

const remove = async (id, userId) => {
    const contact = await Collection.findOneAndRemove({
        _id: id,
        owner: userId,
    });
    if (contact) {
        return contact;
    } else {
        throw new Error('Contact not found');
    }
};

const create = async body => {
    return await Collection.create(body);
};

const update = async (contactId, body, userId) => {
    return await Collection.findOneAndUpdate(
        { _id: contactId, owner: userId },
        { ...body },
        { new: true },
    );
};

module.exports = {
    list,
    findById,
    remove,
    create,
    update,
};
