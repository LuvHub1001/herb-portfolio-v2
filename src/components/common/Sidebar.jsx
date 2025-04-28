function Sidebar() {
  return (
    <div>
      <div className="w-[280px] h-screen bg-[#3C7EEB] text-white">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="mt-10 text-2xl font-bold">DongYeop Lee</div>
          <div className="w-[150px] h-[150px] mt-10 ">
            <img
              className="rounded-4xl"
              src="/images/취업사진.jpg"
              alt="이미지"
            />
          </div>

          <div className="mt-20 text-center">
            <div>주니어 프론트엔드 개발자 이동엽입니다.</div>
            <div>방문해주셔서 감사합니다.</div>
          </div>

          <div className="flex flex-row h-15 mt-1 text-center justify-center gap-5 items-center">
            <div className="flex w-[40px] h-[40px] bg-white rounded-4xl justify-center items-center cursor-pointer">
              <a href="https://github.com/LuvHub1001" target="_blank">
                <img className="w-[30px] h-[30px]" src="/images/github.svg" />
              </a>
            </div>
            <div className="flex w-[40px] h-[40px] bg-white rounded-4xl justify-center items-center cursor-pointer">
              <a href="https://herb-blog.vercel.app" target="_blank">
                <img className="w-[30px] h-[30px]" src="/images/blog.svg" />
              </a>
            </div>
          </div>
          <div className="flex border-1 w-[85%] mt-5 border-[#3774D9]"></div>

          <div className="flex flex-col mt-5 text-center items-center gap-6">
            <div className="about-me flex items-center gap-1 text-[20px]">
              <span className="cursor-pointer">About Me</span>
            </div>
            <div className="about-me flex items-center gap-1 text-[20px]">
              <span className="cursor-pointer">Portfolio</span>
            </div>
            <div className="about-me flex items-center gap-1 text-[20px]">
              <span className="cursor-pointer">Resume</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
