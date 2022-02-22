import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class User extends Component{
    onDeleteClick(id,e) {
        const { deleteUser } = this.props;

        deleteUser(id);
    }

    render(){
        const{id,name,tel,email} = this.props;
        return(
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{name.toUpperCase()} </TableCell>
                <TableCell>{tel} </TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                    <Button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">Delete</Button>
                </TableCell>
            </TableRow>
        );
    }
}
export default User;