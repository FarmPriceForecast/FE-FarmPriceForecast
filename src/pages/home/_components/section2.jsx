import React from 'react';

const Section2 = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F2F2F2]">
      {/* 초기 화면 */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-20 text-center text-[#197A52]">슬기로운 농촌생활</h1>
        <div className="flex justify-around w-4/5">
          <div className="max-w-xs mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">자연스러운 대화</h2>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">"스마트팜으로 농사 지으면 뭐가 좋아?"</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">"유기농 농작법을 도입할 때 주의해야 할 점은 무엇인가요?"</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">“다수확 농작법을 사용할 때 필요한 주요 기술과 도구는 뭐야?”</p>
          </div>
          <div className="max-w-xs mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">농산물 가격 예측</h2>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">"내일 사과 가격이 얼마일 것 같아?"</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">"요즘 시금치가 많이 비싸진 것 같은데, 다음 달에는 어떨 것 같아?"</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">“오늘의 고구마 1kg 가격을 알려줘”</p>
          </div>
          <div className="max-w-xs mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">농산품 관련 최근 뉴스</h2>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">“최근 생강 관련 뉴스를 보여줘”</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">“요즘 벼 관련 이슈가 있어?”</p>
            <p className="mt-2 bg-white p-3 rounded-lg shadow max-w-xs">“사과 이슈에 대해 알려줘”</p>
          </div>
        </div>
      </div>
      {/* 텍스트 입력창 */}
      <div className="p-4 px-60 bg-[#F2F2F2]">
        <input
          type="text"
          placeholder="원하는 질문을 입력하세요."
          className="w-full p-2 border rounded-xl"
        />
      </div>
    </div>
  );
};

export default Section2;
