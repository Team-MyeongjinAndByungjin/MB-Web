import * as S from "./style"
import {I3, I4} from "../../assets/images"
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import {Cookies} from 'react-cookie';

const Signup = () => {

  const navigate = useNavigate();

  const [info, setInfo] = useState({account_id: "", password: ""});

  const cookies = new Cookies()
  const setCookie = (name, value, option) => {
    return cookies.set(name, value, {...option})
  }

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

  const signup = () => {
    if(info.account_id&&info.password) {
      axios.post("/users", info)
       .then((res) => {
          console.log(res);
          setCookie("token", res.data.token);
          navigate("/");
          Toast.fire({
            icon: "success",
            title: "회원가입에 성공하였습니다.",
          });
       })
       .catch((err) => {
           if(err.response){
               console.log(err.response.data);
               console.log(err.response.status);
               console.log(err.response.header);
           }
           Toast.fire({
               icon: "error",
               title: "회원가입 로그인에 실패하였습니다.",
           });
       })
    }
  }

  const changeInfo = (e) => {
    const {name, value} = e.target;
    setInfo({...info, [name]: value});
  }

  return(
    <S.Body>
      <S.Form>
        <S.Title>회원가입</S.Title>
        <S.InputDiv>
          <span>아이디</span>
          <div>
            <input name="account_id" onChange={(e)=>changeInfo(e)} placeholder="아이디를 입력해주세요."/>
          </div>
        </S.InputDiv>
        <S.InputDiv>
          <span>비밀번호</span>
          <div>
            <input name="password" onChange={(e)=>changeInfo(e)} placeholder="비밀번호를 입력해주세요." type="password"/>
          </div>
        </S.InputDiv>
        <S.ButtonDiv>
          <S.Button onClick={()=>signup()} bgColor={"#767CFF"} color={"white"}>회원가입</S.Button>
          <S.Button onClick={()=>navigate("/login")} bgColor={"#545454"} color={"#FFFFFF"}>로그인</S.Button>
        </S.ButtonDiv>
      </S.Form>
      <S.BackgroundImg src={I3} width={"438px"} left={"48px"}/>
      <S.BackgroundImg src={I4} width={"422px"} right={"18px"}/>
    </S.Body>
  )
}

export default Signup