
function Contact(){
    return (
        <section className='contact'>
            <div className='form'>
               <h1>Contact Me</h1>
               <input type='text' placeholder='Your Name' />
               <input type='text' placeholder='Your Email' />
               <textarea placeholder='Your Message' className='messageBox'></textarea>
               <button className='btnContact'>Submit</button>         
            </div>
           
        </section>
        
    )
}


export default Contact;