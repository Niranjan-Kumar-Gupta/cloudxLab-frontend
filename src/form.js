import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';


const SubmitForm = () => {


    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
   
    const notifySucess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);
  
    function getEmail(event) {
      setEmail(event.target.value)
    }
    function getName(event) {
      setName(event.target.value)
    }
    async function submitForm(e) {
        e.preventDefault()
        const user = {
            email,
            name
          };
        //  console.log(user)
      
        await axios.post(`http://localhost:5000/api/submitform`, user)
            .then( res => {
              if(res.data.status){
                  notifySucess(res.data.message)
                  //console.log(res.data.message)
              }else{   
                  //console.log(res.data.message)        
                  notifyError(res.data.message)
              }

        })
    }

  return (
    <div className='fluid'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mx-3">
                  <a className="navbar-brand" href="#">CloudxLab</a>
                </div>
            </nav>
           <div className='container py-5 my-5 mt-5  __logincontainer'>
            <form>
                <div className=' w-100 '>
                    <h2 className='text-center mb-3' >Form</h2>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email"  className="form-control" placeholder="enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getEmail} />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Name</label>
                    <input className="form-control"  type="text" placeholder="enter your name" aria-label="default input example"  onChange={getName}/>

                </div>

              
                        
                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={submitForm}>Submit</button>
                <ToastContainer position="top-center" theme='dark'/>
            </form>
          </div>
    </div>
  )
}

export default SubmitForm