

let counter = 0
let counterDisplay = document.getElementById('counter')

function count(){
    counter++
    counterDisplay.innerText=counter
}

let intervalID

let plusButton = document.getElementById('plus')
plusButton.addEventListener('click', function(){
    counter++
    counterDisplay.innerText=counter
} )

let minusButton = document.getElementById('minus')

minusButton.addEventListener('click', function(){
    counter--
    counterDisplay.innerText=counter
})

let likeButton=document.getElementById('heart')
likeButton.addEventListener('click', function(){
    let number=counter
    let likedNumbers=document.querySelector('.likes')
    let listNumber=document.createElement('li')
    listNumber.innerText=(`You liked ${number}!`)
    likedNumbers.appendChild(listNumber)
})

let pauseButton=document.getElementById('pause')
pauseButton.addEventListener('click', function() {
    if(pauseButton.innerText=='pause'){
    counterManager('stop',count,1000)
    pauseButton.innerText='resume'
    minusButton.disabled=true
    plusButton.disabled=true
    likeButton.disabled=true
    submitButton.disabled=true
    } else {
        pauseButton.innerText='pause'
        minusButton.disabled=false
        plusButton.disabled=false
        likeButton.disabled=false
        submitButton.disabled=false
        counterManager('start',count,1000)

    }
})
function counterManager(action,work,time){
    if (action=="start"){
        intervalID=window.setInterval(count,1000)
    } else{
        window.clearInterval(intervalID)
    }

    
}
let submitButton=document.getElementById("submit")
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    let input=document.getElementById("comment-input").value
    let comment=document.createElement('p')
    comment.innerText= input
    let list=document.getElementById('list')
    list.appendChild(comment)
})

document.addEventListener("DOMContentLoaded", counterManager('start',count,1000) )
