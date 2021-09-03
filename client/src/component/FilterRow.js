import React from 'react';
import { Grid } from 'semantic-ui-react'
import Filters from './Filters';

const FilterRow = () => {
    return(
        <Grid columns={3} style={{marginTop:'5rem'}}>
            <Grid.Row>

                <Filters />

                
            </Grid.Row>
        </Grid>

       
    )
}

export default FilterRow;