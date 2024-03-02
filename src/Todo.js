import React, { useState } from 'react'
import './todo.css'
const Todo = () => {

  const[activity,setactivity]=useState("")

  // const[showData,setshowdata]=useState([])
  // const alldata=(...activity,showData)
  const[listData,setlistData]=useState([])
  function addActivity(){

    // setlistData([...listData,activity])
    // console.log(listData)

    setlistData((listData)=>{
      const updatedList=[...listData,activity]
      console.log(updatedList)
      setactivity('');
      return updatedList
    }) 
  }

  function removeactivity(i){
    const updatedListData=listData.filter((element,id)=>{
      return i!=id;
    })
    setlistData(updatedListData); 
  }
  function removeAll(){
    setlistData([])
  }

  return (
    <div className="countainer">
       <div className='header'>Todo List</div>
       <input type="text" placeholder='Add Activity' 
       value={activity}
       onChange={(e)=>setactivity(e.target.value)}
       />

       <button onClick={addActivity}>Add</button>
       <p className='List-heading'>Here is your List:{")"}</p>
       {listData!=[] && listData.map((data,i)=>{
        return(
          <>
            <p key={i}>
              <div className='listData'>{data}</div>
              <div className='btn-position'><button onClick={()=>removeactivity(i)}>remove(-)</button></div>

            </p>
          </>
        )

       })}
       {listData.length>=2 && <button onClick={removeAll}>Remove All</button>}
     
    </div>
  )
}

export default Todo