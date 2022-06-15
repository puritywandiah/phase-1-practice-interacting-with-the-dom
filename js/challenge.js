document.addEventListener("DOMContentLoaded", ()=> {
    handelCounter()
})
const counter = document.querySelector("#counter")
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const likeBtn = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const likesComment = document.querySelector(".likes")
const form = document.querySelector("#comment-form")
let count = 0;
// COUNTER??????
function handelCounter(){
 setInterval(() => letsCount(), 1000)
}
let isPaused = false;

function letsCount(){
    if (isPaused === false){
        count++
        counter.innerHTML = count
    }
    else{counter.innerHTML = count}
}

pauseBtn.addEventListener('click', ()=> {
    if (isPaused === false){
        plusBtn.disabled = true
        minusBtn.disabled = true
        likeBtn.disabled = true
        isPaused = true;
    }
    else{
        plusBtn.disabled = false
        minusBtn.disabled = false
        likeBtn.disabled = false
        isPaused = false;
    }
})

plusBtn.addEventListener( 'click', () =>{
    let num = counter.innerHTML
    num ++;
    counter.innerHTML = num;;
})

minusBtn.addEventListener( 'click', () =>{
    let num = counter.innerHTML
    num --;
    counter.innerHTML = num;;
})
const arrayOfLikes =[]
likeBtn.addEventListener('click', () => {
    let num = counter.innerHTML
    arrayOfLikes.push(num)
    accumulateLikes(arrayOfLikes, num)
})

function accumulateLikes(arrayOfLikes, num){
    let newArr = arrayOfLikes.filter(nums => nums == num)
    let numOfLikes = newArr.length

    let allLi = document.querySelectorAll('li')

    if (newArr.length === 1) {
        let li = document.createElement('li')
        li.id = num
        li.innerHTML = `${num} has been liked ${numOfLikes} time`
        likesComment.appendChild(li) 

    } else if (newArr.length > 1){
        let li = Array.from(allLi).find(li => li.id == num)
        li.innerHTML = `${num} has been liked ${numOfLikes} times`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildCommentList(e.target['comment'].value)
    form.reset()
})
function buildCommentList(comment){
    let p = document.createElement('p');
    p.textContent = `${comment}`
    document.getElementById('list').appendChild(p)
} 