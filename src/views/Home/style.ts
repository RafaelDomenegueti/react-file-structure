import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background: ${({ theme }) => theme.background};
    background-position: center;
    background-size: cover;
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.palette.font};
    text-align: center;
`;

export const Quotation = styled.h2`
    font-family: ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.palette.font};
    margin: 0px;
`;

export const QuotationContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
    padding: 2%;
    padding-bottom: 80px;
    padding-top: 80px;
    border-radius: ${({ theme }) => theme.borderRadius};

    backdrop-filter: blur(15px) saturate(90%);
    -webkit-backdrop-filter: blur(15px) saturate(90%);
    background-color: ${({ theme }) => theme.palette.primary};
`;
