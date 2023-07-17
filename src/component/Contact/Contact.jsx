
import React, { useState } from 'react';
import './contact.css';
import vg from '../../images/vg.jpg';
export const Contact = () => {
    const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [text, setText] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform form submission logic here
            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('Text',text)
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
            setText('');
        };
  return (
    <section className="main-container">
        <div className="container">
        <form onSubmit={handleSubmit} className="form-control">

            <input className=" inputs-1 poppins" type="text" placeholder='Full Name' 
            name='user_name' value={name} onChange={(e) => setName(e.target.value)} required/>

            <input className=" inputs-1 poppins" type="email" placeholder='Email' 
            name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <input className=" inputs-1 poppins" type="text" placeholder='Subject' 
            name='subject'value={message} onChange={(e) => setMessage(e.target.value)} required/>

            <textarea className=" inputs-1 poppins" name = "message" cols ="20" rows ="10" 
            value={text} onChange={(e) => setText(e.target.value)} required>
            </textarea>

            <button type="submit" className='btn poppins'>
               Submit
            </button>
         </form>  
   </div>
   <div className="image-container">
  <img className='imge' src={vg} alt="" />

   </div>

    </section>

   )
}
 export default Contact;



// export const Contact = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform form submission logic here
//         console.log('Form submitted!');
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Phone:', Number);
//         console.log('Message:', message);
//         // Reset form fields
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage('');
//     };

//     return (
//         <div className='Contact'>
//             <section>
//             <form className="form-1" onSubmit={handleSubmit}>
//             <div>
//                 <label className="common" htmlFor="name">Name:</label>
//                 <input className="common-1"
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="common" htmlFor="email">Email:</label>
//                 <input className="common-1"
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="common" htmlFor="phone">Phone:</label>
//                 <input className="common-1"
//                     type="number"
//                     id="phone"
//                     value={Number}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="common" htmlFor="message">Message:</label>
//                 <textarea className="common-1"
//                     id="message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                 >
//                 </textarea>
//             </div>
//             <div className="bb">
//             <button class="btn btn-outline-primary" type="submit">Submit</button>
//             </div>
            
//         </form>

//             </section>
//         </div>
        
//     );
// };

// export default Contact;
