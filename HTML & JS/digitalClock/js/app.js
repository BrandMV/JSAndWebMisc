const showClock = () => {
    let currentDate = new Date()
    let hrs = hourFormat(currentDate.getHours())
    let min = hourFormat(currentDate.getMinutes())
    let seg = hourFormat(currentDate.getSeconds())
    document.getElementById('hour').innerHTML = `${hrs}:${min}:${seg}`

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    let wekkDay = days[currentDate.getDay()]
    let day = currentDate.getDate()
    let month = months[currentDate.getMonth()]
    let year = currentDate.getFullYear()
    let completeDate = `${wekkDay}, ${day} of ${month} ${year}`
    document.getElementById('date').innerHTML = completeDate

    document.getElementById('container').classList.toggle('animate') //works like a switch gracias a toggle
}

const hourFormat = (time) => {
    if(time < 10 )
        time += '0'
    return time
}

setInterval(showClock, 1000)