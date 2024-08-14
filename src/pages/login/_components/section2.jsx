import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Section2 = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="w-2/5 flex flex-col justify-center items-center p-20">
      <h2 className="text-2xl font-bold mb-6">반갑습니다!</h2>
      <p className="text-lg mb-4">대화를 하기 전에 로그인 해주세요.</p>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        className="mb-4 p-2 w-full border rounded"
      />
      <button onClick={handleLogin} className="bg-[#197A52] text-white p-2 rounded w-full">
        로그인
      </button>
      <p className="mt-4">
        계정이 존재하지 않습니까? <a href="/sign_up" className="text-[#197A52]">회원가입 하기</a>
      </p>
    </div>
  );
};

export default Section2;
