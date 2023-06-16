//Require the module in our iss_promised.js file.
const request = require('request-promise-native');


//Define and export fetchMyIP. This function should only have one line of code: fetch the IP address from the API, 
//using the request function, and return the promise that is returned by request.
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

// //* 
//  * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
// * Input: JSON string containing the IP address
// * Returns: Promise of request for lat/lon
// */
const fetchCoordsByIP = body => {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

/*
 * Requests data from https://iss-flyover.herokuapp.com using provided lat/long data
 * Input: JSON body containing geo data response from ipwho.is
 * Returns: Promise of request for fly over data, returned as JSON string
 */
const fetchISSFlyOverTimes = body => {
  const { latitude, longitude } = JSON.parse(body).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
};


/* 
 * Input: None
 * Returns: Promise for fly over data for users location
 */
const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };