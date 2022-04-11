import styled from 'styled-components';
const SearchBarStyled = styled.input`
  width: 260px;
  font-size: 16px;
  font-weight: bold;
  color: #4d5082;
`;

const SearchBar = () => {
  return <SearchBarStyled placeholder='Buscar usuario/grupo...' />;
};

export default SearchBar;
