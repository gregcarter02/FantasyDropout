import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Hr } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/PlayerData';


class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.setScoringFormat = this.setScoringFormat.bind(this);
    }

    setScoringFormat(val) {
        debugger;
        this.props.requestPlayerData(val);
    }


    componentDidMount() {
        this.props.requestPlayerData(true);
    }

    renderPlayFilters() {
        return (
            <Row>
                <Col>
                    <InputGroup>
                        <Input placeholder="username" />
                    </InputGroup>
                </Col>
                <Col>
                    <ButtonGroup>
                        <Button size="sm">PPR</Button>
                        <Button size="sm">Standard</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        );
    }

    renderPlayerTable() {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Player Name </th>
                        <th>Position </th>
                        <th>Position Rank </th>
                        <th>OverallRank </th>
                        <th>Bye Week </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.players.DraftRankings.map(ranking =>
                        <tr key={ranking.playerId}>
                            <td>{ranking.displayName}</td>
                            <td>{ranking.position}</td>
                            <td>{ranking.positionRank}</td>
                            <td>{ranking.overallRank}</td>
                            <td>{ranking.byeWeek}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <h1>Player List</h1>
                <Container>
                    {this.renderPlayFilters()}
                    <hr />
                    {this.renderPlayerTable()}
                </Container>
            </div>
        );
    }
}



export default connect(
    state => state.playerData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(PlayerList);
