import { useNavigate } from "react-router-dom";

function Introduce() {
  const navigate = useNavigate();

  return (
    <div className="min-w-full h-100 bg-[#FAFAFA]">
      <div className="flex h-[100%] items-center justify-between">
        <div className="text-area">
          <p className="text-4xl font-bold mb-5">이동엽</p>
          <p className="text-[24px] text-gray-400 mb-5">
            주니어 프론트엔드 개발자
          </p>
          <div className="text-[16px] mb-5">
            <p>저는 주니어 프론트엔드 개발자입니다.</p>
            <p>
              진행했던 프로젝트와 학습 내용은 포트폴리오와 온라인 이력서를
              확인해주세요!
            </p>
          </div>
          <div className="flex gap-5">
            <button
              className="h-10 w-30 rounded-[8px] text-white font-bold bg-[#3C7EEB] cursor-pointer"
              onClick={() => navigate("/portfolio")}
            >
              포트폴리오
            </button>
            <button
              className="h-10 w-30 rounded-[8px] text-white font-bold bg-gray-500 cursor-pointer"
              onClick={() => navigate("/resume")}
            >
              온라인 이력서
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
