import React, {useState} from "react";
import '../styles/App.css';
const Arr=["Siblings","Friends","Love","Affection","Marriage","Enemy"]
const App =()=>{
    const [name1,setName1]=useState("")
    const [name2,setName2]=useState("")
    const [relationship,setRelationship]=useState("")
    const [buttonClicked,setButtonClicked]=useState(false)


    function calculateRelationship(e)
    {
        e.preventDefault()
        let str1=name1
        let str2=name2

        if((str1.trim()===""||str2.trim()==="")||(str1.trim()==="" && str2.trim()===""))
        {
            setRelationship("Please Enter valid input")
            return
        }
        
       
        for(let i of str1)
        {
            if(str2.includes(i))
            {
                str1=str1.replace(i,"");
                str2=str2.replace(i,"")
            }
        }
        console.log(str1,str2)
        setName1(str1);
        setName2(str2);
        if(str1.length!=0 && str2.length!=0){
        setRelationship(Arr[(str1.length+str2.length)%6])}


    }
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <form onSubmit={calculateRelationship}>
               <input data-testid="input1" type="text" placeholder="Enter first name"  onChange={(e)=>setName1(e.target.value)}/>
               <input data-testid="input2" type="text" placeholder="Enter second name"  onChange={(e)=>setName2(e.target.value)}/>
               <button type="submit" data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button onClick={()=>{setButtonClicked(true);setName1("");setName2("")}}data-testid="clear" type="reset">Clear</button>
               </form>
               {
               relationship!=""&& buttonClicked==false&&
               <h3 data-testid="answer">{relationship}</h3>
               }
            </div>
            
        )
    }



export default App;
