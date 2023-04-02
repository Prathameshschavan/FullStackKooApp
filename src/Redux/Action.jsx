
const action =(dispatch)=>{
    fetch("http://localhost:8080/api/posts")
    .then((res)=>res.json())
    .then((data)=>{
        dispatch({
            type:"Get",
            payload:data.posts
        })
    })

}


export const myAction=(dispatch,flag)=>{
    dispatch({
        type:"OPEN_WRITER",
        payload:flag,
    })
}

export const actionPeople =(dispatch)=>{
    fetch("http://localhost:3004/People")
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        dispatch({
            type:"GetPeople",
            payload:data
        })
    })

}





export default action;