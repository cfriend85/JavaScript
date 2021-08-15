class Fighter{
    constructor(fighterName, playerNum, percentage=0){
        this.name = fighterName;
        this.playerNum = playerNum;
        this.percentage = percentage;
        this.isShielding = false;
    }

    attack(otherPlayer){
        this.isShielding = false;
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${otherPlayer.name} blocked ${this.name}'s attack!`)
                otherPlayer.isShielding = false;
            }
            else {
                const damage = 10;
                console.log(`${this.name} attacked ${otherPlayer.name} and dealt ${damage}% damage!`)
                otherPlayer.percentage += damage;
                otherPlayer.isKilled()
            }
        }
        else
        console.log("Uh uh uh, you didn't say the magic word!")
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${otherPlayer.name} blocked ${this.name}'s special!`)
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 25;
                console.log(`${this.name} performed a special on ${otherPlayer.name} and dealt ${damage}% damage!`)
                otherPlayer.percentage += damage;
                otherPlayer.isKilled()
            }
        }
        else
        console.log("Uh uh uh, you didn't say the magic word!")
    }

    shield(){
        this.isShielding = true
    }

    isKilled(otherPlayer){
        if(this.percentage > 99){
            console.log(`${this.name} has been killed!`)
            this.percentage = 0;
            this.isShielding = false;
        }
    }
}

class Link extends Fighter{
    constructor(playerNum){
        super("Link", playerNum);
        this.bombOut = false;
    }

    special(otherPlayer){
        if(this.bombOut){
            this.bombOut = false;

            if(Math.floor(Math.random() * 2) === 0){
                console.log(`${this.name} threw a bomb at ${otherPlayer.name} but it missed!`)
            }
            else{
                const damage = 50;
                console.log(`${this.name} threw a bomb at ${otherPlayer.name} and dealt ${damage} damage!`)
                otherPlayer.percentage += damage;
                otherPlayer.isKilled()
            }
        }
        else{
            this.bombOut = true;
            console.log(`${this.name} is ready to throw thier bomb!`)
        }
    }
}

class Pikachu extends Fighter{
    constructor(playerNum){
        super("Pikachu", playerNum);
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${otherPlayer.name} blocked ${this.name}'s special!`)
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 15;
                console.log(`${this.name} shoots lightning at ${otherPlayer.name} and deals ${damage}% damage!`)
                otherPlayer.isKilled()
                otherPlayer.percentage += damage;
                console.log(`${this.name} shoots lightning AGAIN at ${otherPlayer.name} and deals ${damage}% damage AGAIN!!`)
                otherPlayer.isKilled()
                otherPlayer.percentage += damage;
            }
        }
        else
        console.log("Uh uh uh, you didn't say the magic word!")
    }
}



let link = new Link(1);
let pika = new Pikachu(2);
let redlink = new Link(3);
redlink.attack(link);
link.special(redlink);
link.special(redlink);
link.special(redlink);
pika.special(link)
link.special(pika)
link.special(pika)
console.log(pika)
console.log(link)