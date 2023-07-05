import { styled } from "styled-components";

export const Body = styled.div`
  background-color: #fafafa;
`

export const Div = styled.div`
  background-color: white;
  width: 1000px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 0.5px;
  margin: 40px 0;
  width: 453px;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span{
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 11px;
    width: 453px;
    height: 45px;
    background-color: #F6F6F6;
    padding: 8px 16px;
  }
  input {
    font-size: 14px;
    border: 0;
    outline: 0;
    width: 100%;
    font-weight: 400;
    background-color: rgba(0,0,0,0);
  }
  input::placeholder {
    color: #A1A1A1;
    font-weight: 400;
  }
`

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 453px;
  span{
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }
  input{
    visibility: hidden;
    position: absolute;
  }
`

export const InputImage = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6F6F6;
  width: 150px;
  height: 150px;
  border-radius: 12px;
`

export const Image = styled.img`
  cursor: pointer;
  background-color: #F6F6F6;
  width: 150px;
  height: 150px;
  border-radius: 12px;
`

export const ButtonDiv = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  height: 45px;
  width: 477px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin-bottom: 15px;
`