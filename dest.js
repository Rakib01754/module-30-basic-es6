// array and object destructuring 

const player = {
    name: 'lionel messi',
    age: 35,
    team: 'psg',
    salary: '1000m $'
}

const player2 = {
    name: 'neymar jr',
    age: 32,
    team: 'barca',
    salary: '700m $'
}

// normal way to get value from an object 


// console.log(player.team);
// or 
// const playerTeam = player.team;
// console.log(playerTeam);

// new way by desstructure 

const { team } = player2;
console.log(team);
const { name } = player;
console.log(name);
