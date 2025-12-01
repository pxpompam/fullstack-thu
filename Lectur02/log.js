function createLogEntry(message){
    const now = new Date();
    const timetamp = now.toLocaleTimeString('th-TH');

    const eventId = Math.random().toString(16).substring(2,10).toUpperCase();
    const logMessage = message.toUpperCase();

    return`[${timetamp}] [${eventId}] - ${logMessage} `;

}

const log = createLogEntry("USER Login successful");
console.log(log);
