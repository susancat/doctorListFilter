import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const SingleCard = (props) => {
    const { chiName, chiAddress1, chiAddress2, telephone1, telephone2, price, chiDaySeq1time, chiDaySeq2time, chiDaySeq3time, chiDaySeq4time  } = props.doctor;

    return(
        <Card>
            <Card.Content>
                <Card.Header style={{marginBottom:'.5rem'}}>{ chiName }</Card.Header>
                <Card.Meta>
                    <Icon color='pink' name="map marker"></Icon>{ chiAddress1 }, { chiAddress2 }
                    <p>{ telephone1 } { telephone2 }</p>
                </Card.Meta>
                <Card.Description>
                    診金$ { price }
                    <p>{chiDaySeq1time} {chiDaySeq2time} {chiDaySeq3time} {chiDaySeq4time}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default SingleCard;