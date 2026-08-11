const targetDate = new Date("2026-10-09T00:00:00").getTime();
const counter_days = document.querySelector("#days");
const counter_hours = document.querySelector("#hours");
const counter_min = document.querySelector("#minutes");
const counter_sec = document.querySelector("#seconds");

function updateCounter(){
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff < 0) {
        counter_days.innerText = "00";
        counter_hours.innerText = "00";
        counter_min.innerText = "00";
        counter_sec.innerText = "00";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    counter_days.innerText = String(days).padStart(2, "0");
    counter_hours.innerText = String(hours).padStart(2, "0");
    counter_min.innerText = String(minutes).padStart(2, "0");
    counter_sec.innerText = String(seconds).padStart(2, "0");
}
updateCounter()
const interval = setInterval(updateCounter, 1000);

function openView(id){
    const dialog = document.querySelector("#img-modal");
    const img = document.querySelector("#image-view");

    img.src = `imgs/frame${id}.png`;
    dialog.showModal();
}
function closeView(){
    const dialog = document.querySelector("#img-modal");
    dialog.close()
}
