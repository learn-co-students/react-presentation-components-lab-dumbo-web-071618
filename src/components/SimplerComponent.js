// Code SimplerComponent Here
import React from 'react'
// import React, { Component } from 'react'

// class SimplerComponent extends Component {
    
//     handleClick = (e) => {
//         // let divEl = e.target
//         // if (divEl.innerText.includes('happy')) divEl.innerText = "I am just sad"
//         // else divEl.innerText = "I am just happy."
//         console.log("Dat div is happy doe")
//     }

//     render(){
//         return(
//             <div onClick={this.handleClick}>
//                 I am just happy.
//             </div>
//         )
//     }
// }

const SimplerComponent = (props) => {
    return (
        <div onClick={props.handleClick}>
            I am just happy.
        </div>
    )
}

export default SimplerComponent