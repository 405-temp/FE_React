import { Link } from 'react-router-dom';
import './kakaoBtn.scss';

const KakaoBtn = () => {
  return (
    <Link
      className="kakao_login_btn"
      to={`https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=https://rnts-fe-gnyz.vercel.app/login/oauth2/code/kakao&client_id=3791f336642b43c859459e063130cb5a`}>
      카카오로 로그인하기
    </Link>
  );
};

export default KakaoBtn;
