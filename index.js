//Write code in the index.js file which will require and call this function, so that it can be visually tested.

// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };
  
  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    // success, print out the deets!
    printPassTimes(passTimes);
  });


  

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// //Write code in index.js to use the function. fetchCoordsByIP
// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned Coords:' , coords);
//   });


//   // The code below is temporary and can be commented out.
// const { fetchISSFlyOverTimes } = require('./iss');

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

// //Calling nextISSTimesForMyLocation
// /** 
//  * Input: 
//  *   Array of data objects defining the next fly-overs of the ISS.
//  *   [ { risetime: <number>, duration: <number> }, ... ]
//  * Returns: 
//  *   undefined
//  * Sideffect: 
//  *   Console log messages to make that data more human readable.
//  *   Example output:
//  *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
//  */


