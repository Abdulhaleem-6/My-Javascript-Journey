const form = document.querySelector('#signup-form');
const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


// form.addEventListener('submit', function(e){
//     // alert('SUBMITTED THE FORM!');
//     console.log('cc', creditCard.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggieSelect', veggieSelect.value);
//     e.preventDefault();
// });

const formData = {};

for(let input of [creditCard, termsCheckbox, veggieSelect]){
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}

// creditCard.addEventListener('input', (e) => {
//     console.log('cc changed', e);
//     formData['cc'] = e.target.value;
// } )

// veggieSelect.addEventListener('input', (e) => {
//     console.log('veggie changed', e);
//     formData['veggie'] = e.target.value;
// } )

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('checkbox', e);
//     formData['agreeToTerms'] = e.target.checked; 
// })