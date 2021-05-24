import React from 'react'
import './welcome.css'

const Welcome=({handleLogout}) => {
    return (
        <section className="welocme">

            <div class="container mt-3">
            <div class="alert alert-danger">
               <strong>CHRONO TRIGGER</strong> </div>
    <p class="text-primary" >Some personnalities and caracters</p><br/>
    <div class="media border p-3">
      <img src="/assets/ayla.jpg" alt="John Doe" class="mr-3 mt-3 rounded-circle" className="image"  />
      <div class="media-body">
        <h4>AYLA <small><i>Âge : 24 ans</i></small></h4>
        <p>est une jeune femme, vivant en l'an −65 000 000 élue chef du village de Ioka en raison de son courage et de sa force incroyable</p>      
      </div>
    </div>
    <div class="media border p-3">
      <img src="/assets/robo.jpg" alt="John Doe" class="mr-3 mt-3 rounded-circle" className="image"  />
      <div class="media-body">
        <h4>ROBO <small><i>Âge : plus de 300 an</i></small></h4>
        <p>RoBo ne peut pas utiliser la magie vu qu'il n'est pas humain, mais ses techniques sont de type élémentaire de ténèbres.</p>      
      </div>
    </div>
    <div class="media border p-3">
      <img src="/assets/magus.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" className="image"  />
      <div class="media-body">
        <h4>MAGUS <small><i>Âge : aux alentours de 30 ans</i></small></h4>
        <p>est un mystérieux sorcier, chef de Mystiques, souvent appelé le Magistère</p>      
      </div>
    </div>
    <button className="log" onClick={handleLogout} type="button" class="btn btn-outline-info">LOG OUT</button>   
  </div>
        </section>
        
    )
} 


export default Welcome;