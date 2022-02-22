import React , {Component} from "react";
import { FormControl,TextField,Button,Card,Dialog  } from '@mui/material';

class AddUser extends Component {

    state = {
        name :"",
        tel:"",
        email:""
    };
    onNameChange(e)
    {
      
        this.setState({
            [e.target.name] : e.target.value
        });
    } 

    onTelChange(e)
    {
     
        this.setState({
            [e.target.name] : e.target.value
        });
    }
     
    onEmailChange(e){
        var email =  e.target.value;
        console.log(email);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onAddSubmit(e){
        const {addUser}= this.props;
        const {name,email,tel} = this.state;


        e.preventDefault();
     //eğer değer yoksa alert   this.state('none')

     if(name,email,tel === ''){
        alert('Lütfen kutucukları boş bırakmayınız')
      return
    } ;
    if(email === ''){
        alert('Lütfen email adresinizi giriniz')
        return
      
    };
    if(name === ''){
        alert('Lütfen isim giriniz')
        
        return
  
    };
    if(tel === 0){

        alert('Lütfen telefon numaranızı giriniz')
        return
      
    };
  
     if(tel.length !== 11){
            alert('Lütfen 11 haneli bir telefon değeri giriniz')
            return
          
        };


        
        const newUser = {
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email
           
        };
        

        addUser(newUser); 

    }
   
    
    render(){ 
        const {name,tel,email} = this.state;

        //render için dönmesi gereken
        return (
                    <form  onSubmit={this.onAddSubmit.bind(this)}>
                         <FormControl>
                            <TextField type="text"
                             label="Name"
                             name="name"
                              id="name"
                                value = {name}
                                onChange={this.onNameChange.bind(this)}
                                ></TextField>
                         </FormControl>
                         
                            <TextField type="number"
                              label="Telephone"
                             name="tel"
                              id="tel"
                                value={tel}
                                onChange={this.onTelChange.bind(this)}
                                ></TextField>
                            <TextField type="text"
                             label="Email"
                             name="email"
                              id="email"
                               placeholder="Enter Email"
                                value={email}
                                onChange={this.onEmailChange.bind(this)}
                                ></TextField>
                        <Button type="submit"  id="buttons">
                            Add New User
                        </Button>
                    </form >
        );
    }
}
export default AddUser;