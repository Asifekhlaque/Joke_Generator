let joke= document.getElementById("joke");
async function generate() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await res.json();
    joke.innerText = data.joke;
}