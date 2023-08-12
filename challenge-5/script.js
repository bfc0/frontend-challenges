function toggleShare() {
    const inDesktopMode = window.matchMedia("(min-width:900px)").matches

    if (inDesktopMode) {
        alreadyToggledInMobileMode = document.getElementById("footer2").classList.contains("mobile")
        if (alreadyToggledInMobileMode) {
            mobileToggle()
        }
        desktopToggle()
        placeAtButtonPosition()
        return
    }
    //mobile
    alreadyToggledInDesktopMode = document.getElementById("footer2").classList.contains("popout")
    if (alreadyToggledInDesktopMode) {
        desktopToggle()
    }
    mobileToggle()
}

document.getElementById("btn_share_1").addEventListener("click", toggleShare)
document.getElementById("btn_share_2").addEventListener("click", toggleShare)

function mobileToggle() {
    document.getElementById("footer1").classList.toggle("hidden")
    document.getElementById("footer2").classList.toggle("hidden")
    document.getElementById("footer2").classList.toggle("mobile")
}

function desktopToggle() {
    document.getElementById("footer2").classList.toggle("hidden")
    // document.getElementById("btn_share_2").classList.toggle("hidden")
    document.getElementById("footer2").classList.toggle("popout")
}

function placeAtButtonPosition() {
    const btn = document.querySelector("#btn_share_1")
    const mid = (btn.getBoundingClientRect().right + btn.getBoundingClientRect().left) / 2

    const bar = document.querySelector("#footer2")
    bar.style.left = mid - 125 + 'px'
    bar.style.top = btn.getBoundingClientRect().top - 100 + 'px'
}

