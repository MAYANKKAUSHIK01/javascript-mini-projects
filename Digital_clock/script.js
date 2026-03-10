function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours.toString().padStart(2,'0');
    minutes = minutes.toString().padStart(2,'0');
    seconds = seconds.toString().padStart(2,'0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("clock").textContent = timeString;

    const options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };

    const dateString = now.toLocaleDateString(undefined,options);

    document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock,1000);