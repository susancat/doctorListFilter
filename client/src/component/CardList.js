import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import SingleCard from './SingleCard';
import axios from 'axios';

const CardList = (props) => {
    // const regions = props.chiLocation;
    // console.log(regions);
    const [doctors, setDoctors] = useState([]);
    const [filteredDrs, setFilteredDrs] = useState([]);
    const [regions,setRegions] = useState(props.chiLocation);
    const [ifEmpty, setIfEmpty] = useState(false);

    //fetch all doctors for once
    useEffect(() => {
        getDoctors()
    },[])

    useEffect(() => {
        setRegions(props.chiLocation)
    },[props.chiLocation])

    useEffect(() => {
        const result = regions.map(region => {
            return doctors.filter(doctor => 
                doctor.chiLocation.includes(region)
            )
        })    
        setFilteredDrs(result)
    },[regions])

    useEffect(() => {
        const isEmpty = filteredDrs.map(doctors => doctors.length !== 0);
        isEmpty.includes(true) ?
        setIfEmpty(false) : setIfEmpty(true);
    }, [filteredDrs])

    function getDoctors() {
        axios.get(`/api/doctors`)
        .then(async res => {
            setDoctors(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    return( 
        <Card.Group itemsPerRow={2} style={{marginLeft:'.4rem',marginRight:'.3rem'}}>
            {ifEmpty && regions.length !== 0 ?
                <div className="mt-5">
                    <h4 className="mt-5">沒有符合條件的醫生</h4>
                </div> :

            
                filteredDrs.map(doctors => {
                    return doctors.map(doctor => {
                        return(
                            <SingleCard key={doctor.doctorId} doctor={doctor} />
                        )  
                   })        
                })
            }
        </Card.Group>
    )
}

export default CardList;