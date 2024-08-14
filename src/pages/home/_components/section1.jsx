import React, { useState } from 'react';

const Section1 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex flex-col h-full bg-white border-r-2 border-[#eaeaea] ${isSidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && <h1 className="text-xl font-bold">슬기로운 농촌생활</h1>}
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          {isSidebarOpen ? '←' : '→'}
        </button>
      </div>
      {isSidebarOpen && (
        <>
          <button className="p-2 bg-[#197A52] text-white m-4 rounded-xl">+ 새로운 대화</button>
          <div className="flex-grow overflow-y-auto border-t-2 border-[#eaeaea]">
            <div className="p-2">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">저장된 대화</p>
                <button className="text-sm text-[#197A52] rounded-md px-2 border border-[#197A52]">편집</button>
              </div>
              {/* 대화 목록 반복 렌더링 예시 */}
              <div className="p-2 mt-2 bg-white rounded shadow">
                사과 관련 가격 예측 및 뉴스
                <p className="text-xs text-[#197A52]">2024.07.15</p>
              </div>
              {/* 다른 대화 항목도 추가 가능 */}
            </div>
          </div>
          <div className="p-4 border-t-2 border-[#eaeaea]">
            <button className="flex items-center text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="8" r="4" stroke="black" stroke-width="2" fill="none" />
                <path d="M4 20c0-4 4-8 8-8s8 4 8 8" stroke="black" stroke-width="2" fill="none" />
              </svg>
              내 정보
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Section1;
