import React, { Component } from 'react';


class Navbar extends Component {

    render(){
        return (
            <Navbar>
                <Navbar.Brand href="#home">미세미세</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        React-redux project
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar;