class Timeline {
    constructor (allSessions) {
        this.isRunning = false
        this.currentSession = 0
        this.allSessions =  allSessions || []
    }
    add (session) {
        this.allSessions.push(session)
    }
    remove () {
    }

    getTotalRunningTime () {
        let totalRunningTime = 0
        this.allSessions.forEach( (session) => {
            let seconds = 
                session.timeObject.hours * 3600 + 
                session.timeObject.minutes * 60 + 
                session.timeObject.seconds

            totalRunningTime += seconds

        }) 
        console.log( parseSeconds(totalRunningTime))    
    }
    getCurrentSession() {
        return this.allSessions[this.currentSession]
    }
    nextSession () {
        this.currentSession++
    }
    previousSession () {
        this.currentSession--
    }
    playing () {
        this.isRunning = true
        this.allSessions[this.currentSession].playing()
    }
}

class TimelineController {
    constructor () {

    }

    
}