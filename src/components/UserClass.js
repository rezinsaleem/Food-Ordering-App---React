import React,{Component} from 'react'

class UserClass extends Component {
constructor(props){
super(props)

this.state={
  count:0,
  userInfo:{
    name:'dummy',
    bio:'',
    avatar_url:''
  }
};
}

async componentDidMount(){
   const data = await fetch('https://api.github.com/users/rezinsaleem')
   const json = await data.json()
   this.setState({
    userInfo:json,
   })
   
}

// it is used like useEffect in functional component with empty dependency [] - inorder work once the component loads
// mainly to make api callls
// loaads=>render=>apiData=>re-render
// constructor,render are in render phase and react updates DOM and componentDidMount are in commit phase.
// if multiple child components are called then it will batch up render phase and then commit phase

componentDidUpdate(){
  console.log('state variable updated after mounting completed');
}
componentWillUnmount(){
  console.log('unmounted');
}
//this will happen when component unmount..it will cleanup the things started working from that component eg(setInterval,setTimeout)
//like this we can write return ()=>{fn} inside useEffect inOrder to cleanup


  render(){
    const {count}=this.state;
    const {name,bio,avatar_url}=this.state.userInfo;
    const {location , ph} =this.props;
  return (
    <div className='flex justify-around'>
    <div>
    <h1>Bring ME!</h1>
     <h2>{name} - {bio}</h2>
      <h2>Location: {location}</h2>
      <h2>Phone No: {ph}</h2>
      <h2>count :{count}</h2>
      <button className='bg-gray-500 text-white rounded-xl p-2 mt-1' onClick={()=>{
        this.setState({
          count:this.state.count+1,
        })
      }
      }>count</button>
      </div>
      <img className='mr-28 w-72 rounded-full' src={avatar_url} alt="" />
    </div>
  )
}
}

export default UserClass

