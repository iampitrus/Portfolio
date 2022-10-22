function Contact() {
  return (
    <section
      id='contact'
      className='bg-darkBlue container-xy flex flex-col items-center'
    >
      <h3 className='subheading text-left text-white sm:text-center'>
        Have a Project in Mind?
      </h3>
      <div className='md:mr-[-20%] mb-24'>
        <h4 className='text-white text-2xl mb-9'>Get in Touch</h4>
        <form className='grid gap-12 text-gray-400' action='post'>
          <legend className='flex flex-wrap gap-10'>
            <input type='text' name='firstName' placeholder='Firstname' />
            <input type='text' name='firstName' placeholder='Lastname' />
          </legend>
          <input
            className='w-fit'
            type='text'
            name='firstName'
            placeholder='Email Address'
          />
          <input type='text' name='firstName' placeholder='Message' />
          <button type='submit' className='text-left outline-btn'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
