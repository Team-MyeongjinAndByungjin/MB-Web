import { useRef, useState } from "react";
import * as S from "./style"
import { Image } from "../../assets/images"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Cookies } from "react-cookie";
import dayjs from "dayjs";

const Post = () => {

  const cookies = new Cookies();

  const getCookie = (name) => {
    return cookies.get(name); 
  }

  const navigate = useNavigate();

  const imgInputRef = useRef(null);

  const handleImageClick = () => {
    imgInputRef.current.click();
  };

  const [info, setInfo] = useState({
    name: "",
    price: null,
    image_url: "",
    expired_at: "",
    from: dayjs().format("YYYY-MM-DD")
  })

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

  function postCoupon() {
    const fd = new FormData();
    fd.append("image", imgInputRef.current.files[0]);
    console.log(info);

    const postContent = (image_url) => {
      axios.post("/coupons", {...info, price: Number(info.price), image_url: image_url})
      .then((res) => {
        Toast.fire({
            icon: "success",
            title: "등록에 성공하였습니다.",
        });
        navigate("/");
      })
      .catch((err) => {
        Toast.fire({
            icon: "error",
            title: "등록에 실패하였습니다.",
        });  
      })
    }

    if(info.name&&info.price&&info.expired_at&&imgInputRef.current.files[0]) {
      axios.post("/images", fd)
        .then(res=> {
          console.log(res.data.image_url)
          postContent(res.data.image_url);
        })
        .catch((err) => {
          Toast.fire({
              icon: "error",
              title: "등록에 실패하였습니다.",
          });  
        })
    }
  }

  const onChangeInfo = (e) => {
    const {name, value} = e.target;
    if(name === "price") {
      setInfo({...info, [name]: value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')})
    }
    else
      setInfo({...info, [name]: value})
  }

  const [imageSrc, setImageSrc] = useState('');

  const onUpload = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  }

  return( 
    <S.Body>
      <S.Div>
        <S.ContentDiv>
          <S.Title>쿠폰 등록</S.Title>
          <S.ImageDiv>
            <span>이미지</span>
            {imageSrc ?
              <S.Image src={imageSrc} onClick={handleImageClick}/>
              :
              <S.InputImage onClick={handleImageClick}>
                <img src={Image}/>
              </S.InputImage>
            }
            <input type="file" onChange={onUpload} ref={imgInputRef} accept="image/png, image/jpg, image/jpeg"/>
          </S.ImageDiv>
          <S.InputDiv>
            <span>이름</span>
            <div>
              <input value={info.name} onChange={(e)=>onChangeInfo(e)} name="name" placeholder="티켓 이름을 입력해주세요."/>
            </div>
          </S.InputDiv>
          <S.InputDiv>
            <span>가격</span>
            <div>
              <input value={info.price} onChange={(e)=>onChangeInfo(e)} name="price" placeholder="티켓 가격 입력해주세요."/>
            </div>
          </S.InputDiv>
          <S.InputDiv>
            <span>유효기간</span>
            <div>
              <input value={info.expired_at} onChange={(e)=>onChangeInfo(e)} name="expired_at" type="date"/>
            </div>
          </S.InputDiv>
        </S.ContentDiv>
        <S.ButtonDiv>
          <S.Button onClick={()=>navigate(-1)} bgColor={"#A1A1A1"} color={"white"}>취소</S.Button>
          <S.Button onClick={()=>postCoupon()} bgColor={"#767CFF"} color={"white"}>등록</S.Button>
        </S.ButtonDiv>
      </S.Div>
    </S.Body>
  )
}

export default Post