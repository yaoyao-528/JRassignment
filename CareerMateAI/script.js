
// validation ? Object 存起来---
const Formvalidator = {
  rules: {
    fullname: {
      required: true,
      minLength: 2,
      message: 'Please enter your full name at least '



    }
    email: {  
      required: true,
      pattern://Regex regular pattern,
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
  validField(field) {

  }
}