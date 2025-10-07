let day = document.getElementById('day');
let year = document.getElementById('year');
let month = document.getElementById('month');
let label = document.querySelectorAll('.justify-between label')

let days = document.querySelector('.days');
let months = document.querySelector('.months');
let years = document.querySelector('.years');
let h3 = document.querySelectorAll('.actives')

let Button = document.querySelector('.calculat-btn');

let time = new Date();
let dys = time.getDate();
let mnth = time.getMonth();
let yrs = time.getFullYear();

day.addEventListener('input', () => {
    if(day.value>31) day.value = 31;
});
month.addEventListener('input', () =>{
    if(month.value > 12) month.value = 12; 

})

year.addEventListener('input', () =>{
    if(year.value>yrs) year.value = yrs
})

Button.addEventListener('click', () =>{
    if(!day.value || !month.value || !year.value){
        label.forEach(lab => {
            lab.classList.add('active')
        })
        h3.forEach(val => {
            val.textContent = 'This field is required'

        })


    }else{
         label.forEach(lab => {
            lab.classList.remove('active')
        })
        h3.forEach(val => {
            val.textContent = ''

        })
    }

    let birtdays = new Date(year.value, month.value-1, day.value);

    let getYears = yrs - birtdays.getFullYear();
    let getMonth = mnth - birtdays.getMonth();
    let getDate = dys - birtdays.getDate();

    if(getDate<0){
        getMonth--;
        getDate += new Date(yrs, mnth, 0).getDate()
    }

    if(getMonth<0){
        getYears--;
        getMonth += 12
    }

    days.textContent = getDate;
    months.textContent = getMonth;
    years.textContent = getYears;

})








