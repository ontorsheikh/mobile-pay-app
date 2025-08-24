// log in button functionality
document.getElementById("loginButton").addEventListener('click',function(event){
    event.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert("ভাই একটা পাসওয়ার্ড মনে রাখতে পারো না?বেশি করে লাড্ডু খাও")
    }


})