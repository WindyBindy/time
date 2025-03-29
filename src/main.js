const hourElement = document.getElementById('hourJs')
const minuteElement = document.getElementById('minuteJs')
const secondElement = document.getElementById('secondJs')
const periodElement = document.getElementById('periodJs')
const dayElement = document.getElementById('dayJs')
const monthElement = document.getElementById('monthJs')
const yearElement = document.getElementById('yearJs')
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
function updateClock() {
	let time = new Date()
	let date = time.toDateString()
	let timed = time.toLocaleTimeString()
	let hours = time.getHours()
	let minuts = time.getMinutes()
	let seconds = time.getSeconds()
	let dayWeek = date.slice(0, 3)
	let month = months[time.getMonth()]
	let day = time.getDate()
	let year = time.getFullYear()

	let period = null
	if (hours < 12) {
		period = 'AM'
	} else {
		period = 'PM'
	}
	console.log('period: ' + period)
	console.log('hours: ' + hours)
	console.log('minuts: ' + minuts)
	console.log('seconds: ' + seconds)
	console.log('day of week: ' + dayWeek)
	console.log('month: ' + month)
	console.log('day of month: ' + day)
	console.log('year: ' + year)
	console.log(date)
	hourElement.textContent = hours
	minuteElement.textContent = minuts
	secondElement.textContent = seconds
	periodElement.textContent = '"' + period + '"'
	dayElement.textContent = day
	monthElement.textContent = '"' + month + '"'
	yearElement.textContent = year
}
setInterval(updateClock, 1000) // Run the function every second
updateClock()
