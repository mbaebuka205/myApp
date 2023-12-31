import react, { useState } from 'react'
import styled from 'styled-components'
import {CgMenuGridO} from 'react-icons/cg'
import {LiaSearchSolid} from 'react-icons/lia'
import {LuMegaphone} from 'react-icons/lu'
import {BiQuestionMark} from 'react-icons/bi'
import {CiSettings} from 'react-icons/ci'
import {MdOutlineCancel} from 'react-icons/md'
import  Sp from '../../props/Sprp'

const Dashboard = () =>{
  const [logn, setLogn] = useState(false)
  const lgn = () =>{
    setLogn(!logn)
  }
  const snlc = () =>{
    setLogn(!logn)
  }
  const [spekin, setSpekin] = useState(false)
  const spk = () =>{
    setSpekin(!spekin)
  }
  const lnsc = () =>{
    setSpekin(!spekin)
  }
  const [sachin, setSachin] = useState(false)
  const sch = () =>{
    setSachin(!sachin)
  }
  const cnls = () =>{
    setSachin(!sachin)
  }
  const [settings, setSettings] = useState(false)
  const set = () =>{
    setSettings(!settings)
  }
  const cancle = () =>{
    setSettings(!settings)
  }

  return(
    <div>
      <Container>
        <Wrapper>
          <Div1>
            <Menu>
            <CgMenuGridO/>
            </Menu>
            <h4>TO DO</h4>
          </Div1>
          <Div2>
            <Search>
            <LiaSearchSolid/>
            </Search>
            <input type='text'></input>
          </Div2>
          <Div3 >
            <Ic1 onClick={set}>
              {settings?(<CiSettings/>)
               :(<CiSettings/>)}</Ic1>
            <Ic2 onClick={sch}>
              {sachin?(<BiQuestionMark/>)
               :(<BiQuestionMark/>)}</Ic2>
            <Ic3 onClick={spk}>
              {spekin?(<LuMegaphone/>)
               :(<LuMegaphone/>)}</Ic3>
             <Ic4 onClick={lgn}>
              {logn?(<h4>M</h4>):(<h4>M</h4>)}</Ic4>   
          </Div3> 
          {settings?(<Settings>
            <Header>
              <p>Settings</p>
              <Inv onClick={cancle}>
                {settings?(<MdOutlineCancel/>):(null) }
              </Inv>
            </Header>
            <First>
              <Dtop>
                <p>General </p>
              </Dtop>
              <Dres>
                <span>Confirm before deleting</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Add new task on top</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Move starred on to top</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Play completion sound</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Show right-click menus</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Turn on reminder notification</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Show task that seem important in my day</span>
                <OffOn><Sp/></OffOn>
              </Dres>
              <Dres>
                <span>Turn on night mood</span>
                <OffOn><Sp/></OffOn>
              </Dres>
            </First>
          </Settings>):(null)}

          {sachin?(<Sach>
             <Header>
              <p>Help</p>
              <Inv onClick={cnls}>
                {sachin?(<MdOutlineCancel/>):(null)}
              </Inv>
            </Header>
          </Sach>):(null)} 
          {spekin?(<Spek>
            <Header>
              <p>What's new</p>
              <Inv onClick={lnsc}>
                {spekin?(<MdOutlineCancel/>):(null)}
              </Inv>
            </Header>
          </Spek>):(null)}
          {logn?(<Log>
            <Header>
              <p>My Account</p>
              <Inv onClick={snlc}>
                {logn?(<MdOutlineCancel/>):(null)}
              </Inv>
            </Header>
          </Log>):(null)}                
        </Wrapper>
      </Container>
    </div>
  )
}
export default Dashboard;
const OffOn = styled.div`
height:26px;
width:24%;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
`
const Dres = styled.div`
width:100%;
height:50px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:flex-start;
span{
  font-size:15px
}
`
const Dtop = styled.div`
width:30%;
height:35px;
p{font-size:16px;}
`
const First = styled.div`
height:550px;
width:86%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
margin-left:7px;
`
const Header = styled.div`
height:50px;
width:95%;
margin-left:7px;
display:flex;
justify-content:space-between;
align-items:center;
p{font-size:22px;}
`
const Inv = styled.div`
font-size:25px;
`
const Log = styled.div`
width:26%;
height:581px;
overflow-y:auto;
position:absolute;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
right:0px;
top:70px;
z-index:1;
`
const Spek = styled.div`
width:26%;
height:581px;
overflow-y:auto;
position:absolute;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
right:0px;
top:70px;
z-index:1;
`
const Sach = styled.div`
width:26%;
height:581px;
overflow-y:auto;
position:absolute;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
right:0px;
top:70px;
z-index:1;
`
const Settings = styled.div`
width:26%;
height:581px;
overflow-y:auto;
position:absolute;
right:0px;
top:70px;
z-index:1;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Ic1 = styled.div`
font-size:22px;
color:white;
height:100%;
display:flex;
justify-content:center;
align-items:center;
width:25%;
&:hover{
  border:1px solid white;
  background-color:rgba(000, 000, 000, 0.3)
}
`
const Ic2 = styled.div`
font-size:22px;
color:white;
height:100%;
display:flex;
justify-content:center;
align-items:center;
width:25%;
&:hover{
  border:1px solid white;
  background-color:rgba(000, 000, 000, 0.3)
}
`
const Ic3 = styled.div`
font-size:22px;
color:white;
height:100%;
display:flex;
justify-content:center;
align-items:center;
width:25%;
&:hover{
  border:1px solid white;
  background-color:rgba(000, 000, 000, 0.3)
}
`
const Ic4 = styled.div`
height:35px;
color:white;
width:35px;
border-radius:50%;
border:1px solid white;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
`
const Search = styled.div`
font-size:19px;
margin-left:10px;
`
const Menu = styled.div`
font-size:25px;
color:white;
`
const Div3 = styled.div`
height:60px;
width:19%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Div2 = styled.div`
height:33px;
width:30%;
display:flex;
justify-content:;
align-items:center;
background-color:#fff;
border-radius:5px;
input{
    flex:1;
    border:0;
    outline:0;
}
`
const Div1 = styled.div`
height:50px;
width:7.5%;
display:flex;
justify-content:space-between;
align-items:center;
h4{color:white;}
`
const Wrapper = styled.div`
height:100%;
width:97%;
display:flex;
justify-content:space-between;
align-items: center;
`
const Container = styled.div`
height:70px;
width:100%;
background-color:#2564CF;
display:flex;
justify-content:center;
align-items:center;
z-index:3
`