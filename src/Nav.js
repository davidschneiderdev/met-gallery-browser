import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const LinkList = styled.ul`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const StyledNavItem = styled.li`
    text-decoration: none;
    list-style: none;
    margin: 1em;
`

export default function Nav({links}) {
    return (
        <div>
            <LinkList>
                {
                    links.map((item, index) => {
                        return <StyledNavItem 
                        key={index}>
                            <Link to={item.path}>{item.text}</Link>
                        </StyledNavItem>
                    })
                }
            </LinkList>
        </div>
    );
}