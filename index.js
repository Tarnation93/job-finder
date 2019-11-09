const jobList= require("./job-finder")
let companyRequirements = [
    `"Company A" requires an apartment or house, and property insurance.`,
    `"Company B" requires 5 door car or 4 door car, and a driver's license and car insurance.`,
    `"Company C" requires a social security number and a work permit.`,
    `"Company D" requires an apartment or a flat or a house.`,
    `"Company E" requires a driver's license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.`,
    `"Company F" requires a scooter or a bike, or a motorcycle and a driver's license`,
    `"Company G" requires a massage qualification certificate and a liability insurance.`,
    `"Company H" requires a storage place or a garage.`,
    `"Company J" doesn't require anything, you can come and start working immediately.`,
    `"Company K" requires a bike .`
    ]

console.log(jobList(companyRequirements));


