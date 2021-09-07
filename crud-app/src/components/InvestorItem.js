import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editInvestor, updateInvestor, deleteInvestor } from '../redux/investorsSlice';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const InvestorItem = ({ id, name, location, edit }) => {
    const [nameEdit, setName] = useState(name);
    const [locationEdit, setLocation] = useState(location);
    const dispatch = useDispatch();

    const onEdit = event => {
        event.preventDefault();
        dispatch(editInvestor({id}));
    };
    const onUpdate = event => {
        event.preventDefault();
        dispatch(updateInvestor({id, name: nameEdit, location: locationEdit, edit}));
    };
    const onDelete = event => {
        event.preventDefault();
        dispatch(deleteInvestor({id}));
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleLocationChange = event => {
        setLocation(event.target.value);
    };

    if(edit){
        return (
            <form onSubmit={onUpdate} style={{display: "flex", justifyContent: "center"}}>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className="list-item-container">
                    <Grid item xs={1} className="list-item-text">{id}</Grid>
                    <Grid item xs={4} className="list-item-text">
                        <TextField value={nameEdit} onChange={handleNameChange} required></TextField>
                    </Grid>
                    <Grid item xs={4} className="list-item-text">
                        <TextField value={locationEdit} onChange={handleLocationChange} required></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" variant="outlined" color="secondary">SAVE</Button>
                        <Button variant="contained" disabled>DELETE</Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
    return (
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className="list-item-container">
            <Grid item xs={1} className="list-item-text">{id}</Grid>
            <Grid item xs={4} className="list-item-text">{name}</Grid>
            <Grid item xs={4} className="list-item-text">{location}</Grid>
            <Grid item xs={3}>
                    <Button onClick={onEdit} variant="contained" color="secondary">UPDATE</Button>
                    <Button onClick={onDelete} variant="contained">DELETE</Button>
            </Grid>
        </Grid>
    );
};

export default InvestorItem;
