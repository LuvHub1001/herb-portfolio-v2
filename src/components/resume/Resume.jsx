function Resume() {
  return (
    <div>
      <div className="header flex w-full h-[150px] justify-center items-center bg-[#FAFAFA] text-2xl md:text-3xl font-bold">
        온라인 이력서
      </div>

      <div className="flex justify-center">
        <div className="inline-block h-auto mt-10 rounded-2xl shadow-2xl w-full md:w-auto">
          <div className="basic-info flex flex-col md:flex-row w-full md:w-[1200px] h-auto p-5 md:p-10 items-center border-b-1 border-gray-300">
            <div className="w-full md:w-[732px] h-auto md:h-[96px] p-5 text-center md:text-left">
              <p className="text-2xl md:text-4xl font-bold pb-3">이동엽 (LEE DONG YEOP)</p>
              <p className="text-gray-500">Junior FrontEnd Developer</p>
            </div>

            <div className="w-full md:w-[244px] h-auto md:h-[96px] pl-5 md:pl-10 pt-2.5 border-l-0 md:border-l-4 border-[#3C7EEB]">
              <p className="text-[12px]">☎️010-4161-7791</p>
              <p className="text-[12px]">📬dy7791@naver.com</p>
              <p className="text-[12px]">
                💻
                <a href="https://github.com/LuvHub1001" target="_blank" className="break-all">
                  https://github.com/LuvHub1001
                </a>
              </p>
              <p className="text-[12px]">🚩서울특별시 은평구</p>
            </div>
          </div>

          <div className="detail-info flex flex-col md:flex-row p-5 md:pl-10 w-full md:w-[1200px] h-auto md:h-[300px] items-center border-b-1 border-gray-300">
            <div className="image-area flex items-center mb-5 md:mb-0">
              <img src="/images/취업사진.jpg" className="w-[120px] md:w-[160px] h-[135px] md:h-[180px]" alt="프로필 사진" />
            </div>
            <div className="ment-area flex flex-col gap-1 md:ml-20 text-sm md:text-base">
              <p>
                학원에서 Java, Spring Framework 교육을 수강하여 본격적으로 웹
                개발에 입문하였습니다.
              </p>
              <p>
                인턴 생활을 하기 전, 부끄럽게도 저는 프론트엔드는 단순히 디자인
                영역이라고 생각했습니다.
              </p>
              <p>
                실제 현업에서 프로젝트를 진행할 때에 화면에 나타내야하는
                데이터를 핸들링하고,
              </p>
              <p>
                사용자의 편의성을 고려하면서 작업하는 과정에 매력을 느껴
                본격적으로 프론트엔드 개발자의 길을 걷게 되었습니다.
              </p>
              <p>
                평소 업무를 진행할 때에 실무에서 적용하지 못한 방법들은 로컬
                환경에서 구동해가며 실행 결과를 팀원들에게 공유하는 문화를
                즐깁니다.
              </p>
              <p>
                의사소통을 가장 중요하게 여깁니다. [기획자/디자이너] 분들과
                회의를 거쳐 조정이 필요한 부분들을 조율하고 피드백을 받아
              </p>
              <p>최선의 결과물을 내기 위해 노력합니다.</p>
            </div>
          </div>

          <div className="project-area mt-10 p-5 md:pl-10 w-full md:w-[1200px] items-center border-b-1 border-gray-300">
            <p className="text-2xl md:text-3xl pl-2 text-[#3C7EEB] font-bold border-l-4 border-[#3C7EEB]">
              <span>PROJECTS</span>
            </p>
            <div className="mt-10">
              <div className="project-title flex flex-col md:flex-row h-auto md:h-20 justify-between items-start md:items-center gap-2 md:gap-0">
                <span className="font-bold text-xl md:text-2xl">
                  Herb-Blog (FrontEnd & BackEnd)
                </span>
                <span className="text-[13px] text-gray-500 break-all">
                  https://herb-blog.vercel.app
                </span>
              </div>
              <div className="project-content flex flex-col gap-2 mt-5 md:mt-0">
                <p>
                  나의 일상을 기록하고, 학습한 내용을 정리할 공간이 필요하다
                  싶어서 블로그 운영을 고민했었습니다.
                </p>
                <p>
                  시중에 나와있는 플랫폼을 사용하기보다, 의미를 부여해서 나만을
                  위한 블로그를 만들어보자라는 취지에서 작업하였습니다.
                </p>
                <p>
                  평소 학습해왔던 기술과, 적용해보고자 하는 기술들을 최대한
                  활용하였고, 트러블 슈팅 내용은 노션에 따로 정리해두었습니다.
                </p>
                <p>
                  배포 이후에 다른 이들과 일상과 정보를 나만의 스타일로 공유할
                  수 있게 되었습니다.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="project-title flex flex-col md:flex-row h-auto md:h-20 justify-between items-start md:items-center gap-2 md:gap-0">
                <span className="font-bold text-xl md:text-2xl">Herb-Image-Server</span>
                <span className="text-[13px] text-gray-500 break-all">
                  https://github.com/LuvHub1001/herb-image-server
                </span>
              </div>
              <div className="project-content flex flex-col gap-2 mt-5 md:mt-0">
                <p>
                  사이드 프로젝트를 진행하면서 이미지 파일 업로드 기능을 구현할
                  때 단순히 백엔드 서버만을 통해서
                </p>
                <p>
                  이미지 파일들을 관리하게 된다면, 배포 이후에 서버 측에 너무
                  많은 메모리를 사용하게 될 것 같다는 생각으로 제작하게
                  되었습니다.
                </p>
                <p>
                  AWS에서 제공하는 S3 버킷을 사용하였고, upload를 위한 API
                  하나만을 구성해두어서 블로그 프로젝트에 적용해두었습니다.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="project-title flex flex-col md:flex-row h-auto md:h-20 justify-between items-start md:items-center gap-2 md:gap-0">
                <span className="font-bold text-xl md:text-2xl">Herb-Culture</span>
                <span className="text-[13px] text-gray-500 break-all">
                  https://herb-culture.netlify.app
                </span>
              </div>
              <div className="project-content flex flex-col gap-2 mt-5 md:mt-0 mb-10">
                <p>
                  API로 전달받은 데이터를 핸들링 연습을 해보고자 서울시
                  공공데이터 포털을 탐색하다가, 서울시 문화행사 정보 API를 찾게
                  되었습니다.
                </p>
                <p>
                  평소 전시 및 문화행사를 자주 참석하기도 하였고, 해당 정보들을
                  제공하는 사이트를 본 적이 없었기에, 제작 후 직접 사용할
                  목적으로 제작하였습니다.
                </p>
                <p>
                  KaKao API와 공공데이터포털의 API를 활용하였고, 접속한 지역
                  구에 따라 행사 정보의 리스트가 다르게 렌더링 되게끔
                  제작하였습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="project-area mt-10 p-5 md:pl-10 w-full md:w-[1200px] items-center border-b-1 border-gray-300">
            <p className="text-2xl md:text-3xl pl-2 text-[#3C7EEB] font-bold border-l-4 border-[#3C7EEB]">
              <span>WORK-EXPERIENCE</span>
            </p>

            <div className="experience-title flex flex-col md:flex-row h-auto md:h-20 justify-between items-start md:items-center gap-2 md:gap-0 mt-10">
              <span className="font-bold text-xl md:text-2xl">(주)재능이아카데미</span>
              <span className="text-[13px] text-gray-500">
                IT지원팀 / 정직원 (2022.11 ~ 재직중)
              </span>
            </div>

            <div className="experience-content flex flex-col gap-2 mt-5 md:mt-0 mb-10">
              <p>
                (주)재능교육의 IT계열사이며 사업조직의 선생님들께서 이용하시는
                그룹웨어, 전산, 회원 데이터들을 관리하고 운영합니다.
              </p>
              <p>
                각 사이트마다 Classic ASP, PHP, JAVA, C# 등 다양한 개발 환경에서
                동작하는 페이지들의 기능 개발, 유지 보수 업무를 하고있습니다.
              </p>
              <p>
                MS-SQL의 SP에 지나치게 의존하는 모듈들은, Node에서 API를
                작성하여 서버 측 부담을 줄여 성능 개선하였습니다.
              </p>
              <p>
                독립적으로 구성되어있는 모듈(인사관리시스템, 자사 쇼핑몰 등)을
                React와 Node를 활용해서 성능 개선, 리뉴얼하였습니다.
              </p>
              <p>
                리뉴얼 하기 위한 템플릿 구조를 작성해두어서, 팀 내에 다른 이들도
                어렵지 않게 적용할 수 있게 공유하였습니다.
              </p>
            </div>

            <div className="experience-title flex flex-col md:flex-row h-auto md:h-20 justify-between items-start md:items-center gap-2 md:gap-0 mt-10">
              <span className="font-bold text-xl md:text-2xl">웅진</span>
              <span className="text-[13px] text-gray-500">
                ICT 웹 개발팀 / 인턴 (2022.06 ~ 2022.09)
              </span>
            </div>

            <div className="experience-content flex flex-col gap-2 mt-5 md:mt-0 mb-10">
              <p>
                3개월간 인턴 활동을 수행하였으며 교육, 과제 수행을
                진행하였습니다.
              </p>
              <p>
                Java와 Spring Boot로 이루어진 프로젝트들과 사내 프로세스들을
                교육 받았습니다.
              </p>
              <p>
                당시 진행 중이던 팀 내 프로젝트의 테스트 케이스 작성을
                도왔습니다.
              </p>
              <p>
                교육 받은 내용을 토대로 학습지 선생님들께서 이용하시는 ERP
                시스템 내에서 회원 CRUD 기능을 추가하는 과제를 수행하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
