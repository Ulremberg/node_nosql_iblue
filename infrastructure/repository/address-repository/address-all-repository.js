
const httpStatusResponse = require('../../../commons/http-response/http-status-response');


const listAllAddresses = async (request, response) => {
  try {    

    return httpStatusResponse(200, (allAddresses), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "Create address repository");
    return finalError;
  }
}

module.exports = listAllAddresses;