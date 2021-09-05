import React,{ useState } from 'react';
import { newT, kowloon, hkIsland, islands, normal, special, chiMed, others, priceRanges } from '../data';
import { Grid, Dropdown, Menu, Button } from 'semantic-ui-react';
import CardList from './CardList';

const Filters = () => {
    const [regions, setRegions] = useState([]);
    const [fields, setFields] = useState([]);
    const [prices, setPrices] = useState([]);
    
    const renderLabel = (label) => ({
        color:'pink',
        content: `${label.text}`
    })

    const handleChange = (e, {value}) => {
        setRegions(value);
    }

    const handleChange2 = (e, {value}) => {
        setFields(value);
    }
    const handleChange3 = (e, {value}) => {
        setPrices(value);
    }
    const deleteValue = (e, {value}) => {
        console.log("clicked"+value)
        const index = regions.indexOf(value);
        regions.splice(index,1);
        console.log(regions + index)
        setRegions([...regions])
        // use spreading to inform React it's a new array to trigger a re-render
    }


    const deleteValue2 = (e, {value}) => {
        console.log("clicked"+value)
        const index = fields.indexOf(value);
        fields.splice(index,1);
        console.log(fields + index)
        setFields([...fields])
    }

    const deleteValue3 = (e, {value}) => {
        console.log("clicked"+value)
        const index = prices.indexOf(value);
        prices.splice(index,1);
        console.log(prices + index)
        setPrices([...prices])
    }

    return(
        <Grid style={{marginTop:'2rem'}}>
        <Grid.Row columns={3}>
            <Grid.Column>
                <Menu>
                    <Dropdown text='按區域搜索' className='link item' fluid>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Dropdown text='新界' className='link item' fluid multiple selection options={newT} onChange={handleChange.bind(this)} value={regions} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='九龍' className='link item' fluid multiple selection options={kowloon} onChange={handleChange.bind(this)} value={regions} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='香港' className='link item' fluid multiple selection options={hkIsland} onChange={handleChange.bind(this)} value={regions} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='離島' className='link item' fluid multiple selection options={islands} onChange={handleChange.bind(this)} value={regions} renderLabel={renderLabel} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Grid.Column>
                
            <Grid.Column>
                <Menu>
                    <Dropdown text='醫療範疇' className='link item' fluid>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Dropdown text='普通科門診' className='link item' fluid multiple selection options={normal} onChange={handleChange2.bind(this)} value={fields} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='專科門診' className='link item' fluid multiple selection options={special} onChange={handleChange2.bind(this)} value={fields} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='中醫' className='link item' fluid multiple selection options={chiMed} onChange={handleChange2.bind(this)} value={fields} renderLabel={renderLabel} />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text='其它' className='link item' fluid multiple selection options={others} onChange={handleChange2.bind(this)} value={fields} renderLabel={renderLabel} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Grid.Column>
            <Grid.Column>
                <Menu>
                    <Dropdown 
                    text='按價格搜索' 
                    className='link item' 
                    fluid 
                    multiple 
                    selection
                    onChange={handleChange3.bind(this)}
                    renderLabel={renderLabel}
                    value={prices}
                    options={priceRanges}
                    />
                </Menu>
            </Grid.Column>
            <div className="ml-3 mt-3 mb-3">
            {
                regions.map(region => {
                    // console.log(region)
                    return(
                    <Button basic color='pink' style={{borderRadius:'15px'}} onClick={deleteValue.bind(this)} value={region}>X {region}</Button>
                    )
                })
            }
            {
                fields.map(field => {
                    console.log(field)
                    return(
                    <Button basic color='pink' style={{borderRadius:'15px', marginBottom:'1rem'}} onClick={deleteValue2.bind(this)} value={field}>X {field}</Button>
                    )
                })
            }
            {
                prices.map(price => {
                    console.log(price)
                    return(
                    <Button basic color='pink' style={{borderRadius:'15px'}} onClick={deleteValue3.bind(this)} value={price}>X {price}</Button>
                    )
                })
            }
            </div>
            <CardList chiLocation={regions} />
        </Grid.Row>
        </Grid>
      )
}


export default Filters;