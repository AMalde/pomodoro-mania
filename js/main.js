let allSessions = []


//this function takes care of the counting down!



//multiple sessions can be create, run at the same time, and added to a timeline

let messageOne = {
    content: "you have nearly reached your goal you fucking cunt", 
    timing: 20
}

let messageTwo = {
    content: "yeah yeah, I know you´re tired, but just fucking stick with it you twat", 
    timing: 25
}

function init () {
    allSessions.push(
        new Session("den første gang", 
        {
            hours: 0, 
            minutes: 0, 
            seconds: 5
        }, [messageOne])
    )

    allSessions.push(
        new Session("den andre gang", 
        {
            hours: 0, 
            minutes: 0, 
            seconds: 30
        })
    )

    allSessions[0].playing()
    allSessions[0].displayMessage(allSessions[0].messages.default.sessionStarted)
    //allSessions[1].playing()

    setInterval( () => {
        allSessions.forEach( session => {
            console.table({
                title: session.title, 
                time: session.timeObject, 
                messages: session.messages
            })
            
            if(session.isRunning) session.timeObject = countDown(session.timeObject)
            
            if( session.getRemainingTime() <= 0 ) {
                console.log(session.messages.default.sessionFinished)
                session.isCompleted()
            }
        } )
    }, 1000) 
}


class Timeline {
    constructor (allSessions) {
        this.isRunning = false
        this.allSessions =  allSessions || []
    }
    add (session) {
        this.allSessions.push(session)
    }
    remove () {

    }
    playing () {
        this.isRunning = true
    }
}

let startTimeline = () => {

}

init()



