let countDown = (timerObject) => {

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

let clock = (callback) => {
    setInterval( () => {
        callback()
    }, 1000)
}
