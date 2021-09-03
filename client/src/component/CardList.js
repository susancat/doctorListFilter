import React, { useState, useEffect } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';

import axios from 'axios';

const CardList = (props) => {
    // const regions = props.chiLocation;
    // console.log(regions);
    const [doctors, setDoctors] = useState([]);
    const [regions,setRegions] = useState(props.chiLocation)
    useEffect(() => {
        getDoctors()
    },[])

    useEffect(() => {
        setRegions(props.chiLocation)
        doctorFilter()
        console.log(regions)
    },[props])

    function getDoctors() {
        axios.get(`/api/doctors`)
        .then(async res => {
            setDoctors(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
    
    function doctorFilter(){
        const result = doctors.filter(doctor =>  regions.includes(doctor.chiLocation))
        setDoctors(result)
    }
    return(
        <Grid>
            <Grid.Column column={2} >
                { doctors.map(doctor => {
                    return(
                        <Card>
                            <Card.Content>
                                <Card.Header>{ doctor.chiName }</Card.Header>
                                <Card.Meta><Icon name="map marker"></Icon>{ doctor.chiAddress1 }, { doctor.chiAddress2 }</Card.Meta>
                                <Card.Description>
                                    診金 { doctor.price }
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Grid.Column>
        </Grid>
    )
}

export default CardList;