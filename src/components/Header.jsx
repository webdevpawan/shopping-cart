import React from 'react'
import { Container, Dropdown, FormControl, Navbar, Nav, Badge,Button} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai"

function Header() {
    const {
        state: { Cart },
        dispatch,
        productDispatch
    } = CartState();
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className='m-auto'
                        onChange={(e) => {
                            productDispatch({
                              type: "FILTER_BY_SEARCH",
                              payload: e.target.value,
                            });
                          }}
                    >
                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle >
                            <FaShoppingCart color='white' fontSize='25px' />
                            <Badge>{Cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            {Cart.length > 0 ? (
                                <>
                                    {Cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>₹ {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }
                                            />
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header