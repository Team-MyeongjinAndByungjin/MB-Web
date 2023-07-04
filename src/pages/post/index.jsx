import { useRef } from "react";
import * as S from "./style"
import { Calendar, Image } from "../../assets/images"
import { useNavigate } from "react-router-dom";

const Post = () => {

  const navigate = useNavigate();

  const imgInputRef = useRef(null);

  const handleImageClick = () => {
    imgInputRef.current.click();
  };

  return( 
    <S.Body>
      <S.Div>
        <S.ContentDiv>
          <S.Title>쿠폰 등록</S.Title>
          <S.ImageDiv>
            <span>이미지</span>
            <div onClick={handleImageClick}>
              <img src={Image}/>
            </div>
            <input type="file" ref={imgInputRef} accept="image/png, image/jpg, image/jpeg"/>
          </S.ImageDiv>
          <S.InputDiv>
            <span>이름</span>
            <div>
              <input name="password" placeholder="티켓 이름을 입력해주세요." type="password"/>
            </div>
          </S.InputDiv>
          <S.InputDiv>
            <span>가격</span>
            <div>
              <input name="password" placeholder="티켓 가격 입력해주세요." type="password"/>
            </div>
          </S.InputDiv>
          <S.InputDiv>
            <span>유효기간</span>
            <div>
              <span>2023-07-04</span>
              <img src={Calendar}/>
            </div>
          </S.InputDiv>
        </S.ContentDiv>
        <S.ButtonDiv>
          <S.Button onClick={()=>navigate(-1)} bgColor={"#A1A1A1"} color={"white"}>취소</S.Button>
          <S.Button bgColor={"#767CFF"} color={"white"}>등록</S.Button>
        </S.ButtonDiv>
      </S.Div>
    </S.Body>
  )
}

export default Post