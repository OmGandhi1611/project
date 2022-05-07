import React from "react";
import './Signup.css';
const Signup = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    window.location = "/maps";
    e.target.submit()
  }
  return(
  <div className="abcd">
    <form name="registration" method="post">
      <script src="SignUp.js" type="text/javascript"></script>
        <div className="container" >
          <h1 className="wrapper">Fill Up Details</h1>
          <hr />
          <label htmlFor="First_Name"><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="First_Name" />
          <label htmlFor="ContactID"><b>Contact Number</b></label>
          <input type="tel" id="phone" name="Phone" placeholder="Enter Contact Number"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
          <label htmlFor="Email_ID"><b>Email Id</b></label>
          <input type="email" placeholder="Enter email-ID" name="Email_ID"/>
          <br /><br />
          <label htmlFor="Pick_up_Address"><b>Pick Up Address</b></label>
          <br />
          <textarea name="Pick" id="textarea" cols="30" rows="10"></textarea>
            <br /><br />
            <label htmlFor="Delivery_Address"><b>Delivery Address</b></label>
          <br />
          <textarea name="Delivery" id="textarea" cols="30" rows="10"></textarea>
          <br /><br />
          <label htmlFor="LuggageID"><b>Order ID</b></label>
          <input type="tel" id="phone" name="luggage" placeholder="Enter Order ID"/>
          Order ID Provided By Your desired Website
          <br/><br/> 
          <label htmlFor="Receiver_Name"><b>Receiver Name</b></label>
          <input type="text" placeholder="Enter Receiver Name" name="Receiver_Name"/>
          <br/><br/>
            <label htmlFor="Contact_ID"><b>Receiver's Contact Number</b></label>
            <input type="tel" id="phone" name="Receiver_phone" placeholder="Enter Receiver's Contact"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
              <br/><br/>
            <input type="checkbox" defaultChecked name="remember"/>Remember me
          <br/><br/>
          <p>By creating an account you agree to our <a href="terms.html" className="sign">Terms and conditions apply</a>.</p>
      
          <div className="clearfix">
            <button type="button" className="cancelbtn">Reset</button>
            <button type="submit" onClick={(e) => submitHandler(e)} className="signupbtn">Submit</button>
          </div>
        </div>
      </form>
  </div>
  )
};

export default Signup;