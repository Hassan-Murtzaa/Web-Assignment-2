import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class Task1 extends Component {
    list = [];
    prior_List = [];

    constructor() {
        super();
        this.textInput = React.createRef();
        this.state = {
            items: this.list,
            prior: "Priority",
            priorities: this.prior_List,
            show: "true"
        };
    }

    add_Item = () => {
        let entry = this.textInput.current.value;
        let entry2 = this.state.prior;

        if (entry === "" || entry2 === "Priority") {
            return;
        }

        this.textInput.current.value = "";      // reset to default input
        this.setState({ prior: "Priority" })    // reset to default priority

        let val = this.state.items.slice();     // getting index of the list
        val.push(entry);                        // entering text to the list on the index find above
        this.setState({ items: val });          // updating the items now

        let val2 = this.state.priorities.slice();
        val2.push(entry2);
        this.setState({ priorities: val2 });
    }

    remove_Item = (index) => {
        let data = [...this.state.items];
        data.splice(index, 1);
        this.setState({ items: data });

        let data2 = [...this.state.priorities];
        data2.splice(index, 1);
        this.setState({ priorities: data2 });
    }

    move_Top = (index) => {
        let data = [...this.state.items];
        data.unshift(data.splice(index, 1)[0]);
        this.setState({ items: data });

        let data2 = [...this.state.priorities];
        data2.unshift(data2.splice(index, 1)[0]);
        this.setState({ priorities: data2 });
    }

    set_Priority = (eventKey) => {
        this.setState({ prior: eventKey })
    }

    update_Priority = (index, eventKey) => {
        let data2 = [...this.state.priorities];
        data2[index] = eventKey;
        this.setState({ priorities: data2 });
    }

    render() {
        return (
            <>
                <div className="container my-5">
                    <Form>
                        <Row>
                            <Col xs={4}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Add item" ref={this.textInput} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <ButtonGroup>
                                    <DropdownButton as={ButtonGroup} onSelect={this.set_Priority} title={this.state.prior} variant="outline-dark" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="Low" >Low</Dropdown.Item>
                                        <Dropdown.Item eventKey="Medium" >Medium</Dropdown.Item>
                                        <Dropdown.Item eventKey="High" >High</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                                &nbsp;
                                <Button variant="primary" onClick={this.add_Item} >Add</Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                    <h1 style={{
                        fontFamily: "cursive",
                        fontWeight: "bold",
                        marginTop: "45px"
                    }}>Wish List</h1>
                </div>

                <div className="container my-5">
                    {this.state.items.map((my_Items, index) =>
                        <Row className='my-3' key={my_Items.toString()} >
                            <Col className='mb-3' xs="auto">
                                <Form.Control value={my_Items} disabled />
                            </Col>
                            <Col xs="auto" >
                                <Button variant="danger" onClick={() => this.remove_Item(index)}>Remove</Button>{' '}
                                <Button variant="warning" onClick={() => this.move_Top(index)}>Move to top</Button>{' '}
                                <ButtonGroup>
                                    <DropdownButton as={ButtonGroup} onSelect={(eventKey) => this.update_Priority(index, eventKey)} title={this.state.priorities[index]} variant="outline-dark" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="Low" >Low</Dropdown.Item>
                                        <Dropdown.Item eventKey="Medium" >Medium</Dropdown.Item>
                                        <Dropdown.Item eventKey="High" >High</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    )}
                </div >
            </>
        )
    }
}