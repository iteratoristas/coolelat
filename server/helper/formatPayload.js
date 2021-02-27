function formatPayload(user) {
    const object = {};

    if (!user || typeof(user) !== 'object') return object;
    if(!user.hasOwnProperty('first_name') || !user.hasOwnProperty('last_name') || !user.hasOwnProperty('type')) return object;

    object['first_name'] = user['first_name'];
    object['last_name'] = user['last_name'];
    object['type'] = user['type'];

    return object;
}

module.exports = formatPayload;