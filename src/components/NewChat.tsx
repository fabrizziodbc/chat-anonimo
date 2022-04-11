import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
const Button = styled.button`
  width: 25px;
  height: 25px;
  font-size: 18px;
  color: #f5f5f4;
  background-color: #5d59d8;
  border-radius: 50px;
  border: none;
  &:hover {
    background-color: #999a9b;
    color: black;
  }
  &:active {
    color: #f5f5f4;
    background-color: #5d59d8;
  }
`;
const NewChat = () => {
  return (
    <Container>
      <Title>New Chat</Title>
      <Button onClick={() => console.log('agregar')}>+</Button>
    </Container>
  );
};

export default NewChat;
