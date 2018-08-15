import React from 'react';
import styled from "styled-components";
import {space, width, fontSize, color, height, borderRadius} from 'styled-system';

// const Base = styled.View`
//              ${space}
//              ${width}
//              ${fontSize}
//              ${color}
//              ${height}
//              ${borderRadius}
// `
//
// const Text = styled.Text`
//                           ${space}
//                           ${width}
//                           ${fontSize}
//                           ${color}
//                           ${height}
// `
//
// const Row = Base.extend`
//                                       display: flex;
// flex-direction: row;
// `
//
// const Column = Base.extend`
//                display: flex;
// flex-direction: column;
// `
//
//
// const Box = Base.extend`
//             flex-grow: 0;
// flex-shrink: 1;
// flex-basis: auto;
//
// `
//
// const GrowBox = Base.extend`
//                 flex-grow: 1;
// flex-shrink: 0;
// flex-basis: auto;
// `

const LargeInput = styled.input`
box-shadow: 0 0 3px rgba(0,56,76,.1);
border: 1px solid #009BD8;
border-radius: 6px;
width: 200px;
font-size: 20px;
padding:12px;
margin-top: auto;
`

const Box = styled.button`
 flex-grow: 0;
 flex-shrink: 1;
 flex-basis: auto;
 background-color: dodgerblue;
 width:75px;
 font-size: 20px;
 
 
`

export {

    LargeInput,
    Box

}