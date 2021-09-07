import React from 'react';
import InvestorItem from './InvestorItem';
import { useSelector } from 'react-redux';

const InvestorsList = () => {
    const investors = useSelector((state) => state.investors);

    return (
        <div>
            <h1>List of Investors</h1>
            {investors.length === 0 ? <p>There is no investor at the moment.<br></br>Please add an investor.</p> :
                <ul>
                    {investors.map((investor) => (
                        <InvestorItem
                            key={investor.id} 
                            id={investor.id} 
                            name={investor.name} 
                            location={investor.location}
                            edit={investor.edit}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};

export default InvestorsList;
