import React from 'react';
import InvestorItem from './InvestorItem';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const InvestorsList = () => {
    const investors = useSelector((state) => state.investors);

    return (
        <div className="list-container">
            <h1 style={{textAlign: "left", marginLeft: "10px"}}>List of Investors</h1>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className="list-header-container">
                <Grid item xs={1} className="list-header-text">ID</Grid>
                <Grid item xs={4} className="list-header-text">NAME</Grid>
                <Grid item xs={4} className="list-header-text">LOCATION</Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            {investors.length === 0 ?
                <p style={{padding: "50px", fontStyle: "italic", lineHeight: "1.5"}}>There are no investors at the moment.<br></br>Please add an investor.</p> :
                <Grid container direction="column">
                    {investors.map((investor) => (
                        <InvestorItem
                            key={investor.id} 
                            id={investor.id} 
                            name={investor.name} 
                            location={investor.location}
                            edit={investor.edit}
                        />
                    ))}
                </Grid>
            }
        </div>
    );
};

export default InvestorsList;
