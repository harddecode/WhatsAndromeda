function successfullMessage(msg) {
    return "β ```" + msg + "```"
}
function errorMessage(msg) {
    return "π ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
