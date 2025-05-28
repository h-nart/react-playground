import React from "react";
import classNames from "classnames";
import css from './App.module.css';
import styled from 'styled-components';

class Conditionals extends React.Component {
    render() {
        return (
          <div className={classNames('test', {'true2': true, 'true': true, 'false': false})}>Conditional Test</div>
        );
    }
}

function ClassNameTest() {
    return (<div className={css.appLogo}>className Test</div>);
}

function StyledComponent (props) {
    const StyledDiv = styled.div`
        background: ${props.color};
        width: 200px;
        height: 200px;
        &:hover {
            background: #61dafb;
        }
    `;
    return <StyledDiv>Styled Div</StyledDiv>;
}

export {Conditionals, ClassNameTest, StyledComponent};