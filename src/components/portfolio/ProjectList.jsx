function ProjectList() {
  return (
    <div className="mt-20 ml-40 grid grid-cols-2 gap-10">
      <div className="project1 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
        <div className="project1-image flex h-full w-[40%] justify-center items-center">
          <img className="w-full h-full" src="/images/blog_fe.png" />
        </div>
        <div className="project1-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
          <p className="text-[20px] font-bold mb-3">herb-blog-frontend</p>
          <div className="text-[16px] mb-2">
            <p>개인 블로그 FrontEnd 영역을 구현하였고,</p>
            <p>chart.js 및 toast-ui-editor를 활용해</p>
            <p>깔끔한 반응형 UI를 제공합니다.</p>
          </div>

          <div className="text-[14px] text-gray-600 mb-4">
            <p>#개인 프로젝트</p>
            <p>#블로그 제작(FE)</p>
          </div>
        </div>
      </div>
      <div className="project2 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
        <div className="project2-image flex h-full w-[40%] justify-center items-center">
          <img className="w-full h-full" src="/images/blog_be.png" />
        </div>
        <div className="project2-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
          <p className="text-[20px] font-bold mb-3">herb-blog-backend</p>
          <div className="text-[16px] mb-2">
            <p>개인 블로그 BackEnd 영역을 구현하였고,</p>
            <p>MySQL과 TypeORM을 활용해</p>
            <p>DB의 의존성을 최소화하였습니다.</p>
          </div>

          <div className="text-[14px] text-gray-600 mb-4">
            <p>#개인 프로젝트</p>
            <p>#블로그 제작(BE)</p>
          </div>
        </div>
      </div>
      <div className="project3 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
        <div className="project3-image flex h-full w-[40%] justify-center items-center">
          <img className="w-full h-full" src="/images/image-server.png" />
        </div>
        <div className="project3-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
          <p className="text-[20px] font-bold mb-3">herb-image-server</p>
          <div className="text-[16px] mb-2">
            <p>
              개인 프로젝트의 이미지 파일이 저장되게끔 AWS의 S3 버킷과
              연동하였습니다.
            </p>
            <p>EC2 환경에서 PM2 등록하였습니다.</p>
          </div>

          <div className="text-[14px] text-gray-600 mb-4">
            <p>#개인 프로젝트</p>
            <p>#블로그 제작(FE)</p>
          </div>
        </div>
      </div>
      <div className="project4 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
        <div className="project4-image flex h-full w-[40%] justify-center items-center">
          <img className="w-full h-full" src="/images/portfolio-blog.png" />
        </div>
        <div className="project4-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
          <p className="text-[20px] font-bold mb-3">herb-blog-frontend</p>
          <div className="text-[16px] mb-2">
            <p>개인 블로그 FE영역을 구현하였고,</p>
            <p>chart.js 및 toast-ui-editor를 활용해</p>
            <p>깔끔한 반응형 UI를 제공합니다.</p>
          </div>

          <div className="text-[14px] text-gray-600 mb-4">
            <p>#개인 프로젝트</p>
            <p>#블로그 제작(FE)</p>
          </div>
        </div>
      </div>
      <div className="project5 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
        <div className="project5-image flex h-full w-[40%] justify-center items-center">
          <img className="w-full h-full" src="/images/portfolio-blog.png" />
        </div>
        <div className="project5-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
          <p className="text-[20px] font-bold mb-3">herb-blog-frontend</p>
          <div className="text-[16px] mb-2">
            <p>개인 블로그 FE영역을 구현하였고,</p>
            <p>chart.js 및 toast-ui-editor를 활용해</p>
            <p>깔끔한 반응형 UI를 제공합니다.</p>
          </div>

          <div className="text-[14px] text-gray-600 mb-4">
            <p>#개인 프로젝트</p>
            <p>#블로그 제작(FE)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
