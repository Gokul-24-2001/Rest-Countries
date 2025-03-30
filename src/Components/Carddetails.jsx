import React from 'react'

function Carddetails({country}) {
  return (
    <div>
    <div className='carddetails'><button type="button">Back</button></div>
    {country.map((item)=>{
      return  <div>
      <div><img className="card-img-top flagimagesize"alt={`${item.name.common} flag`}  src={item.flags.png} /></div>
      </div>

    })}
    </div>
  )
}

export default Carddetails