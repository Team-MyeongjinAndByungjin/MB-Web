import styled from "styled-components"

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #FCFCFC;
`

export const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 0.5px;
  width: 1075px;
  margin: 40px auto;
`

export const CouponDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1075px;
  :nth-child(3n) {
    margin-right: 0;
  }
`

export const Coupon = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 35px;
  margin-bottom: 20px;
` 

export const CouponLeft = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0px 12px 12px 0px;
  width: 260px;
  padding: 26px 11px;
  img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
  span{
    margin-left: 12px;
    font-weight: bold;
  }
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: end;
  b {
    font-size: 16px;
  }
  p {
    font-size: 13px;
  }
`

export const PlusDiv = styled.div`
  background-color: white;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 28px;
    height: 28px;
  }
`

export const CouponRight = styled.div`
  background-color: #767CFF;
  border-radius: 12px 0px 0px 12px;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 31px 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  span{
    font-weight: 390;
    font-size: 12px;
    color: white;
    padding: 0px 9px;
    padding-bottom: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
`

export const BackgroundImg = styled.img`
  position: fixed;
  bottom: 0;
  width: 321px;
  right: 0px;
`

export const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const  Modal = styled.div`
  background-color: white;
  width: 360px;
  padding: 20px;
  border-radius: 12px;
`

export const MHeader = styled.div`
  margin-top: 10px;
`

export const MHDiv = styled.div`
  display: flex;
  flex-direction: column;
  b{
    font-size: 20px;
  }
  span {
    font-size: 12px;
    color: #A1A1A1;
  }
`

export const ImageDiv = styled.div`
  margin-bottom: 50px;
  width: 360px;
  padding: 0 20px;
  display: flex;
  justify-content: end;
  img {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.1);
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  button {
    border-radius: 12px;
    font-size: 12px;
    height: 40px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 15px;
  }
`

export const DModal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 330px;   
  border-radius: 12px;
  padding: 20px 35px;
  img {
    width: 33px;
  }
  input {
    margin-top: 25px;
    border: 0;
    height: 44px;
    background-color: #F6F6F6;
    width: 100%;
    border-radius: 12px;
    padding: 4px 12px;
    outline: 0;
  }
  ::placeholder {
    color: #A1A1A1;
  }
`

export const TDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  b{
    font-size: 20px;
  }
  span{
    font-weight: bold;
    font-size: 12px;
    color: #A1A1A1;
  }
`

export const MButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  button {
    font-weight: bold;
    width: 122px;
    border-radius: 8px;
    height: 43px;
  }
`

export const UseImg = styled.img`
  width: 300px;
`

export const LButton = styled.button`
  font-weight: bold;
  width: 100%;
  border-radius: 8px;
  height: 43px;
  color: white;
  background-color: #767CFF;
`