import Register from './Register'
function Register(){
    const [email,setEmail]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");

    function setValue(data){
        let data={email,firstname,lastname}
        
    }
    return(
        <div>
        <h1>Register User</h1>
        <form>
            <input type="text" value={email} onchange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={firstname} onchange={(e)=>setFirstname(e.target.value)} />
            <input type="text" value={lastname} onchange={(e)=>setLastname(e.target.value)} />
            <button onClick={setValue}>Register user</button>
        </form>
        </div>
    )
}
export default Register;