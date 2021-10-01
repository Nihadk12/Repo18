const rockStar = new Map ();

rockStar.set("artist","The Rolling Stones");
rockStar.set("song","Angie");
rockStar.set("album","Goats Head Soup");
rockStar.set("singer","Mick Jagger");

var newRock = new Map();

    for(const [key,value] of rockStar.entries()) {
        if(key[0] > "a") {
            newRock.set(key,value);
        }else {
        }
    }
console.log(newRock);


module.exports = {rockStar,newRock};