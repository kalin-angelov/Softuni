class SmartHike {
    constructor (username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    };

    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    };

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw Error (`${peak} is not in your current goals`);
        } else if (this.goals.hasOwnProperty(peak) && this.resources <= 0) {
            throw Error (`You don't have enough resources to start the hike`);
        }

        let diff = this.resources - (time * 10);

        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= time * 10;
            this.listOfHikes.push({peak, time, difficultyLevel});
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    };

    rest(time) {
        this.resources += Number(time) * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    };

    showRecord(criteria) {
        if (this.listOfHikes.length <= 0) {
            return `${this.username} has not done any hiking yet`
        } 
        this.listOfHikes.sort((a,b) => a.time - b.time);
        let result;
        switch (criteria) {
            case 'hard':
                this.listOfHikes.sort((a,b) => b.difficultyLevel.localeCompare(a.difficultyLevel))
                if (this.listOfHikes[0].difficultyLevel === 'hard') {
                    result = `${this.username}'s best ${criteria} hike is ${this.listOfHikes[0].peak} peak, for ${this.listOfHikes[0].time} hours`;
                } else {
                    result = `${this.username} has not done any ${criteria} hiking yet`;
                }
                break;
            case 'easy':
                this.listOfHikes.sort((a,b) => a.difficultyLevel.localeCompare(b.difficultyLevel))
                if (this.listOfHikes[0].difficultyLevel === 'easy') {
                    result = `${this.username}'s best ${criteria} hike is ${this.listOfHikes[0].peak} peak, for ${this.listOfHikes[0].time} hours`;
                } else {
                   result = `${this.username} has not done any ${criteria} hiking yet`;
                }
                break;
            case 'all':
                let buff = '';
                for (let data of this.listOfHikes) {
                    buff += `${this.username} hiked ${data.peak} for ${data.time} hours\n`
                }
                result =  `All hiking records:\n${buff}`.trim();
                break;
        }
        return result;
    }
}
