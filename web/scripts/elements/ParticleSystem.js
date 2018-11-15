/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Systems
class ParticleSystem
  extends Effect
{
  //
  constructor()
  {
      super();

      this.number_of_particles = 256;
      this.particles           = new Array();

      this.sequence            = new Counter();

      this.sequence_end        = 500;
  };

  setOrigin( parameterPositionX, 
             parameterPositionY )
  {
    this.originPoint = GeneratePoint( parameterPositionX, 
                                      parameterPositionY );
  }

  // appends a particle unit, to the particle list 
  addToParticles( append_particle_child )
  {
    this.particles = this.particles.concat( append_particle_child );
  }

  //
  generate()
  {
    
  };

  //
  update()
  {
    

  };




};