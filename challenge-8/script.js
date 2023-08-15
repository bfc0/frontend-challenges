(async () => {
    const data = await (await fetch("./data.json")).json()
    const container = document.querySelector("#bars")
    const today = new Date().getDay()

    //looking for a max amount in data, that will be the highest bar
    let maxValue = 0
    data.forEach(item => {
        console.log(item)
        maxValue = Math.max(item.amount, maxValue)
    });

    data.map((item) => {
        const div = document.createElement("div")
        const bar = document.createElement("div")
        const day = document.createElement("div")
        const info = document.createElement("div")
        const p = document.createElement("p")

        day.innerHTML = item.day
        p.innerHTML = "$" + item.amount
        info.appendChild(p)

        bar.classList.add("bar")
        info.classList.add("info")
        div.classList.add("bar_container")

        const percentage = item.amount / maxValue
        bar.style.height = percentage * 10 + 'em'


        day.classList.add("day")

        console.log(daysOfWeek[item.day])
        if (today === daysOfWeek[item.day]) {
            bar.classList.add("today")
        }

        div.appendChild(bar)
        div.appendChild(day)
        div.appendChild(info)
        container.appendChild(div)
    })

})()

const daysOfWeek = {
    "mon": 1,
    "tue": 2,
    "wed": 3,
    "thu": 4,
    "fri": 5,
    "sat": 6,
    "sun": 7,
}