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

    let someSession = 
    new Session("someSession", 
    {
        hours: 0, 
        minutes: 0, 
        seconds: 3
    })

    let nextSession = 
    new Session("nextSession", 
    {
        hours: 0, 
        minutes: 0, 
        seconds: 6
    })

    let firstTimeline = new Timeline() 
    firstTimeline.add(someSession)
    firstTimeline.add(nextSession)
    let currentSession = firstTimeline.getCurrentSession()
    currentSession.playing()

    setInterval( () => {
        
            sessionView(currentSession)
            
            if(currentSession.isRunning) currentSession.timeObject = countDown(currentSession.timeObject)
            
            if( currentSession.getRemainingTime() <= 0 ) {
                console.log(currentSession.messages.default.sessionFinished)
                currentSession.isCompleted()
                firstTimeline.nextSession()
                currentSession = firstTimeline.getCurrentSession()
                currentSession.playing()
            }

    }, 1000) 

    

    // allSessions[0].playing()
    // allSessions[0].displayMessage(allSessions[0].messages.default.sessionStarted)
    //allSessions[1].playing()

    // setInterval( () => {
    //     allSessions.forEach( (session) => {
    //         console.table({
    //             title: session.title, 
    //             time: session.timeObject, 
    //             messages: session.messages
    //         })
            
    //         if(session.isRunning) session.timeObject = countDown(session.timeObject)
            
    //         if( session.getRemainingTime() <= 0 ) {
    //             console.log(session.messages.default.sessionFinished)
    //             session.isCompleted()
    //         }
    //     } )
    // }, 1000) 
}

class controlls {
    constructor () {

    }

    events () {
        document.addEventListener('keyPressed', (e) => {
            if(e.code === "80"){
                //pause current session
            }
        })
    }
}

let initApp = () => {

}


let startTimeline = (timeline) => {
    timeline.playing()
}



init()



