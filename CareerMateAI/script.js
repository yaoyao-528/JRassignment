
console.log('CareerMate AI landing Page loaded successfully !')

const backToButton = document.querySelector('.back-to-top')
console.log(backToButton, 'This is button')
console.log(backToButton.id, 'this is id' )
console.log(backToButton.classList, 'this is clisslist' ) //DOMlist


if(backToButton) {
  window.addEventListener('scroll', (event) =>{
      if (window.scrollY > 300) {
        backToButton.classList.add('show')
      } else {
        backToButton.classList.remove('show')
      }


  })
  backToButton.addEventListener('click', ()=> {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
}

// validation ? Object 存起来---
// const Formvalidator = {
//   rules: {
//     fullname: {
//       required: true,
//       minLength: 2,
//       message: 'Please enter your full name at least '



//     }
//     email: {  
//       required: true,
//       pattern://Regex regular pattern,
//       message: 'please enter a valid email address'


//     },
//     message: {
//       required: true,
//       minLength: 10,
//       message: 'Message must be at lease 10 characters long'
//     },
//     terms: {
//       required: true,
//       message: 'You must agree to the terms of service'
//     }

//   },
//   validField(field) {

//   }
// }