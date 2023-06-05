import styled from 'styled-components';

export const TransactionHistory = styled.table`
       margin-top: 40px;
       margin-bottom: 40px;
       margin-left: auto;
       margin-right: auto;
       width: 600px;
       box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
       border-radius: 3px; 
`;

export const Head = styled.thead`      
`;

export const TrHead = styled.tr`    
`;

export const ThHead = styled.th`
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #5F9EA0;   
`;

export const Body = styled.tbody`
        text-align: center;   
`;

export const TrBody = styled.tr`
    background-color: #B0E0E6;
    
    &:nth-child(2n) {
         background-color: #ADD8E6;
}     
`;

export const TdBody = styled.td`
       padding-top: 10px;
       padding-bottom: 10px;  
`;

