updateCount()
const newPosts = document.querySelectorAll('.new')

newPosts.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.remove("new")
        updateCount()
    })
})


document.querySelector("#mark-all").addEventListener('click', () => {
    const newPosts = document.querySelectorAll('.new')
    newPosts.forEach(el => el.classList.remove("new"))
    updateCount()
})

function updateCount() {
    let notificationsCount = document.querySelectorAll('.new').length
    document.querySelector('#count').innerHTML = notificationsCount
}
