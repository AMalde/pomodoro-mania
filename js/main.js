
class Session {
    constructor (title, timeObject) {
        this.timeObject = timeObject || {}
        this.messages = {}
        this.title = title
    }

    run () {
        console.table({
            title: this.title, 
            time: this.timeObject
        })
    }
}



function init () {
    let allSessions = []
    allSessions.push(
        new Session("den første gang", {hours: 2, minutes: 30, seconds: 45})
    )
    setInterval( () => {
        allSessions.forEach( session => session.run() )
    }, 1000)
    
    countDown (allSessions[0].timeObject)
}

init()


function countDown (timerObject) {

    let timeRemainingInSeconds = 
        timerObject.hours * 3600 + 
        timerObject.minutes * 60 + 
        timerObject.seconds
    
    setInterval( () => {
        timeRemainingInSeconds -= 1

        console.table(
            {
                hour: Math.floor(timeRemainingInSeconds / 3600), 
                minute: Math.floor(timeRemainingInSeconds % 3600 /60), 
                second: Math.floor(timeRemainingInSeconds % 3600 % 60)
            }
        )
    }, 1000)
}

