import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import { IPlayerRanking, IPlayerRankingsProps } from "./types";


export default class PLayerRankingComponent extends Component<IPlayerRankingsProps> {
    constructor(props: IPlayerRankingsProps) {
        super(props);

        this.setScoringFormat = this.setScoringFormat.bind(this);
    }

    setScoringFormat(val: boolean) {
        this.props.getPlayerRankings(val);
    }


    componentDidMount() {
        this.props.getPlayerRankings(false);
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
            <h1>hello</h1>
            /*
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
                    */
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

