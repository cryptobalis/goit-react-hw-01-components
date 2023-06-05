import styled from 'styled-components';

export const Container = styled.section`

       margin-left: auto;
       margin-right: auto;
       width: 300px;
       
       
`;

export const Title = styled.h2`
       padding-top: 20px;
       padding-bottom: 20px;

       text-align: center;
       font-weight: 700;
       font-size: 24px;
       line-height: 1.333;
       letter-spacing: -0.04em;
       text-transform: uppercase;
       color: #696969;

       border-top-left-radius: 3px;
       border-top-right-radius: 3px;
       background-color: #ffffff; 
`;

export const List = styled.ul`
       display: flex;
       
`;

export const ListItem = styled.li`
       padding-top: 10px;
       padding-bottom: 10px;
       text-align: center;
       width: 60px;  
       background-color: #9370DB;
       &:not(:last-child) {
              border-right: 1px solid rgb(219, 216, 216);
        }

       &:first-child {
              border-bottom-left-radius: 3px;
       }
       &:last-child {
              border-bottom-right-radius: 3px;
       }

`;

export const Label = styled.span`
      display: block;
      margin-bottom: 10px;

`;

export const Percentage = styled.span`
      

`;