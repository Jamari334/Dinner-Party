const message = prompt('Choose your flavor!!!');

console.log(message);
const messageArray = message.split(",");
console.log (messageArray);

const flavors = [];
for (const sameOf of message){
    if(!flavors [ sameOf]) { 
        flavors[sameOf] = [sameOf];
    }
    else{
        flavors [sameOf].push(sameOf);
    }
}

console.log(flavors);