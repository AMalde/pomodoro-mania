
//this function takes care of the counting down!

function countDown (timerObject) {

    let timeRemainingInSeconds = 
        timerObject.hours * 3600 + 
        timerObject.minutes * 60 + 
        timerObject.seconds
    
        timeRemainingInSeconds -= 1

        return {
                hours: Math.floor(timeRemainingInSeconds / 3600), 
                minutes: Math.floor(timeRemainingInSeconds % 3600 /60), 
                seconds: Math.floor(timeRemainingInSeconds % 3600 % 60)
            }
}

//multiple sessions can be create, run at the same time, and added to a timeline

let messageOne = {
    content: "you have nearly reached your goal you fucking cunt", 
    timing: 20
}

let messageTwo = {
    content: "yeah yeah, I know you´re tired, but just fucking stick with it you twat", 
    timing: 25
}

class Session {
    constructor (title, timeObject, messages) {
        this.isRunning = false; 
        this.title = title
        this.timeObject = timeObject || {}
        this.messages = messages || []
        
    }

    init() {
        this.isRunning ? this.run() : "onono"
    }

    play() {
        this.isRunning = true
    }
    stop() {
        this.isRunning = false
    }
    
    run () {
        this.timeObject = countDown(this.timeObject)
        console.table({
            title: this.title, 
            time: this.timeObject, 
            messages: this.messages[0].content
        })
    }
}



function init () {
    let allSessions = []
    allSessions.push(
        new Session("den første gang", 
        {
            hours: 2, 
            minutes: 30, 
            seconds: 45
        }, [messageOne])
    )

    allSessions.push(
        new Session("den andre gang", 
        {
            hours: 1, 
            minutes: 20, 
            seconds: 25
        })
    )

    allSessions[0].play()
    setInterval( () => {
        allSessions.forEach( session => session.init() )
    }, 1000)
}

init()




