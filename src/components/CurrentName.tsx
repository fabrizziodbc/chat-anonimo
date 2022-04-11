import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeName } from '../store/slices/user';
const CustomName = styled.input`
  font-size: 16px;
  font-weight: bold;
  color: #4d5082;
  border: none;
`;
const CurrentName = () => {
  const { name } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <CustomName
        value={name}
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
    </>
  );
};

export default CurrentName;
