import styled from "styled-components";

function ProductInfo({link,feature,name,kind,color,price,}){ //사진 주소,특징,이름,종류,색상,가격을 받고 특징은 있으면 출력력
    return(
        <ProductBox>
            <ProductImg src={link}/>
            {feature && <Feature>{feature}</Feature>}
            <ProductName>{name}</ProductName>
            <ProductKind>{kind}</ProductKind>
            <ProductKind>{color}개 색상</ProductKind>
            <ProductPrice>{price}원</ProductPrice>
        </ProductBox>
    )
}

const ProductBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.4;
`
const ProductImg=styled.img`
    width: 400px;
    height: 400px;
`
const Feature=styled.p`
    color: #db300a;
    font-family: Pretendard;
    font-weight: 550;
    margin-top: 20px;
    margin-bottom: 0;
`
const ProductName=styled.p`
    color: black;
    font-family: Pretendard;
    font-weight: 550;
    margin-top: 20px;
    margin-bottom: 0;
`
const ProductKind=styled.p`
    color: #7a7878;
    font-family: Pretendard;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 0;
`
const ProductPrice=styled.p`
    color: black;
    font-family: Pretendard;
    font-weight: 550;
    margin-top: 30px;
`

export default ProductInfo;