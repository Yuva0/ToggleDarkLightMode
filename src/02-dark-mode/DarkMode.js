export default function DarkMode () {
  

  const enableDarkModeHandler = (value) => {
    if(value){
      document.getElementById("page").classList.add("dark-mode");
    }
    else{
      document.getElementById("page").classList.remove("dark-mode");
    }
  };
  
  return (
    <div id="page" className='page'>
      <button className='dark-mode-button' onClick={()=>{enableDarkModeHandler(true)}}>Dark Mode</button>
      <button className='light-mode-button' onClick={()=>{enableDarkModeHandler(false)}}>Light Mode</button>
    </div>
  )
}
