import React ,{ Component} from 'react'
import './contact.css'
import $ from 'jquery'


export class Contact extends Component {
 constructor(props) {
  super(props)

  this.state = {
   name: '',
   email: '',
   subject: '',
   message: '',
   messageSent: false
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
 }

 validateEmail = () => {
   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailReg.test(this.state.email); }

  testMe = () => {
    alert(this.state.email)
  }

 handleChange = (e) => {
  let newState = {}
  newState[e.target.name] = e.target.value
  this.setState(newState)
 }


 handleSubmit = (e) => {
   e.preventDefault()

   if(this.validateEmail()){
     var data = {
     name: this.state.name,
     email: this.state.email,
     subject: this.state.subject,
     message: this.state.message
    }



    $.ajax({
      type: "POST",
      url : "https://ba8lbixyll.execute-api.us-east-1.amazonaws.com/prod",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: () => {
        // clear form and show a success message
        this.setState({
         name: '',
         email: '',
         subject: '',
         message: '',
         messageSent: true
       })

      },
      error: function () {
        // show an error message
        alert('Something went wrong. Please try again.');
      }
    });
  } else {
    alert('Please enter a valid email')
  }
 }

 render() {
  return(
    <div className="container-fluid contact-container" id="contact">
      <div className="container-fluid">
        {this.state.messageSent &&
          <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Thanks! </strong>Your message has been sent.
          </div>}
        <form className='react-form' method="post" onSubmit={this.handleSubmit}>
         <h1 id='formTitle'>Contact</h1>
         <fieldset className='form-group'>
          <label>Name:</label>
          <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
         </fieldset>

         <fieldset className='form-group'>
           <label>Email:</label>
          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
         </fieldset>

         <fieldset className='form-group'>
          <label>Subject:</label>
          <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
         </fieldset>

         <fieldset className='form-group'>
          <label>Message:</label>
          <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange} value={this.state.message}></textarea>
         </fieldset>

         <div className='form-group'>
           <button id='formButton' className='form-btn' type='submit'>Send</button>
         </div>
        </form>
      </div>

    </div>
  )
 }
}
