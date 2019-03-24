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