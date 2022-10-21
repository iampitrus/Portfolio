function Projects() {
  const projects = [
    {
      title: 'Car Project',
      description: 'Landing page development',
    },
    {
      title: 'Car Project',
      description: 'Landing page development',
    },
  ];

  return (
    <section id='projects' className='container-xy bg-darkBlue'>
      <h2 className='text-right subheading text-white'>My Projects</h2>
      <div className='flex justify-between flex-wrap'>
        {projects.map(({ title, description }, index) => (
          <div className='card' key={index}>
            <div className='h-[420px] w-[350px] mb-3 bg-slate-400'></div>
            <h3 className='text-3xl text-white'>{title}</h3>
            <p className='gray'>{description}</p>
          </div>
        ))}
      </div>
      <button className='outline-btn mt-16'>See more</button>
    </section>
  );
}

export default Projects;
