
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







//validation ? Object 存起来---
//思考一下搞什么样的validation, 先用object 存起来
const Formvalidator = {
  rules: {
    fullname: {
      required: true,
      minLength: 2,
      message: 'Please enter your full name at least '
    },
    email: {  
      required: true,
      pattern:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/, //Regex regular pattern,
      message: 'please enter a valid email address'
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Message must be at lease 10 characters long'
    },
    terms: {
      required: true,
      message: 'You must agree to the terms of service'
    }

  },

  validateField(field) {
        const fieldName = field.name;
        const fieldvalue = field.type === 'checkbox' ? field.checked: field.value.trim()
        const rule = this.rules[fieldName]
        
        if (! rule) return true;
        if(rule.required) {
            if (field.type === 'checkbox' && !fieldvalue) {
                  console.log('error')
                  this.showError(field, rule.message)
                  return false
              }
              if (field.type !== 'checkbox' && !fieldvalue) {
                  console.log('this is another error')
                  this.showError(field, rule.message)
                  return false
              }        
        }
  },

  showError(field, message) {
      const formGroup = field.closest ('.form-group') || field.closest('.form-checkbox')

      formGroup.classList.remove('success')
      formGroup.classList.add('error')

      const existingError = formGroup.querySelector('.error -message')
      if(existingError){
        existingError.remove()
      }

      const errorDiv = document.createElement('div')
      errorDiv.className = 'error-message'
      errorDiv.innerHTML = `<span>◮</span>${message}`

      if (field.type ==='checkbox') {
        formGroup.appendChild(errorDiv);
      } else {
        field.parentNode.appendChild(errorDiv);
      }

  }
}
const contactForm = document.querySelector('.contact-form')
if (contactForm) {
  const validateField = contactForm.querySelectorAll('[name="fullname"], [name="email"],[name="message"],[name="terms"]')
  //遍历
  validateField.forEach(field =>{
      field.addEventListener('blur', function(){
          Formvalidator.validateField(this);

      })
  })
}