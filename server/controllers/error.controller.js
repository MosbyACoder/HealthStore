function handleError(req, res) {
    // code to handle error
}
function getErrorMessage(errMsg) {
    console.log(errMsg);
}
// Export the controller function
export default {
    handleError: handleError,
    getErrorMessage: getErrorMessage
};