import React from 'react'

const Random = (props) => 
  <div className='container' onClick={()=> this.setState({ randomPicked: undefined})}> 
    <h3 className='title'> { props.title } </h3>
    <img className='poster' src={ props.image } alt='poster'/>   
  </div>

export default Random