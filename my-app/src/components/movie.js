import React from 'react'

const icons = {
  starFull: <path d="m38.6 14.4q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 0.5-0.2 0.8t-0.7 0.3q-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z" />,
  starEmpty: <path d="m26.9 22.4l6.8-6.6-9.4-1.4-4.2-8.5-4.2 8.5-9.5 1.4 6.9 6.6-1.7 9.4 8.5-4.4 8.4 4.4z m11.7-8q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 1.1-0.9 1.1-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z" />,
} 

const Icon = ({ size = 40, name, fill='white', ...props }) =>
  <svg viewBox="0 0 40 40" fill={fill} height={size} width={size} {...props}>
    {icons[name]}
  </svg>

const Movie = (props) => 
  <div className='container'> 
    <h3 className='title'> { props.title } </h3>
    <img className='poster' src={ props.image } alt='poster'/>
    <Icon fill='hotpink' name='starEmpty' className='loveBtn' onClick={ () => props.addToFavorites(props.id) }/>
  </div>

export default Movie