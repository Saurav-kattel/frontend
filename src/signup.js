import React, {
  useState,
  
} from "react"
export default function Signup() {
  const [name,
    setName] = useState("");
  const [phone,
    setPhone] = useState("");
  const [email,
    setEmail] = useState("");
  const [password,
    setPassword] = useState("");

  const handleCange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
const handelSubmit =  async (e) => {
    const location = window.location.hostname;
    const settings = {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,password,phone})
    };
    try {
     /* const data = await  fetch(`http://${location}:4000/api/auth/signup`, settings);
      
     const Json = await data.json();
     alert( Json);
      
      if(data.ok){
        alert("noice");
      }
      
      */
      
      fetch(`http://${location}:4000/api/auth/signup`, settings).then((res)=>{
      res.json().then((data)=>{
               if(data.success === true){
          alert("true");
          alert(data.token);
        }else{
          alert("false")
        }
        
      })

      }).catch((err)=>{
        alert(err)
      })
    } catch (e) {
        return e;
    }    

   
    e.preventDefault();
  }
  return (
    <>
    <form onSubmit={handelSubmit}>
    <div className="child">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" value={name} onChange={handleCange} />
    </div>
    <div className="child">
    <label htmlFor="email">Emal</label>
    <input type="email" name="email" value={email} onChange={handleCange} />
  </div>
    <div className="child">
    <label htmlFor="password">password</label>
    <input type="password" name="password" value={password} onChange={handleCange} />
</div>
    <div className="child">
    <label htmlFor="phone">Phone</label>
    <input type="number" name="phone" value={phone} onChange={handleCange} />
</div>
    <button type="submit">Sign up</button>
</form>
{
name
} < />
)
}