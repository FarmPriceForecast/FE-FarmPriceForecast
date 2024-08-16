import React from 'react';
import bgimg from '../../../assets/images/login.jpg';

const Section1 = () => {
  return (
    <div
      className="w-3/5 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="flex flex-col items-center justify-center h-full p-20 bg-opacity-60 bg-white">
        <h1 className="text-4xl mb-4 text-[#197A52]" style={{ fontFamily: 'EF_jejudoldam' }}>
          슬기로운 농촌생활
        </h1>
        <p className="text-lg">
          '슬기로운 농촌생활'은 농업인과 농업에 관심 있는 분들을 위한 종합 정보 제공하는 AI입니다. 농산물 가격 예측, 최신 농업 뉴스, 그리고 농작물 재배와 관련된 모든 정보를 실시간으로 제공합니다.
        </p>
      </div>
    </div>
  );
};

export default Section1;
