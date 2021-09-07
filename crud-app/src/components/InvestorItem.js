import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editInvestor, updateInvestor, deleteInvestor } from '../redux/investorsSlice';

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
            <form onSubmit={onUpdate} style={{display: "flex"}}>
                <div>{id}</div>
                <input type="text" value={nameEdit} onChange={handleNameChange} required></input>
                <input type="text" value={locationEdit} onChange={handleLocationChange} required></input>
                <button type="submit">UPDATE</button>
                <button disabled={true}>DELETE</button>
            </form>
        );
    }
    return (
        <li style={{display: "flex"}}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{location}</div>
            <button onClick={onEdit}>EDIT</button>
            <button onClick={onDelete}>DELETE</button>
        </li>
    );
};

export default InvestorItem;
