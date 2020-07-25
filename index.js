async function callNumberAPI() {
    const NUM = document.getElementById("input-num").value;
    const URL = 'https://numbers-api.vercel.app/' + NUM;
    let promise = await fetch(URL);
    let result = await promise.text();
    alert(result);
}