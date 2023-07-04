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
  div {
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
  }
  span{
    margin-left: 12px;
    font-weight: bold;
  }
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
`

export const CouponRight = styled.div`
  background-color: #767CFF;
  border-radius: 12px 0px 0px 12px;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 25px 0px;
  }
  span{
    font-weight: 400;
    font-size: 10px;
    color: white;
    padding: 0px 9px;
    padding-bottom: 10px;
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