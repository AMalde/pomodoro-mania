
class Session {
    constructor (title) {
        this.time = {}
        this.title = title
    }

    run () {
        console.table({
            title: this.title, 
            time: this.time
        })
    }
}

function init () {
    let firstSession = new Session("den første gang")
    firstSession.run()
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

countDown ({
    hours: 1, 
    minutes: 0, 
    seconds: 2
})