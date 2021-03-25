import styled, { css } from 'styled-components'

//const cardBackground = '#E91E63';
const cardBackground = 'white';

export const PostCardGridContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
`;

export const PostCardDiv = styled.div`
    background: ${cardBackground};
    width: 300px;
    //border: 1px solid ${cardBackground};
    border: none;
    border-radius: 5px;
    //box-shadow: 0px 0px 10px 0px gray;
    box-shadow: 0px 2px 3.84px 0.25px gray;
    text-align: center;

    .post-cover {
        display: block;
        height: 168px;
        width: 100%;
        box-shadow: 0px 2px 20px 0.25px gray inset;
        background-position: center center;
        background-size:     cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        //border-top-left-radius: 3px;
        //border-top-right-radius: 3px;
    }
    
    a.card-title {
        display: block;
        color: #E91E63;        
    }

    .card-date {
        float: right;
        color: #999;
        //color: whitesmoke;
        padding: 9px;
    }

    .card-description {
        text-align: start;
        font-size: 18px;
        margin-left: 10px;

        p {
            max-width: 92%;
            margin: 0;
        }
    }
`;