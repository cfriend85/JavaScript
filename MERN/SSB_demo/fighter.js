class Fighter{
    constructor(fighterName, playerNum, percentage=0){
        this.name = fighterName;
        this.playerNum = playerNum;
        this.percentage = percentage;
    }

    attack(otherPlayer){
        if(otherPlayer instanceof Fighter){
        otherPlayer.percentage += 20;
        }
        else
        console.log("Uh uh uh, you didn't say the magic word!")
    }
}

let mewtwo = new Fighter("Mewtwo", 1)
let ness = new Fighter("Ness", 2)

mewtwo.attack(ness)

console.log(mewtwo);
console.log(ness)