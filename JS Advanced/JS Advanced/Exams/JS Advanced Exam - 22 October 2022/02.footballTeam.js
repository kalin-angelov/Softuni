class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions (footballPlayers) {

        let result = [];
        for (let players of footballPlayers) {
            let [name, age, playerValue] = players.split("/");

            if (this.invitedPlayers.length === 0) {
                this.invitedPlayers.push({name, age, playerValue});
                if (!result.includes(name)) {
                    result.push(name);
                };
            } else {
                for (let player of this.invitedPlayers) {
                    if (player.name === name) {
                        if (player.playerValue < playerValue) {
                            player.playerValue = playerValue;
                        };
                    } else if (player.name !== name && !result.includes(name)) {
                        this.invitedPlayers.push({name, age, playerValue});
                        if (!result.includes(name)) {
                            result.push(name);
                        };
                    };
                };
            };
        };
        return `You successfully invite ${result.join(", ")}.`

    }

    signContract (selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split("/");
        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                if (player.playerValue < Number(playerOffer)) {
                    player.playerValue = "Bought";
                    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
                } else {
                    let diff = player.playerValue - Number(playerOffer);
                    throw Error (`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`);
                };
            };
        };
        throw Error (`${name} is not invited to the selection list!`);

    }

    ageLimit (name, age) {

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                if (player.age < age) {
                    let diff = age - player.age;
                    if (diff < 5) {
                        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
                    } else {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                    }
                } else if (player.age >= age) {
                    return `${name} is above age limit!`;
                };
            };
        };
        throw Error (`${name} is not invited to the selection list!`);

    }

    transferWindowResult () {

        let buff = `Players list:\n`;
        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        for (let player of this.invitedPlayers) {
            buff += `Player ${player.name}-${player.playerValue}\n`;
        };
        return buff.trim();

    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
