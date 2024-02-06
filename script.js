var ol = document.getElementById("ol")
var spinner = document.getElementById("spinner");
function call() {
    ol.innerHTML = ""
    spinner.style.display = "block";
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + document.getElementById('limit').value,
        headers: { 'X-Api-Key': 'riR9DMoQvnATcgvDVhDR1w==TncFakzS3skNOByH' },
        contentType: 'application/json',
        success: function (result) {
            spinner.style.display = "none"
            ol.innerHTML = ""
            for (i = 0; i < result.length; i++) {
                var li = document.createElement("li")
                var fact = document.createTextNode(`${result[i].fact}`)
                li.appendChild(fact)
                ol.appendChild(li)
            }
        },
        error: function ajaxError(jqXHR) {
            spinner.style.display = "none"
            console.error('Error: ', jqXHR.responseText);
            ol.innerHTML = "Error Fetching Data ..."
        }
    });
}