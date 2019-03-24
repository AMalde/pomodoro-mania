class Session {
    constructor (title, timeObject, userMessages) {
        this.isRunning = false; 
        this.title = title
        this.timeObject = timeObject || {}
        this.messages = {
            madeByUser: userMessages, 
            default: {
                sessionFinished: "The session is completed", 
                sessionStarted: "The session is under way"
            }
        } || []  
    }
    playing() {
        this.isRunning = true
    }
    stopping() {
        this.isRunning = false
    }
    isCompleted () {
        this.stopping()
    }
    displayMessage (message) {
        console.log(message)
    }
    getRemainingTime () {
        return this.timeObject.hours * 3600 + this.timeObject.minutes * 60 + this.timeObject.seconds
    }
}