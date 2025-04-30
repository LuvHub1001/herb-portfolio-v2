import { useLocation } from "react-router-dom";
import { project_data } from "../../lib/project-data";

function ProjectDetail() {
  const locate = useLocation();
  const currentPath = locate.pathname.slice(11);

  let data = [];
  data = project_data.filter((item) => item.id === currentPath);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-4 lg:p-5">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-sm"
            src={data.map((item) => item.img)}
            alt="프로젝트 이미지"
          />
        </div>
        <div className="w-full lg:w-2/3 p-4 lg:p-5">
          {data.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                {item.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="font-medium text-gray-700">규모:</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.size}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">팀 인원:</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.team}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">개발 기간:</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.during}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">GitHub:</span>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 hover:text-blue-800 break-all text-sm"
                  >
                    {item.github}
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-gray-600 text-sm space-y-1">
                  {item.description.split("\n").map((line, lineIdx) => (
                    <p key={lineIdx}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <h2 className="font-medium text-gray-700">Project Skill</h2>
                <div className="mt-1 text-gray-600 text-sm space-y-1">
                  {item.projectSkill.split("\n").map((line, lineIdx) => (
                    <p key={lineIdx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 lg:p-5 border-t border-gray-100">
        <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
          프로젝트 제작 동기 및 소개
        </h2>
        {data.map((item, idx) => (
          <div key={idx} className="text-gray-600 text-sm space-y-1">
            {item.projectMotive.split("\n").map((line, lineIdx) => (
              <p key={lineIdx}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {!currentPath.includes("algorithm") && (
        <div className="p-4 lg:p-5 border-t border-gray-100">
          <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
            프로젝트 사진
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.map((item, idx) => (
              <div key={idx} className="space-y-3">
                {item.projectImages.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="overflow-hidden rounded-lg shadow-sm"
                  >
                    <img
                      src={img}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      alt={`프로젝트 이미지 ${imgIdx + 1}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 lg:p-5 border-t border-gray-100">
        <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
          프로젝트 후기 및 Link
        </h2>
        {data.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <div className="text-gray-600 text-sm space-y-1">
              {item.projectReview.split("\n").map((line, lineIdx) => (
                <p key={lineIdx}>{line}</p>
              ))}
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-gray-700">GitHub:</span>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:text-blue-800 break-all text-sm"
                >
                  {item.github}
                </a>
              </p>
              {item.manageLink && (
                <p>
                  <span className="font-medium text-gray-700">배포:</span>
                  <a
                    href={item.manageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 hover:text-blue-800 break-all text-sm"
                  >
                    {item.manageLink}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
