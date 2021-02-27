const isUndefined = (data) => typeof(data) === 'undefined' || data === null;
const isEmpty = (data) => data.trim() === '';
const isInvalid = (data) => isUndefined(data) || isEmpty(data);
const isInvalidPassword = (password) => isInvalid(password) || password.trim().length < 8 || password.trim().length > 16

module.exports = {
    isInvalid,
    isInvalidPassword
}