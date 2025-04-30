import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-3 left-3 z-50 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-[#3C7EEB] text-white hover:bg-[#2B5DB8] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-[280px] h-screen bg-[#3C7EEB] text-white z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex flex-col w-full items-center justify-center p-4">
          <div className="mt-8 text-xl font-bold">
            <span
              className="cursor-pointer hover:text-gray-200 transition-colors"
              onClick={() => navigate("/")}
            >
              DongYeop Lee
            </span>
          </div>
          <div className="w-[120px] h-[120px] mt-8">
            <img
              className="rounded-full object-cover w-full h-full"
              src="/images/취업사진.jpg"
              alt="프로필 이미지"
            />
          </div>

          <div className="mt-12 text-center text-sm">
            <div>주니어 프론트엔드 개발자 이동엽입니다.</div>
            <div>방문해주셔서 감사합니다.</div>
          </div>

          <div className="flex flex-row h-15 mt-3 text-center justify-center gap-4 items-center">
            <div className="flex w-[36px] h-[36px] bg-white rounded-full justify-center items-center cursor-pointer hover:bg-gray-200 transition-colors">
              <a
                href="https://github.com/LuvHub1001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/github.svg"
                  alt="GitHub"
                />
              </a>
            </div>
            <div className="flex w-[36px] h-[36px] bg-white rounded-full justify-center items-center cursor-pointer hover:bg-gray-200 transition-colors">
              <a
                href="https://herb-blog.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/blog.svg"
                  alt="Blog"
                />
              </a>
            </div>
          </div>
          <div className="flex border-1 w-[85%] mt-4 border-[#3774D9]"></div>

          <div className="flex flex-col mt-4 text-center items-center gap-4">
            <div className="about-me flex items-center gap-1 text-base">
              <span
                className="cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => navigate("/")}
              >
                About Me
              </span>
            </div>
            <div className="about-me flex items-center gap-1 text-base">
              <span
                className="cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => navigate("/portfolio")}
              >
                Portfolio
              </span>
            </div>
            <div className="about-me flex items-center gap-1 text-base">
              <span
                className="cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => navigate("/resume")}
              >
                Resume
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
