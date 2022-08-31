let jonSnowHealth = 100

// let strHealth= String(jonSnowHealth)
// jonSnowHealth = jonSnowHealth + ''

// jonSnowHealth = Boolean(jonSnowHealth)
// jonSnowHealth = Number(jonSnowHealth)
// console.log(jonSnowHealth)

// let myWinner = 'Jon is the winner' 
// myWinner = myWinner.replace('Jon', 'Danny')

// if(myWinner.includes('Danny')){
//     console.log(myWinner)
// }

// let mySplitStr = myWinner.split(" ") 
// console.log(mySplitStr)
// let myAlmostKebabStr = mySplitStr.join('=')
// console.log(myAlmostKebabStr)
// let myKebabStr = myAlmostKebabStr.toLowerCase()
// console.log(myKebabStr)

// const myKebabCaseStr = myWinner.split(" ").join("=").toLowerCase
// console.log({ myKebabStr })

const isJonAlive = () => {
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('Jon is not alive!')
    }
}

isJonAlive()

function attackJon(damage){
    jonSnowHealth -= damage
    isJonAlive()
}

attackJon(30)
attackJon(30)
attackJon(39)
attackJon(20)
console.log(jonSnowHealth)
