function Contact() {
  return (
    <section id='contact' className='bg-darkBlue container-xy'>
      <h3 className='subheading text-white text-center'>
        Have a Project in Mind?
      </h3>
      <h4>Get in Touch</h4>
      <form action='post'>
        <input type='text' name='firstName' placeholder='Firstname' />
        <input type='text' name='firstName' placeholder='Lastname' />
        <input type='text' name='firstName' placeholder='Mobile Number' />
        <input type='text' name='firstName' placeholder='Email Address' />
      </form>
    </section>
  );
}

export default Contact;
