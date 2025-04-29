import { useLocation } from "react-router-dom";
import { project_data } from "../../lib/project-data";

function ProjectDetail() {
  const locate = useLocation();
  const currentPath = locate.pathname.slice(11);

  let data = [];
  data = project_data.filter((item) => item.id === currentPath);

  return (
    <>
      <div className="mt-20 ml-40">
        <div className="project-box flex w-[1110px] h-[453px] bg-[#FAFAFA]">
          <div className="project-image">
            <img
              className="w-[300px] h-[400px] m-5"
              src={data.map((item) => item.img)}
            />
          </div>
          <div className="project-info m-5 ml-10">
            {data.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="project-title font-bold text-2xl">
                    {item.title}
                  </div>

                  <div className="mt-5">
                    <span className="font-bold">규모:</span>
                    <span>&nbsp;&nbsp;{item.size}</span>
                  </div>
                  <div className="mt-3">
                    <span className="font-bold">팀 인원:</span>
                    <span>&nbsp;&nbsp;{item.team}</span>
                  </div>

                  <div className="mt-3">
                    <span className="font-bold">개발 기간:</span>
                    <span>&nbsp;&nbsp;{item.during}</span>
                  </div>

                  <div className="mt-3">
                    <span className="font-bold">GitHub:</span>
                    <span>&nbsp;&nbsp;{item.github}</span>
                  </div>

                  <div className="mt-3">
                    <span className="whitespace-pre-line text-[14px]">
                      {item.description}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="font-bold">Project Skill</span>
                    <div className="mt-1">
                      <span className="whitespace-pre-line text-[14px]">
                        {item.projectSkill}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-introduce mt-20">
          <div className="text-3xl font-bold mb-3">
            프로젝트 제작 동기 및 소개
          </div>
          {data.map((item, idx) => {
            return (
              <span key={idx} className="whitespace-pre-line text-[18px]">
                {item.projectMotive}
              </span>
            );
          })}
        </div>

        {currentPath.includes("algorithm") ? null : (
          <div className="project-images mt-20">
            <div className="text-3xl font-bold mb-3">프로젝트 사진</div>
            {data.map((item, idx) => {
              return (
                <div key={idx} className="flex mt-10 gap-10">
                  {item.projectImages.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <img src={item} className="w-[600px] h-[400px]" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        <div className="project-images mt-20">
          <div className="text-3xl font-bold mb-3">프로젝트 후기 및 Link</div>
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <div>
                  <span className="whitespace-pre-line text-[18px]">
                    {item.projectReview}
                  </span>
                </div>
                <div className="mt-2">
                  <p>
                    GitHub: &nbsp;
                    <a href={item.github} target="_blank">
                      {item.github}
                    </a>
                  </p>
                  {item.manageLink.length !== 0 ? (
                    <p>
                      배포: &nbsp;
                      <a href={item.manageLink} target="_blank">
                        {item.manageLink}
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
