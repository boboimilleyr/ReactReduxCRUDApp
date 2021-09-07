import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInvestor } from '../redux/investorsSlice';

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
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Enter Investor's Name"
                value={name}
                onChange={handleNameChange}
                required
            ></input>
            <input
                type="text"
                placeholder="Enter Investor's Location"
                value={location}
                onChange={handleLocationChange}
                required
            ></input>
            <button type="submit">Add Investor</button>
        </form>
    );
}

export default AddInvestorForm;
