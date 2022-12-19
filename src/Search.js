import React from "react";

const Searchgame = (props) => {
    return(
  
<div className="sr">
    <nav class="navbar navbar-expand-xl navbar-light">
     <div class="container-fluid">
          <a class="navbar-brand" href="/">DOG Generator</a>
           
      <form class="">

      <input
            className="form-control" 
            
            value={props.value}
            onChange={(event) => props.setSearchgame(event.target.value)}
            placeholder="search game"
            ></input>
      </form>
    </div>
  </nav>
    
    </div>
    )
}
export default Searchgame;