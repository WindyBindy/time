const hourElement = document.getElementById('hourJs')
const minuteElement = document.getElementById('minuteJs')
const secondElement = document.getElementById('secondJs')
const periodElement = document.getElementById('periodJs')
const dayElement = document.getElementById('dayJs')
const monthElement = document.getElementById('monthJs')
const yearElement = document.getElementById('yearJs')

function updateClock() {
	let time = new Date()
	let date = time.toDateString()
	let timed = time.toLocaleTimeString()
	let hours = timed.slice(0, 2)
	let minuts = timed.slice(3, 5)
	let seconds = timed.slice(6, 8)
	let dayWeek = date.slice(0, 3)
	let month = date.slice(4, 7)
	let day = date.slice(8, 10)
	let year = date.slice(11, 15)
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
