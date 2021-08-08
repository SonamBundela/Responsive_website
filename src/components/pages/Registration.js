import React,{useState} from 'react';
import '../../App.css';


const Registration = () => {

  const [user, setuser] = useState({
    fullname: "",
    mobile:"",
    email: "",
    message:""
   
   });

   const [records ,setRecords] = useState([]);

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setuser({...user,[name] : value,
      })
  }
  const formSubmit = (e)=>{
    e.preventDefault();
    

    const newRecord ={...user, id:new Date().getTime().toString()}
    console.log(records);
    setRecords([...records,newRecord]);
    console.log(records);

    setuser({ fullname: "",mobile:"",email: "",password:"",message:""})
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Registration Form</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleInputName"
                name="fullname"
                 value={user.fullname}
                 onChange={handleInput}
                placeholder="Enter Your Name" aria-describedby="nameHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputMobile" class="form-label">Mobile No.</label>
                <input type="number" class="form-control" id="exampleInputmobile"
                name="mobile"
                value={user.mobile}
                onChange={handleInput}
                placeholder="Enter Your Mobile No." aria-describedby="mobileHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" 
                 name="email"
                 value={user.email}
                 onChange={handleInput}
                placeholder="Enter Your Email ID." aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                 </div>
                 <div class="mb-3">
                    <label for="exampleInputMsg" class="form-label">Message</label>
                     <textarea  class="form-control" id="exampleInputmsg" rows="3"
                      name="message"
                      value={user.message}
                      onChange={handleInput}
                      placeholder="Your Message" aria-describedby="msgHelp"/>
                 </div>
                  
                    <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
           </div>
         </div>
         </div>
    </>
  );
}
export default Registration