import React,{Component} from 'react';
import AddUser from "./AddUser";
import Users from "./Users";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
class UyeIslemleri extends Component {

  



  constructor(props){
    super(props);

    this.state = {
      users: [
        {
          id : 1,
          name: "Batın Gürkan",
          tel:"05324831384",
          email:"Batingurkan01@gmail.com"
          
        
        },
        {
          id : 2,
          name: "Polen Gürkan",
          tel:"05325989538",
          email:"Polengurkan01@gmail.com"
         
        },
        {
          id : 3,
          name: "Enis Gürkan",
          tel:"05321436243",
          email:"Enisgurkan01@gmail.com"
        
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this)
  }

  addUser (newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users:updatedUsers
    });
  }
  
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
 
    this.setState({
      users: updatedUsers
    });
 
  }
 

  render() {
     return (
      <Box
      noValidate
      autoComplete="off"
    >
   

      <Stack spacing={2}>
          <AddUser addUser= {this.addUser}/>
          <Users deleteUser ={this.deleteUser} users= {this.state.users}  />
      </Stack>

    
 
    </Box>
  );
}
}
export default UyeIslemleri;