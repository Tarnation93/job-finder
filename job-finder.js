
const jobList = (arrOfReq) => {
    const listOfJobsObj = {}
    arrOfReq.forEach((job, i) => {
        if (job.includes("doesn't require anything")) {
            listOfJobsObj[i] = "you can apply for job";
            return;
        };
        let arr = job.split("and");
        for (let j = 0; j < arr.length; j++) {
            if (!arr[j].includes("driver's license") && !arr[j].includes("bike")) {
                listOfJobsObj[i] = "can't apply for job";
            } else {
                listOfJobsObj[i] = "you can apply for job";
            }
        }
    })

    return listOfJobsObj;
}

module.exports = jobList;