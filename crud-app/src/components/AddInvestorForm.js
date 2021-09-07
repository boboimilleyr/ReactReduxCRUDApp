import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInvestor } from '../redux/investorsSlice';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddInvestorForm = () => {
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        dispatch(
            addInvestor({ name, location })
        );
        setName("");
        setLocation("");
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleLocationChange = event => {
        setLocation(event.target.value)
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={name}
                onChange={handleNameChange}
                required
                className="input"
            />
            <TextField
                label="Location"
                variant="outlined"
                size="small"
                value={location}
                onChange={handleLocationChange}
                required
                className="input"
            />
            <Button className="btn" type="submit" variant="contained" color="primary">Add Investor</Button>
        </form>
    );
}

export default AddInvestorForm;
