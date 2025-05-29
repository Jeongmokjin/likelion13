import styled from "styled-components";
import ProductInfo from "../components/ProductInfo";
import { useState } from "react";
 //key는 쓰라고 경고 떠서 쓰는데 이유가 뭐지...
 //정렬 토글을 따로 분리하려 했는데 선택한 분류기준을 알려주려면 같은 파일에 있어야해서 합침,
 //분류해서 전달하는 방식이 있나?
function Products({data}){ 
  const options=["추천순","높은 가격순","낮은 가격순"]; //분류 기준
    const [open,setOpen]=useState(false); //토글 열림,닫힘 변수
    const [select,setSelect]=useState("추천순"); //분류 기준 변수

    function Drop(){ //버튼 클릭하면 현재 상태에 not해서 반대 상태로
      setOpen(!open);
    }

    function NowOption(value){ //기준 선택하면 기준 바뀌면서 토글 닫기
      setSelect(value);
      setOpen(!open);
    }

  let sortingProduct=data;  //데이터 정렬해서 담을 변수
  if(select !=="추천순"){ //기준이 기본이 아니면 실행
    sortingProduct=[...data].sort((a,b)=>{ //sort함수는 결과가 양수면 b,a순이고 음수면 a,b순으로 정렬
      return select==="높은 가격순" ? b.price - a.price : a.price - b.price  
    }); //높은 가격순이면 b-a를 반환->양수면(b가 a보다 크면) b,a -> 내림차순 정렬
  }

  return(
    <>
    <ConditionBar>
      <HowMany>상품 ({data.length})</HowMany>
      <DropBox>
        <DropButton onClick={Drop}>정렬 기준: {select} {open ? "∧":"∨"}</DropButton>
          {open && (
            <OptionBox>
              {options.map(option=>(
                <Option key={option} onClick={()=>NowOption(option)} now={select==option ? 1:0}>
                    {option}
                </Option>
              ))}
            </OptionBox>
          )}
      </DropBox>
    </ConditionBar>
    <ProductBox>
      {sortingProduct.map(product=>(
        <ProductInfo 
        key={product.id}
        link={product.link}
        feature={product.feature}
        name={product.name}
        kind={product.kind}
        color={product.color}
        price={product.price.toLocaleString()}/>
      ))}
    </ProductBox>
    </>
  )
}

const ProductBox=styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
`

const ConditionBar=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
`

const HowMany=styled.p`
    font-family: Pretendard;
    font-weight: 500;
    font-size: 25px;
`
const DropBox=styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 50px;
  flex-direction: column;
`
const DropButton=styled.button`
    display: flex;
    border: none;
    font-family: Pretendard;
    font-weight: 400;
    background-color: white;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`
const OptionBox=styled.ul`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    text-align: right;
    padding: 20px;
    padding-left: 0;
    font-family: Pretendard;
    width: 100px;
    margin-left: auto;
`

const Option=styled.li`
  list-style: none;
  justify-content: center;
  color: ${(props)=> ((props.now) ? "#c1bebe":"black")};
  cursor: ${(props)=> ((props.now) ? "not-allowed": "pointer")};

  &:hover{
    color: #6e6d6d;
  }
`

export default Products;