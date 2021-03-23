import styled, { css } from 'styled-components'

    const cardBackground = '#E91E63';

export const PostCardGridContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
`;

export const PostCard = styled.div`
    background: ${cardBackground};
    width: 300px;
    border: 1px solid ${cardBackground};
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px gray;
    text-align: center;

    img.post-cover {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        width: 100%;
        height: 168px;
        display: block;
    }
    
    a.card-title {
        //color: #0070f3;
        color: white;
    }

    .card-date {
        float: right;
        //color: #999;
        color: whitesmoke;
        padding: 9px;
    }
`;