import styled from "styled-components"

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
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
    background-color: rgba(0,0,0,0);
  }
  input::placeholder {
    color: #A1A1A1;
  }
`

export const ButtonDiv = styled.div`
  margin-top: 90px;
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

export const BackgroundImg = styled.img`
  position: fixed;
  bottom: 0;
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`