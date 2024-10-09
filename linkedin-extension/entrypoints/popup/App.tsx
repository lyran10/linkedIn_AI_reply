import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState<boolean>(false)

  const handleExtension = async() => {
    let [tab] = await chrome.tabs.query({active : true})

    chrome.scripting.executeScript<boolean[], void>({
      target : {tabId : tab.id as number},
      args : [show],
      func : (show) => {
        let stick = document.getElementById("ai_stick")
        if(show){
          if(stick) stick.style.display = "block"
        }else{
          if(stick) stick.style.display = "none"
        }
      }
    })
  }

  useEffect(() => {
    handleExtension()
  },[show])

return (
    <>
      <span style={{fontWeight : "500", fontSize : "15px"}} className='text-[15px] font-semibold'>LinkedIn AI Reply</span>
      <div style={{display : "flex", justifyContent : "center", gap : "5px"}} className="flex justify-center gap-2">
        <button onClick={() => setShow(true)}>
          Enable
        </button>
        <button onClick={() => setShow(false)}>
          Disable
        </button>
      </div>
    </>
  );
}

export default App;
