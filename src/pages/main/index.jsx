import * as S from "./style"
import { I5, Coupon, Plus } from "../../assets/images"

const Main = () => {
  return (
    <>
      <S.Body>
        <S.Title>내 쿠폰</S.Title>
        <S.CouponDiv> 
         <S.Coupon>
           <S.CouponLeft>
            <img src="https://img.cjthemarket.com/images/file/product/038/20230310151735440.jpg?SF=webp&RS=550x550"/>
            <span>황금 올리브 치킨</span>
           </S.CouponLeft>
           <S.CouponRight>
            <img src={Coupon}/>
            <span>2023-07-04 ~2024-07-04</span>
           </S.CouponRight>
         </S.Coupon>
         <S.Coupon>
           <S.CouponLeft style={{background: "#767CFF"}}>
              <div>
                <img src={Plus}/>
              </div>
           </S.CouponLeft>
           <S.CouponRight>
           </S.CouponRight>
         </S.Coupon>
        </S.CouponDiv>
      </S.Body>
      <S.BackgroundImg src={I5}/>
    </>
  )
}

export default Main