import React from 'react';
import styled from 'styled-components'

const Svg = styled.svg`
    width: 24px;
    height: 24px;
    xmlns: "http://www.w3.org/2000/svg";
    margin-right: 5px;
    margin-top: -10px;
    ellipse{
        transition: .5s;
    } 
`;

export class UserIcon extends React.Component {
    render() {
        return (
            <Svg>
                <g>
                    <ellipse ry="11.856533" rx="11.898729" id="svg_1" cy="11.964074" cx="12.012863" fill={this.props.color}/>
                    <path fill="#213245" stroke="null" id="svg_2" d="m8.746233,7.760144a3.414106,3.312464 0 0 1 6.828212,0l0,2.20831a3.414106,3.312464 0 0 1 -6.828212,0l0,-2.20831zm-4.552141,9.937393c0.569018,-1.656232 4.552141,-3.312464 6.828212,-3.312464l2.276071,0c2.276071,0 6.259194,1.656232 6.828212,3.312464l0,1.104155l-15.932495,0l0,-1.104155z"/>
                </g>
            </Svg>
        )
    }
}