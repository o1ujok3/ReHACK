
function Contact(){
    return (
        <section className='contact'>
            <div className='contactForm'>
               <h1>Contact Us</h1>
               <input type='text' placeholder='Your Name' />
               <input type='text' placeholder='Your Email' />
               <textarea placeholder='Your Message' className='messageBox'></textarea>
               <button className='btnContact'>Submit</button>         
            </div>
           
        </section>
        
    )
}


export default Contact;