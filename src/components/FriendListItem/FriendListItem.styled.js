import styled from 'styled-components';

export const FriendListItem = styled.li`
       display: flex;
       margin-bottom: 10px;
       align-items: center;
       padding-top: 5px;
       padding-bottom: 5px;

       background-color: #ffffff; 
       border-radius: 4px;
       box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);

`;

export const StatusOn = styled.span`
       margin-left: 10px;
       margin-right: 10px;
       width: 14px;
       height: 14px;
       background-color: green;  
       border-radius: 7px;
`;

export const StatusOff = styled.span`
       margin-left: 10px;
       margin-right: 10px;
       width: 14px;
       height: 14px; 
       border-radius: 7px;
       background-color: red; 

`;

export const Avatar = styled.img`

`;

export const Name = styled.p`
      margin-left: 15px;

      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.125;
      letter-spacing: -0.01em;
`;