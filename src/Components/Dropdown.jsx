import React from 'react'

function Dropdown({country,theme,togglebutton}) {
  return (
    < div className='dropdown'>
      <select className={`${theme} ${togglebutton}`} name="countries" id="countries">
      {
    country.map((item)=>{
   
   return <option className={`${theme} ${togglebutton}`} value={item.name.common}>{item.name.common}</option>
  

    })
   }
      </select>
   
        
    
      </div>
  )
}

export default Dropdown