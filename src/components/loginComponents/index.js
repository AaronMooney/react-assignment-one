import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #999;
  font-size: 0.8rem;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  color: white;
  font-weight: 700;
  width: 100%;
  font-size: 0.8rem;
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

const Confirmation = styled.div`
  background-color: green;
`;


export { Form, Input, Button, Logo, Card, Error, Confirmation };