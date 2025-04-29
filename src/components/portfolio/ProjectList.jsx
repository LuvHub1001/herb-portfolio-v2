import { useNavigate } from "react-router-dom";

function ProjectList() {
  const navigate = useNavigate();

  const projectTitleArr = [
    "herb-blog-frontend",
    "herb-blog-backend",
    "herb-image-server",
    "herb-culture",
    "algorithm",
  ];

  return (
    <>
      <div className="mt-20 ml-40">
        <p className="text-2xl font-bold">닐리리맘보</p>
      </div>

      <div className="mt-5 ml-40 grid grid-cols-2 gap-10">
        <div className="project1 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl">
          <div className="project1-image flex h-full w-[40%] justify-center items-center">
            <img
              className="w-full h-full cursor-pointer"
              src="/images/blog_fe.png"
              onClick={() => navigate(`/portfolio/${projectTitleArr[0]}`)}
            />
          </div>
          <div className="project1-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
            <p className="text-[20px] font-bold mb-3">
              <span
                className="cursor-pointer border-b-1"
                onClick={() => navigate(`/portfolio/${projectTitleArr[0]}`)}
              >
                herb-blog-frontend
              </span>
            </p>
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
            <img
              className="w-full h-full cursor-pointer"
              src="/images/blog_be.png"
              onClick={() => navigate(`/portfolio/${projectTitleArr[1]}`)}
            />
          </div>
          <div className="project2-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
            <p className="text-[20px] font-bold mb-3">
              <span
                className="cursor-pointer border-b-1"
                onClick={() => navigate(`/portfolio/${projectTitleArr[1]}`)}
              >
                herb-blog-backend
              </span>
            </p>
            <div className="text-[16px] mb-2">
              <p>개인 블로그 BackEnd 영역을 구현하였고,</p>
              <p>MySQL과 TypeORM을 활용하였습니다.</p>
              <p>EC2 환경에서 PM2 등록하였습니다.</p>
            </div>

            <div className="text-[14px] text-gray-600 mb-4">
              <p>#개인 프로젝트</p>
              <p>#블로그 제작(BE)</p>
            </div>
          </div>
        </div>
        <div className="project3 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
          <div className="project3-image flex h-full w-[40%] justify-center items-center">
            <img
              className="w-full h-full cursor-pointer"
              src="/images/image-server.png"
              onClick={() => navigate(`/portfolio/${projectTitleArr[2]}`)}
            />
          </div>
          <div className="project3-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
            <p className="text-[20px] font-bold mb-3">
              <span
                className="cursor-pointer border-b-1"
                onClick={() => navigate(`/portfolio/${projectTitleArr[2]}`)}
              >
                herb-image-server
              </span>
            </p>
            <div className="text-[16px] mb-2">
              <p>
                개인 프로젝트의 이미지 파일이 저장되게끔 AWS의 S3 버킷과
                연동하였습니다.
              </p>
              <p>EC2 환경에서 PM2 등록하였습니다.</p>
            </div>

            <div className="text-[14px] text-gray-600 mb-4">
              <p>#개인 프로젝트</p>
              <p>#이미지 서버 제작(S3)</p>
            </div>
          </div>
        </div>
        <div className="project4 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
          <div className="project4-image flex h-full w-[40%] justify-center items-center">
            <img
              className="w-full h-full cursor-pointer"
              src="/images/herb-culture.png"
              onClick={() => navigate(`/portfolio/${projectTitleArr[3]}`)}
            />
          </div>
          <div className="project4-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
            <p className="text-[20px] font-bold mb-3">
              <span
                className="cursor-pointer border-b-1"
                onClick={() => navigate(`/portfolio/${projectTitleArr[3]}`)}
              >
                herb-culture
              </span>
            </p>
            <div className="text-[16px] mb-2">
              <p>서울시 공공데이터를 활용하여,</p>
              <p>문화행사를 조회할 수 있는 기능을 제공</p>
              <p>반응형 UI를 제공합니다.</p>
            </div>

            <div className="text-[14px] text-gray-600 mb-4">
              <p>#개인 프로젝트</p>
              <p>#문화행사 정보 조회(FE)</p>
            </div>
          </div>
        </div>
        <div className="project5 flex w-135 h-50 border-1 border-[#EFEFEF] shadow-xl ">
          <div className="project5-image flex h-full w-[40%] justify-center items-center">
            <img
              className="w-full h-full cursor-pointer"
              src="/images/algorithm.png"
              onClick={() => navigate(`/portfolio/${projectTitleArr[4]}`)}
            />
          </div>
          <div className="project5-info h-full w-[60%] p-5 bg-[#EFEFEF] ">
            <p className="text-[20px] font-bold mb-3">
              <span
                className="cursor-pointer border-b-1"
                onClick={() => navigate(`/portfolio/${projectTitleArr[4]}`)}
              >
                algorithm / data-structure
              </span>
            </p>
            <div className="text-[16px] mb-2">
              <p>알고리즘과 자료구조에 대해 학습하였습니다.</p>
              <p>자료구조는 직접 구현하였고,</p>
              <p>알고리즘은 문제 풀이를 통해 익혔습니다.</p>
            </div>

            <div className="text-[14px] text-gray-600 mb-4">
              <p>#개인 학습</p>
              <p>#알고리즘, 자료구조(JS)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
