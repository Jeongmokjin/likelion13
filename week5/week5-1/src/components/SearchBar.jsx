import styled from "styled-components";

function SearchBar(){
    return(
        <>
        <SeerchBox>
            <SearchImg src="public/media/돋보기 아이콘.png"/>
            <Search type="text" placeholder="키워드를 입력하세요."/>
            <SearchButton>→</SearchButton>
        </SeerchBox>
        </>
    )
}

const SeerchBox=styled.div`
    display: flex;
    align-items: center;
    width: 420px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #1C1C1C;
    margin-left: 0;
    margin-top: 10px;
    
`
const SearchImg=styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
`

const Search=styled.input`
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;

    &::placeholder{
        color: #FEFEFE;
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.98px;
        text-align: left;
    }
`

const SearchButton=styled.button`
    display: flex;
    align-items: center;
    width: 31px;
    height: 31px;
    flex-shrink: 0;
    background-color: #FEFEFE;
    border-radius: 50%;
    margin-right: 10px;

    color: #1C1C1C;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export default SearchBar;