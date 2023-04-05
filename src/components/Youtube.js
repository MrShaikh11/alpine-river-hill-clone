import React from 'react'
import "../Youtube.css";

function Youtube() {
  return (
    <div className='Youtube'>

        <h1>BEAUTY OF ALPINE RIVER HILL</h1>
        <h4 >Live the moment, create memories and cherish them forever!
</h4>

        <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/SEadiIzqr_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Youtube