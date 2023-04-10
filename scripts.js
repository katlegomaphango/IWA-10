const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)

let copied = Object.create(holidays[christmas]) // copied = holidays.christmas
copied.name = 'X-mas Day'    //copied = { name: 'X-mas Day' }

let correctDate = new Date(copied.date)
correctDate.setHours(0)
correctDate.setMinutes(0)

isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier) {
    copied.date = new Date(correctDate)
}

console.log('ID change:', holidays[christmas].id === copied.id ? false : copied.id)
console.log('Name change:', holidays[christmas].name === copied.name ? false : copied.name)
console.log('Date change:', holidays[christmas].date === copied.date ? false : `${copied.date.getDate()}/${copied.date.getMonth()+1}/${copied.date.getFullYear()}`)

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth()+1
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()+1

console.log(new Date(`${firstMonth}/${firstDay}/${currentYear}`).toLocaleDateString())
console.log(new Date(`${lastMonth}/${lastDay}/${currentYear}`).toLocaleDateString())

const randomIndex = Math.floor(Math.random() * 9);
const randomHoliday = holidays[randomIndex]
console.log(randomHoliday.date.toLocaleDateString())