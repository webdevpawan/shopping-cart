import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

function Filters() {
    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
    } = CartState();

    // console.log(byStock, byFastDelivery, sort, byRating,searchQuery)
    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span>
                <Form.Check
                    label="Ascending"
                    name='group1'
                    type='radio'
                    id='inline-1'
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Descending"
                    name='group1'
                    type='radio'
                    id='inline-2'
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Include Out Of Stock"
                    name='group1'
                    type='checkbox'
                    id='inline-3'
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    label="Fast Delivery"
                    name='group1'
                    type='checkbox'
                    id='inline-3'
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_DELIVERY",
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: "10px" }}>Rating :</label>
                <Rating rating={byRating} Style={{ cursor: "pointer" }} onClick={(i) => productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1
                })} />
            </span>
            <Button variant='light'
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >Clear Filters</Button>
        </div>
    )
}

export default Filters