function Skill() {
  return (
    <div className="mt-10 px-4 lg:ml-[-40px] md:px-10 w-full h-full">
      <div className="text-xl md:text-4xl font-bold">
        <span className="h-[100%] border-l-4 border-[#3C7EEB]">
          &nbsp;Skill
        </span>
      </div>
      <div className="skill-info">
        <div className="flex flex-col mt-3 gap-1 text-sm md:text-base">
          <div>프로젝트에서 사용했고, 활용 가능한 기술 소개입니다.</div>
          <div>포트폴리오 페이지에서 실제 적용했던 경험에 대해 다룹니다.</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 md:gap-8">
          <div className="skill1">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/JS.png"
                alt="JavaScript"
              />
              <img
                className="w-[30px] h-[30px]"
                src="/images/TS.svg"
                alt="TypeScript"
              />
            </div>
            <div className="mt-2 font-bold">
              JavaSript &nbsp;/&nbsp;TypeScript
            </div>
            <div className="mt-2">
              <p>
                입문 과정에서 JS 기반의 개발로 기본기를 익혔고,현재에는 TS를
                주로 사용합니다.
              </p>
            </div>
          </div>
          <div className="skill2">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/React.png"
                alt="React"
              />
            </div>
            <div className="mt-2 font-bold">React</div>
            <div className="mt-2">
              <p>
                JS 기반의 라이브러리인 React를 활용해서, 실무 및 사이드
                프로젝트를 작업합니다.
              </p>
              <p></p>
            </div>
          </div>

          <div className="skill3">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/tailwind.png"
                alt="Tailwind CSS"
              />
              <img
                className="w-[30px] h-[30px]"
                src="/images/styled-components.png"
                alt="Styled Components"
              />
            </div>
            <div className="mt-2 font-bold">
              tailwind-css &nbsp;/&nbsp; styled-components
            </div>
            <div className="mt-2">
              <p>
                실무에선 파악이 용이한 styled-components를 사용하고, 개인
                프로젝트에선 자유로운 tailwind-css를 사용합니다.
              </p>
            </div>
          </div>

          <div className="skill4">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/NodeJS.jpg"
                alt="Node.js"
              />
            </div>
            <div className="mt-2 font-bold">Node (Express)</div>
            <div className="mt-2">
              <p>
                백엔드 및 API 작업을 가벼운 Express 환경에서 작업합니다. TS를
                적용하여 데이터의 타입 검증을 합니다.
              </p>
            </div>
          </div>

          <div className="skill4">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/mssql.svg"
                alt="MS SQL"
              />
              <img
                className="w-[30px] h-[30px]"
                src="/images/mysql.png"
                alt="MySQL"
              />
            </div>
            <div className="mt-2 font-bold">MS-SQL &nbsp;/&nbsp;MySQL</div>
            <div className="mt-2">
              <p>
                실무에선 MS-SQL을 주로 사용하고, 사이드 프로젝트에서는 MySQL을
                사용합니다.
              </p>
            </div>
          </div>
          <div className="skill5">
            <div className="flex gap-1">
              <img
                className="w-[30px] h-[30px]"
                src="/images/TypeORM.png"
                alt="TypeORM"
              />
            </div>
            <div className="mt-2 font-bold">TypeORM</div>
            <div className="mt-2">
              <p>
                관계 설정 및 Lazy Loading을 지원하는 TypeORM을 사용해서
                작업합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
