import * as S from "./style"
import { I5, Coupon, Plus, Delete } from "../../assets/images"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import {Cookies} from 'react-cookie'

const Main = () => {

  const navigate = useNavigate();

  const [list, setList] = useState([]);  
  const [onUse, setOnUse] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [onDelete, setOnDelte] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [onSend, setOnSend] = useState(false);
  const [onSendSuccess, setOnSendSuccess] = useState(true);

  useEffect(()=>{
    axios.get("/coupons")
      .then(res => setList(res.data))
      .catch(err => console.log(err.response))
  },[])

  const modalRef = useRef();
  

  const handledCloseModal = (e) => {
    //if(onModal && (!modalRef.current.contains(e.target))) setOnModal(false)
  }

  useEffect(()=>{
    window.addEventListener('click', handledCloseModal);
    return () => {
      window.addEventListener('click', handledCloseModal);
    }
  },[])

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const deleteCoupon = () => {
    axios.delete(`/coupons/${list[selected].id}`)
      .then(res => {
        setOnModal(false)
        setSelected(null);
        Toast.fire({
          icon: "success",
          title: "삭제에 성공하였습니다.",
        },function(){ window.location.reload();});
      })
  }

  const cookies = new Cookies();

  const getCookie = (name) => {
    return cookies.get(name); 
  }
  
  const sendCoupon = () => {
    axios.patch(`/coupons?account-id=${getCookie("id")}&coupon-id=${list[selected].id}`)
      .then(res => {
        setOnSend(false);
        setOnSendSuccess(true);
      })
      .catch(err => {
        Toast.fire({
          icon: "error",
          title: "선물에 실패했습니다.",
        });
      })
  }

  return (
    <>
      <S.Body>
        <S.Title>내 쿠폰</S.Title>
        <S.CouponDiv>
          {list.map((i, idx) => {
            return (
              <S.Coupon key={i.id} onClick={()=> {
                  setOnModal(true);
                  setSelected(idx);
                }}>
                <S.CouponLeft>
                 <img src={i.image_url}/>
                 <S.Content>
                   <b>{i.name}</b>
                   <div>
                    <p>받은사람: {getCookie("id")}</p>
                    <p>{i.from}~{i.expired_at}</p>
                   </div>
                 </S.Content>
                </S.CouponLeft>
                <S.CouponRight>
                 <img src={Coupon}/>
                 <span>COUPON</span>
                </S.CouponRight>
              </S.Coupon>
            )
          })} 
          <S.Coupon onClick={()=>navigate("/post")}>
            <S.CouponLeft style={{background: "#767CFF"}}>
               <S.PlusDiv>
                 <img src={Plus}/>
               </S.PlusDiv>
            </S.CouponLeft>
            <S.CouponRight>
            </S.CouponRight>
          </S.Coupon>
        </S.CouponDiv>
      </S.Body>
      <S.BackgroundImg src={I5}/>
      {onModal ?
        <S.Filter>
          <div ref={modalRef}>
          {onDelete ?
            <S.DModal>
              <img src={Delete}/>
              <S.TDiv>
                <b>쿠폰을 삭제하시겠습니까?</b>
                <span>이 작업은 되돌릴 수 없습니다.</span>
              </S.TDiv>
              <S.MButtonDiv>
                <button onClick={()=>setOnDelte(false)} style={{backgroundColor: "#F6F6F6", color: "#545454"}}>취소</button>
                <button onClick={()=>deleteCoupon()} style={{backgroundColor: "#FF4747", color: "white"}}>삭제</button>
              </S.MButtonDiv>
            </S.DModal>
            :
            <>
            {onSend ?
              <S.DModal>
                <S.TDiv style={{marginTop: 15}}>
                  <b>다른 유저에게 선물을 주세요.</b>
                  <span>나의 쿠폰은 삭제됩니다.</span>
                </S.TDiv>
                <input placeholder="아이디를 입력해주세요."/>
                <S.MButtonDiv>
                  <button onClick={()=>setOnSend(false)} style={{backgroundColor: "#F6F6F6", color: "#545454"}}>취소</button>
                  <button onClick={()=>sendCoupon()} style={{backgroundColor: "#767CFF", color: "white"}}>보내기</button>
                </S.MButtonDiv>
              </S.DModal>
              :
              <>
              {onUse ?
                <S.UseImg src={list[selected].image_url}/>
                :
                <>
                {onSendSuccess ?
                  <div>
                    <S.ImageDiv>
                      <img src={list[selected].image_url}/>
                    </S.ImageDiv>
                    <S.Modal ref={modalRef}>
                      <S.MHeader>
                        <S.MHDiv>
                          <b>{list[selected].name}</b>
                          <span>{list[selected].expired_at}</span>
                        </S.MHDiv>
                      </S.MHeader>
                      <S.ButtonDiv>
                        <button onClick={()=>setOnUse(true)} style={{backgroundColor: "#767CFF", color: "white"}}>사용하기</button>
                        <button onClick={()=>setOnSend(true)} style={{backgroundColor: "white", color: "#767CFF", border: "1px solid #767CFF"}}>선물하기</button>
                        <button onClick={()=>setOnDelte(true)} style={{backgroundColor: "white", color: "#FF4747", border: "1px solid #FF4747"}}>삭제하기</button>
                      </S.ButtonDiv>
                    </S.Modal>
                  </div>
                  :
                  <S.DModal>
                    <S.TDiv>
                      <b>선물을 보냈습니다!</b>
                    </S.TDiv>
                    <S.LButton onClick={()=>{setOnSendSuccess(false); onModal(false)}}>확인</S.LButton>
                  </S.DModal>
                }
                </>
                }
              </>
              }
            </>
          }
          </div>
          </S.Filter>
        :
        <></>
      }
    </>
  )
}

export default Main