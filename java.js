async function translateText() {

    let text = document.getElementById("inputText").value;
    let language = document.getElementById("language").value;

    const endpoint = "https://api.cognitive.microsofttranslator.com/";
    const key = "";
    const location = "centralindia";

    let url = `${endpoint}/translate?api-version=3.0&to=${language}`;

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Ocp-Apim-Subscription-Region": location,
            "Content-Type": "application/json"
        },
        body: JSON.stringify([{ Text: text }])
    });

    let data = await response.json();

    document.getElementById("output").innerText =
        data[0].translations[0].text;
}