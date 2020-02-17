import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GetImage from './GetImage'

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    color: palevioletred;
    border-radius: 3px;
`;

const ResultsContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`;

const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2em;
    margin: 2em;
`;

class GetResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    render() {
        return (
            <ResultsContainer>
                <Button
                    onClick={this._seeResults}>See Artwork
                </Button>
                <StyledList>
                    {
                        this.state.results.map(result => (
                            <StyledListItem>
                                {/* <a href={result.imageUrl}>
                                    {result.title}
                                </a> */}
                                <GetImage imageUrl={result.imageUrl}/>
                                <p>{result.title}</p>
                            </StyledListItem>
                        ))
                    }
                </StyledList>
            </ResultsContainer>

        );
    }

    _seeResults = () => {

        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${this.props.searchTerm}`)
            .then(response => {
                const resultArray = [];
                for (let objectID of response.data.objectIDs.slice(0, 5)) {
                    console.log(objectID);
                    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
                        .then(response => {
                            resultArray.push({
                                title: response.data.title,
                                imageUrl: response.data.primaryImageSmall
                            })
                            console.log(resultArray);
                            this.setState({
                                results: resultArray
                            })
                    
                        })
                    }
                
            })
            .catch(err => {
                console.log('No search results')
            })
    }
}

export default GetResults;