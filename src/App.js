import React, { useState} from 'react';
import axios from 'axios';
import GhPolyglot from 'gh-polyglot';
import './App.css';
import LangData from './components/LangData';
import UserData from './components/UserData';
import RepoData from './components/RepoData';
import Loading from './components/Loading';

function App() {
  
  const [username,setUserName]=useState("");
  const [langData, setlangData]=useState(null);
  const [userData, setuserData]=useState(null);
  const [repoData, setrepoData]=useState(null);
  const [userError,setUserError]=useState(false);
  const [repoError,setRepoError]=useState(false);
  const [langError,setLangError]=useState(false);
  const [userLoad,setUserLoad]=useState(false);
  const [repoLoad,setRepoLoad]=useState(false);
  const [langLoad,setLangLoad]=useState(false);
  
  

  const onUserInput=(e)=>{
      setUserName(e.target.value);
      // console.log(e.target.value);
  }
  const onSubmitForm=(e)=>{
    e.preventDefault();
      // console.log("userDataSubmited");
      getUserData();
       getRepoData();
       getLangData();

  }

const getLangData = () => {
  setLangLoad(true);
  const me = new GhPolyglot(`${username}`);
  me.userStats((err, stats) => {
    if (err) {
      // console.error('Error:', err);
      setLangError(true);
      setLangLoad(false);
      return 0;
    }
    setlangData(stats);
    setLangLoad(false);
    setLangError(false);
    // console.log(langData);
  });
}

const getUserData=()=>{
  setUserLoad(true);
  axios.get('https://api.github.com/users/'+username)
  .then((res)=>{
    setuserData(res)
    // console.log(userData);
    setUserLoad(false);
    setUserError(false);
  })
    .catch((e)=>{
      setUserError(true);
      // console.log(e);
      setUserLoad(false);
  })
};

const getRepoData=()=>{
  setRepoLoad(true);
  axios.get('https://api.github.com/users/'+username+'/repos')
  .then((res)=>{
    setrepoData(res);
    // console.log(res);
    setRepoLoad(false);
    setRepoError(false);
  })
    .catch((e)=>{
      setRepoError(true);
        // console.log(e);
        setRepoLoad(false);
    })
}




  return (
    <div className="App">
        {/* <UserForm></UserForm> */}
          <div className="form-container">
              <div className="form-logo"><h1>GitHub User Stats</h1></div>
              
                <form className="form-input" onSubmit={onSubmitForm}>
                <input autoFocus value={username} onChange={onUserInput} placeholder="Enter User ID"></input>
                 {username!==""? <button type="submit"  >Submit</button>:null}
                </form>              
              </div>
              {userError&&<div className="user-error">
                <h2>No User Found</h2>
                </div>}
                {!userError&& <div className="user-details">
                        {userData===null?(null):(userLoad?<Loading/>:(userError?<h1>User Error</h1>:<UserData userData={userData}></UserData>))}
                        {langData===null?(null):(langLoad?<Loading/>:(langError?<h1>Maximum request Limit <br/>Reached</h1>:<LangData langData={langData}></LangData>))}
                        {repoData===null?(null):(repoLoad?<Loading/>:(repoError?<h1>REPO Error</h1>:<RepoData repoData={repoData}></RepoData>))}                  
                    {/* <div>
            </div> */}
        </div>}
      </div>
  );
}

export default App;
