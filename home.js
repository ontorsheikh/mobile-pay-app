document.getElementById("add-money-btn").addEventListener('click',function(event){
event.preventDefault()

const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("account-number").value

const amount = parseInt(document.getElementById("add-amount").value)

const pin = parseInt(document.getElementById("add-pin").value)
const validPin = 1234

const availableBalance = parseInt(document.getElementById("available-balance").innerText)

if(accountNumber.length <11){
    alert("please provide valid account number")
    return;
}

if(pin !== validPin){
    alert("please provide valid pin number")
    return;
}


// amount add
const totalAvailableBalance = amount+availableBalance

document.getElementById("available-balance").innerText = totalAvailableBalance


})

// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})