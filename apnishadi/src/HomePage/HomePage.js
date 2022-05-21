import React from 'react'
import MultiSelection from '../Component/MultiSelection'
import Slider from '../Component/Slider'
import { searchicon, SortByAZ, SortByRating } from '../Icon'
export default function HomePage() {
  return (
  <>
       <Slider/>
      <div className='my-2 gap-2  '>

<div className="">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Search</label>
    <div className="input-group border">
        <input type="text" className="form-control border-0" id="autoSizingInputGroup" placeholder="Search" />
        <button className=" border-0 btn btn-link">{searchicon}</button>
    </div>
</div>
<div className="row my-3">

    <div className="col-2 d-flex justify-content-center  border-end">
        <button className='btn border-0 '>{SortByAZ} Sort By</button>
    </div>
    <div className="col m-auto border-end ">
        <MultiSelection />
    </div>
    <div className="col-2 d-flex justify-content-center ">
        <button className='btn border-0 '>{SortByRating} Sort By</button>
    </div>
</div>

</div>
  </>
  )
}
