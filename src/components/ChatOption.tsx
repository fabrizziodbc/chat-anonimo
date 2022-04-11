import styled from 'styled-components';
import { RootState } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from '../store/slices/menu';
const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  p {
    color: #d6d7d6;
  }
  &:hover {
    p {
      color: #5d59d8;
    }
    background-color: #fefffe;
    border-left: solid 5px #5d59d8;
  }
`;
const ContainerSelected = styled(Container)`
  p {
    color: #5d59d8;
  }
  background-color: #fefffe;
  border-left: solid 5px #5d59d8;
`;

interface OptionName {
  name: string;
  tag?: string;
  check: boolean;
}

const ChatOption = ({ name, tag, check }: OptionName) => {
  const { currentOption } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const changeOptionHandler = () => {
    dispatch(changeOption({ option: name, tag }));
  };
  return name === currentOption ? (
    <ContainerSelected onClick={changeOptionHandler}>
      <p>
        {check ? '✔' : null} {name}
      </p>
    </ContainerSelected>
  ) : (
    <Container onClick={changeOptionHandler}>
      <p>
        {check ? '✔' : null} {name}
      </p>
    </Container>
  );
};

export default ChatOption;
