import React,{ useState, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap';
const Filters = () => {
    const [region, setRegion] = useState([]);
    const [field, setField] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {

    },[region,field,price]);

    const newT = ["粉嶺","葵涌","葵芳","马鞍山","沙田","大圍","上水","大埔","太和","天水圍","將軍澳","青衣","荃灣","屯門"];
    const kowloon = ["長沙灣","彩虹","鑽石山","紅磡","佐敦","九龍灣", "九龍城","觀塘","荔枝角","藍田","樂富","美孚","旺角","牛池灣","牛頭角","奧海城","太子","新蒲崗","深水埗","石硤尾","大角咀","土瓜灣","尖沙咀","黃大仙","油麻地","油塘"];
    const hkIsland = [];
    const islands = [];
    return(
        <div className="row mt-5">
            <div className="col-md-4">

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                按地區搜索
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        新界
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { newT.map(region => {
                                return(<Dropdown.Item href="#/action-2">{region}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        九龍
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { kowloon.map(region => {
                                    return(<Dropdown.Item href="#/action-2">{region}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        香港
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { hkIsland.map(region => {
                                    return(<Dropdown.Item href="#/action-2">{region}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className="col-md-4">

                
            </div>
        </div>
    )
}

export default Filters;