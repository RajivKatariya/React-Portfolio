import React, { useState } from 'react'


 function TextForm(props) {
    const {heading, placeHolder='input here'}= props;
    const [textInputValue, setTextInputValue]= useState('')
      return (
    <div>
            <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" >{heading}</label>
            <textarea placeholder={placeHolder} onChange={(val)=>setTextInputValue(val)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
    </div>
  )
}
export default TextForm;

// import React, { useState } from 'react'

// function TextForm(props) {
//     const{heading,}=props;
//     const[textInputValue, setTextInputValue]=useState('')
//   return (
//     <div>
//         <label for="exampleFormControlTextarea1" class="form-label" >{heading}</label>
//       <textarea value={textInputValue} onChange={(val)=>{alert(JSON.stringify(val));}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       
//     </div>
//   )
// }

// export default TextForm
