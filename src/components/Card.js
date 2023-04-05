import React from 'react'
function Card(props) {
  return (
    <>
    <div className="container" style={{padding:"3rem"}}>

  <div className="card-body">
    <i className={`fa-solid fa-${props.logo}`}>&nbsp;</i>
    
    <h5 className=" card-title">{props.title}</h5>
    <p className="card-text">{props.h2}</p>
    <hr />

    <p className="card-text">{props.para}</p>
  </div>
</div>
    </>
  )
}

export default Card