let countDown = (timerObject) => {

    let timeRemainingInSeconds = 
        timerObject.hours * 3600 + 
        timerObject.minutes * 60 + 
        timerObject.seconds
    
        timeRemainingInSeconds -= 1

        return parseSeconds(timeRemainingInSeconds)
}

let parseSeconds = (seconds) => {
    return {
        hours: Math.floor(seconds / 3600), 
        minutes: Math.floor(seconds % 3600 /60), 
        seconds: Math.floor(seconds % 3600 % 60)
    }
}

let clock = (callback) => {
    setInterval( () => {
        callback()
    }, 1000)
}

let sessionView = (session) => {
    console.table({
        title: session.title, 
        time: session.timeObject, 
        messages: session.messages
    })
}

