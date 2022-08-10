import { useEffect, useState } from "react";

function Userlist(){
    const [data,setData]=useState([])
 
        useEffect(()=>{
        fetch("https://reqres.in/api/use").then((result)=>{
        result.json().then((resp)=>{
            console.warn("result",resp)
            setData(resp.data)
        })
    })
    },[])
    console.warn(data)
    return(
        <div>
            <h1>Get User List</h1>
            <table border="1">
                <tr>
                    <td>Id</td>
                    <td>Email</td>
                    <td>First_Name</td>
                    <td>Last_Name</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    
                </tr>
                    )
                }
            </table>
        </div>
    )
}
export default Userlist;

