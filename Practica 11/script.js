const shortButton = document.getElementById('shortButton');
const shortProgress = document.getElementById('shortProgress');
const shortLabel = document.getElementById('shortLabel');
const shortLink = document.getElementById("shortLinkInput");
const shortResult = document.getElementById("shortResult");
const shortRefresh = document.getElementById("shortRefresh");

async function shortURL(){

    // Show Progress
    shortButton.setAttribute("disabled", "disabled");
    shortProgress.className = "d-block";
    shortLabel.className = "d-none";

    // Get link to short
    let target = shortLink.value;

    const response = await fetch('https://api.rebrandly.com/v1/links',{
        headers: {
            'Content-Type': 'application/json',
            'apikey': '2bc595397831424d81f621473af19c5b'
        },
        method: 'POST',
        body: JSON.stringify({
            destination: target
        })
    });

    shortButton.removeAttribute("disabled");
    shortProgress.className = "d-none";
    shortLabel.className = "d-block";

    if(response.ok){
        // Get json response
        const result = await response.json();

        shortResult.innerHTML = result.shortUrl; // shortURL is the short link value
        shortRefresh.className = "d-block";
        return;
    }
    throw new Error('Request failed');
}

function refresh() {
    // Clean input and result
    shortLink.value = "";
    shortResult.innerHTML = "";
    shortRefresh.className = "d-none";
}