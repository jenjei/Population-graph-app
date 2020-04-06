
function logCountryCode() {
    var countryCode = document.getElementById('country').value;
    console.log(countryCode);
}
document.getElementById('renderBtn').addEventListener('click', logCountryCode);