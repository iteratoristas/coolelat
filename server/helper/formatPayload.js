function formatPayload(user) {
    const object = {};

    if (!user || typeof(user) !== 'object') return object;
    if(!user.hasOwnProperty('user_id') ||!user.hasOwnProperty('first_name') || !user.hasOwnProperty('last_name') || !user.hasOwnProperty('type')) return object;

    object['user_id'] = user['user_id'];
    object['first_name'] = user['first_name'];
    object['last_name'] = user['last_name'];
    object['type'] = user['type'];

    return object;
}

module.exports = formatPayload;