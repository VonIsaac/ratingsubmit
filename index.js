//adding variable 
const mainContent = document.querySelector('.container');
const thankyouContnt = document.querySelector('.thank-you');
const ratings = document.querySelectorAll('.btn');
const mainSubmit = document.getElementById('submit-rating');
const thankyouSubmit = document.getElementById('rate-again');
const actualRating = document.getElementById('rating')

//adding funtionality

mainSubmit.addEventListener('click', function() {
    mainContent.style.display = 'none'
    thankyouContnt.classList.remove('hidden')
    
    
});

ratings.forEach((rating) => {
    rating.addEventListener('click', function() {
        actualRating.innerHTML = rating.innerHTML
    })
});

thankyouSubmit.addEventListener('click', function(){
    mainContent.style.display = 'block'
    thankyouContnt.classList.add('hidden')
});

