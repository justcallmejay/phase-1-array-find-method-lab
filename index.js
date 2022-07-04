const record = [

    { 
        year: "2015", 
        result: "W"
    },
    { 
        year: "2014", 
        result: "N/A"
    },
    { 
        year: "2013", 
        result: "L"
    },
  ]
// function superbowlWin(array) {
//     array === "W"
//     return array.year
// }

const yearNon = record.find(superBowlNone)

function superbowlWin(game){
    for (const item of game)
    if (item.result === "W"){
    return item.year
    }
}

function superBowlNone(game){
    if (game.result === "N/A")
    return undefined
}

