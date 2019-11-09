const jobList= require("./job-finder");


describe('for array of jobRequirements,prints out object of correct suitable jobs', () => {
    it('returns no suitable jobs', () => {
        const test = [
            `"Company A" requires 2 door car or 4 door car,  and car insurance.`,
            `"Company B" requires  motorcycle, or cat.`,
            `"Company C" requires credit card and a jacket`,
            `"Company D" requires 2 kg of potato and cheese or jellyfish `]
        const expected = {
            0: "can't apply for job",
            1: "can't apply for job",
            2: "can't apply for job",
            3: "can't apply for job"
        }
        expect(jobList(test)).toEqual(expected);
    })
    
    it('return all suitable jobs',() => {
        const test = [
            `"Company A" requires bike and a driver's license`,
            `"Company B" requires  bike or cat or jacket.`,
            `"Company C" requires driver's license`,
            `"Company D" doesn't require anything` 
        ]
        const expected = {
            0: "you can apply for job",you can apply for job
            1: "you can apply for job",you can apply for job
            2: "you can apply for job",
            3: "you can apply for job"
        }
        expect(jobList(test)).toEqual(expected);

    })
    it('return some suitable jobs',() => {
        const test = [
            `"Company A" requires bike and a driver's license`,
            `"Company B" requires  bike and cat and jacket.`,
            `"Company C" requires driver's license and home`,
            `"Company D" requires some food or bike` 
        ]
        const expected = {
            0: "you can apply for job",
            1: "can't apply for job",
            2: "can't apply for job",
            3: "you can apply for job"
        }
        expect(jobList(test)).toEqual(expected);

    })
})