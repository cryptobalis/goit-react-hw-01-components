import styled from 'styled-components';

export const Container = styled.div`
       margin-top: 40px;
       margin-bottom: 40px;
       margin-left: auto;
       margin-right: auto;
       width: 300px;
       box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
`;

export const Description = styled.div`
       background-color: #ffffff;
       padding-top: 30px;
       padding-bottom: 30px;
       display: flex;
       flex-direction: column;
       align-items: center;
       border-top-left-radius: 5px;
       border-top-right-radius: 5px;
`;

export const Avatar = styled.img`
       width: 130px;
       border-radius: 100%;
       backgroumd-color: rgb(227 244 244);
       margin-bottom: 20px;
`;

export const Name = styled.p`
       margin-top: 5px;
       margin-bottom: 5px;

       font-weight: 700;
       font-size: 28px;
       line-height: 1.142;
       letter-spacing: -0.04em;
`;

export const Tag = styled.p`
       margin-bottom: 10px;
       margin-top: 10px;
       color: gray;
`;

export const Location = styled.p`
       margin-bottom: 5px;
       margin-top: 5px;
       color: gray;
`;

export const List = styled.ul`
       display: flex;
       margin: 0;
       
       justify-content: space-around;
       background-color: rgb(227 244 244);
       border-top: 1px solid rgb(219, 216, 216);
       border-bottom-left-radius: 5px;
       border-bottom-right-radius: 5px;
`;

export const ListItems = styled.li`
       text-align: center;
       flex-direction: column;
       display: flex;
       padding-top: 15px;
       padding-bottom: 25px;
       width: 100px;
       &:not(:last-child) {
             border-right: 1px solid rgb(219, 216, 216);
       }
       
`;

export const Label = styled.span`
       color: gray;
       margin-bottom: 5px;
`;

export const Quantity = styled.span`
       font-weight: 700;
       font-size: 16px;
       line-height: 1.125;
       letter-spacing: -0.04em;
`;