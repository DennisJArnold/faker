const faker = require('faker');
const queries = require('./queries.js');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


// inputs (user < {{ name, email, title, aboutMe, location, linkedinUrl }, cb (err, results) => {})
// for(let i = 0; i < 100; i++) {
//     let user = {};
//     user.name = faker.name.findName();
//     user.email = faker.internet.email();
//     user.title = faker.name.jobTitle();
//     user.aboutMe = faker.name.jobDescriptor();
//     user.location = faker.address.streetAddress();
//     user.linkedinUrl = faker.internet.url();
//     queries.insertUser(user, (err, results) => {
//         if (err) console.log(err);
//         else console.log('user made');
//     })
// }
// // name, location, date, hostId, meetingUrl, summary, max

// function randomDate(date1, date2){
//     function randomValueBetween(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     var date1 = date1 || '01-01-1970'
//     var date2 = date2 || new Date().toLocaleDateString()
//     date1 = new Date(date1).getTime()
//     date2 = new Date(date2).getTime()
//     if( date1>date2){
//         return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
//     } else{
//         return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

//     }
// }
// for (let i = 0; i < 50; i++) {
//     let event = {};
//     event.name = faker.company.companyName();
//     event.location = faker.address.streetAddress();
//     event.date = randomDate('04/2/2021', '12/31/2025');
//     event.hostId = faker.datatype.number(85);
//     event.meetingUrl = faker.internet.url();
//     event.summary = faker.lorem.words(15);
//     event.max = faker.datatype.number(100);
//     queries.insertEvent(event, (err, results) => {
//         if (err) console.log(err);
//         else console.log('event made');
//     })
// }


for(let i = 0; i < 250; i++) {
    queries.makeUserAnAttendee(faker.datatype.number(95), faker.datatype.number(53) + 47, (err, results) => {
        if (err) console.log(err);
        else console.log('attendee made');
    })
}

// inputs (eventId <number>, questions <[{text: "question text here?", answers: [{text: "answer text here.", correct: true/false }, {}] }]>, cb (err, results) =>{})
for (let i = 1; i < 6; i++) {
    let eventId = faker.datatype.number(53) + 47;
    let questions = [
        {
            text: `Heres a question for event #${eventId} question #${i}A`,
            answers: [
                {
                    text: `Here is a correct answer for question #${i}A`,
                    correct: true
                },
                {
                    text: `Here is an incorrect answer for question #${i}A`,
                    correct: false
                }
            ]
        },
        {
            text: `Heres a question for event #${eventId} question #${i}B`,
            answers: [
                {
                    text: `Here is a correct answer for question #${i}B`,
                    correct: true
                },
                {
                    text: `Here is an incorrect answer for question #${i}B`,
                    correct: false
                }
            ]
        },
        {
            text: `Heres a question for event #${eventId} question #${i}C`,
            answers: [
                {
                    text: `Here is a correct answer for question #${i}C`,
                    correct: true
                },
                {
                    text: `Here is an incorrect answer for question #${i}C`,
                    correct: false
                }
            ]
        }

    ]
    queries.insertAssessment(eventId, questions, (err, results) => {
        console.log(err);
    } )
}
