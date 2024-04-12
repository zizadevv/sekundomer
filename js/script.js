const secondArrow = document.querySelector('.s'),
      minuteArrow = document.querySelector('.m'),
      hourArrow   = document.querySelector('.h'),
      hoursBox    = document.querySelector('.hours'),
      minutesBox  = document.querySelector('.minutes');
      
      
function clock() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    
    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    setTimeout(() => clock(), 1000)
    
}

clock()


// рекурсия - Это когда функция запускает саму себя


// setTimeout(() => console.log('hello'), 2000);

// let i = 1;

// function num() {
//     if(i <= 10) {
//         console.log(i);
//         i++
//         setTimeout(() => num(), 1000)
//     }
// }

// num()


const links = document.querySelectorAll('.tabsItem')
const tabs  = document.querySelectorAll('.tabsContentItem')

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
    
})



function removeActive () {
    links.forEach((item, i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}
