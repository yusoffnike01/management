import { FC, useRef } from "react";
import { store } from "../stores/index.store";


export const Input: FC =()=>{

  const inputRef: any = useRef();
  const addPerson = store.application((state)=>state.addPerson)
  const add=()=>{
  addPerson(inputRef.current.value);
  }
  return(
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={add}>Add People</button>
     </div>
  )
}