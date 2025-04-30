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
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
          프로젝트
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectTitleArr.map((title, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full h-auto border-1 border-[#EFEFEF] shadow-xl"
          >
            <div className="project-image flex h-[200px] md:h-full w-full md:w-[40%] justify-center items-center">
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={`/images/${index === 0 ? "blog_fe" : index === 1 ? "blog_be" : index === 2 ? "image-server" : index === 3 ? "herb-culture" : "algorithm"}.png`}
                onClick={() => navigate(`/portfolio/${title}`)}
                alt={`${title} project`}
              />
            </div>
            <div className="project-info h-auto md:h-full w-full md:w-[60%] p-4 bg-[#EFEFEF]">
              <p className="text-[20px] font-bold mb-3">
                <span
                  className="cursor-pointer border-b-1"
                  onClick={() => navigate(`/portfolio/${title}`)}
                >
                  {title}
                </span>
              </p>
              <div className="text-[16px] mb-2 space-y-1">
                {index === 0 && (
                  <>
                    <p>개인 블로그 FrontEnd 영역을 구현하였고,</p>
                    <p>chart.js 및 toast-ui-editor를 활용해</p>
                    <p>깔끔한 반응형 UI를 제공합니다.</p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <p>개인 블로그 BackEnd 영역을 구현하였고,</p>
                    <p>MySQL과 TypeORM을 활용하였습니다.</p>
                    <p>EC2 환경에서 PM2 등록하였습니다.</p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p>개인 프로젝트의 이미지 파일이 저장되게끔</p>
                    <p>AWS의 S3 버킷과 연동하였습니다.</p>
                    <p>EC2 환경에서 PM2 등록하였습니다.</p>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p>서울시 공공데이터를 활용하여,</p>
                    <p>문화행사를 조회할 수 있는 기능을 제공</p>
                    <p>반응형 UI를 제공합니다.</p>
                  </>
                )}
                {index === 4 && (
                  <>
                    <p>알고리즘과 자료구조에 대해 학습하였습니다.</p>
                    <p>자료구조는 직접 구현하였고,</p>
                    <p>알고리즘은 문제 풀이를 통해 익혔습니다.</p>
                  </>
                )}
              </div>

              <div className="text-[14px] text-gray-600 space-y-1">
                {index === 0 && (
                  <>
                    <p>#개인 프로젝트</p>
                    <p>#블로그 제작(FE)</p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <p>#개인 프로젝트</p>
                    <p>#블로그 제작(BE)</p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p>#개인 프로젝트</p>
                    <p>#이미지 서버 제작(S3)</p>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p>#개인 프로젝트</p>
                    <p>#문화행사 정보 조회(FE)</p>
                  </>
                )}
                {index === 4 && (
                  <>
                    <p>#개인 학습</p>
                    <p>#알고리즘, 자료구조(JS)</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
