import React, {useRef} from "react";

import { useSelector, useDispatch } from "react-redux";
import { setFilterValue, selectFilters } from "./FilterSlice";
import css from '../Filter/filter.module.css'
export function Filters() {
  const filterObject = useSelector(selectFilters)
    const inputFilter = useRef("")
    const filter = filterObject.filters
    const filterText = inputFilter.current.value
    const dispatch = useDispatch();
    console.log(filter);
return (<>
<label 
className={css.label}
>
        Search
        <input
            
             ref={inputFilter}
             onChange ={()=>dispatch(setFilterValue(filterText))}
            //  value={value}
          className={css.input}
          type="search"
          name="filter"
        ></input>
      </label>
</>)
}