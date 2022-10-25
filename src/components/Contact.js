import React from 'react'

function Contact() {
  return (
    <> <section id="contact" className='dark'>
    <div className="container px-4">
        <div className="row gx-4 justify-content-center" >
            <div className="col-lg-8">
                <h2>contect</h2>
                <div className="col-lg-8">
               <label>Username</label>
               <input type="text" className='container fluid '/><br/>
               <label>Email</label>
               <input type="text"  className='container fluid '/><br/>
               <label>Phone</label>
               <input type="text"  className='container fluid '/><br/>
</div>
            </div>
            <div className='col-lg-4'>
            <label>name</label>
               <span>mohammd kalasha</span>
               <label>Email</label>
               <span>mohammedkalasha52710@gmail.com</span>
               <label>Phone</label>
              <span>+91 9566896461</span>

            </div>
        </div>
    </div>
</section></>
  )
}

export default Contact