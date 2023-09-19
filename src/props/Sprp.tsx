import react, {useState} from "react"
import styled from "styled-components"


const Settings:React.FC = ({}) =>{

   const [dchng, setDchng] = useState(false)
   const change = () =>{
      setDchng(!dchng)
   }
   return(
     <div onClick={change} style={{display:"flex", justifyContent:"space-between"}}>
        {dchng?(<Container>
          <Circle/>
        </Container>)
        :(<Container2>
         <Circle2/>
        </Container2>)}

        {dchng?(<Div>on</Div>)
        :(<Div>off</Div>)}
     </div>
   )
}
export default Settings;
const Div = styled.div`
position:absolute;
right:0px;
`
const Circle2 = styled.div`
height:14px;
width:14px;
background-color:gray;
border-radius:50%;
margin:1.5px;
display:flex;
align-items:flex-end;
&:hover{
   background-color:black;
}
`
const Container2 = styled.div`
height:17.5px;
border-radius:15px;
width:41px;
background-color:white;
border:1px solid gray;

&:hover{
   border:1px solid black;
}
`
const Circle = styled.div`
height:14px;
width:14px;
background-color:white;
border-radius:50%;
margin:1.5px;
transiton: all ease-in-out 350ms;
// &:hover{
//    transform:scale(0.56)
// }
`
const Container = styled.div`
height:17.5px;
border-radius:15px;
width:41px;
background-color:blue;
border:1px solid gray;
display:flex;
justify-content:flex-end;
transiton: all ease-in-out 350ms;
&:hover{
   transform:scale(0.92)
}
`