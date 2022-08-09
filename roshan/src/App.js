import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Userlist from './Userlist'

function App() {

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  useEffect(() => {
    fetch("https://reqres.in/api/users").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp)
        setData(resp)
        setEmail(resp[0].email)
        setFirstname(resp[0].firstname)
        setLastname(resp[0].lastname)
      })
    })
  }, [])

  function selectUser(id) {
    setEmail(data[id - 1].email)
    setFirstname(data[id - 1].firstname)
    setLastname(data[id - 1].lastname)
  }

  function updateUser() {
    let item = { email, firstname, lastname }
    fetch("https://reqres.in/api/users"), {
      method: 'PUT',
      headers: {
        'application': 'application/json',
        'Content-Type': 'application/json'
      }
    }.then((result) => {
      result.json().then((resp) => {
        getUser()
      })
    })
  }
  return (
    <div>
      <h1>Get User List</h1>
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Email</td>
          <td>First Name</td>
          <td>Last Name</td>
        </tr>
        {
          data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td><button onClick={() => selectUser(item.id)}>Update</button></td>
            </tr>
          )
        }
      </table>

      <div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} /> <br /> <br />
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} /> <br /> <br />
        <button onChange={updateUser}>Update User</button>
      </div>

      <Userlist />
    </div>
  );
}

export default App;
