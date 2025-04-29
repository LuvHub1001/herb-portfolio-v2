export const project_data = [
  {
    id: "herb-blog-frontend",
    img: "/images/blog_fe.png",
    title: "블로그 제작(FE)",
    size: "개인프로젝트 (1명)",
    team: "개인프로젝트 (1명)",
    during: "2025.03 ~ 2025.04",
    github: "https://github.com/LuvHub1001/herb-blog-frontend",
    description:
      "오늘 학습한 내용 / 프로젝트 회고록 / 일상을 작성합니다. \n 관리자 페이지에서는 방문수, 조회수 등을 차트로 표현합니다.",
    member: "개인프로젝트",
    projectSkill:
      "→ React,TypeScript \n → react-router-dom \n → Axios \n → tailwind-css \n → chart.js \n → toast-ui-editor",

    projectMotive:
      "사이드 프로젝트를 진행하면서 마주하게 된 문제 상황과 평소 학습한 내용을 기록해 놓을 수 있는 곳이 있으면 좋겠다.\n" +
      "라는 생각으로 프로젝트를 진행했습니다. 티스토리, velog, medium 등의 플랫폼도 많지만 나만의 스타일로 \n" +
      "나에게 제일 적합한 UI 환경을 직접 구현하고 학습했던 내용들을 종합적으로 활용할 수 있는 프로젝트라고 생각했습니다.",

    projectImages: [
      "/images/블로그 메인_Mobile.png",
      "/images/블로그_admin.png",
    ],

    projectReview:
      "처음부터 내가 사용하고 내가 관리하는 나만의 홈페이지라고 생각을 하며 애착을 갖고 작업을 했습니다.\n" +
      "처음 리액트 학습을 도와주었던 분의 이론도 다시 한 번 복기하게 되었고, \n" +
      "적용해보고 싶었던 라이브러리들도 직접 사용해가며, 시행착오를 겪으면서 한층 더 개발자로서의 역량을 성장시켰습니다. \n" +
      "평소 사이드 프로젝트를 진행할 때에는 간단하게 리스트 정도만 조회하는 기능을 주로 작업하였는데, TS를 사용하여 CRUD 전부를 구현해보며 \n" +
      "프론트엔드 영역에서 할 수 있는 전략에 대해서도 생각하게 되었던 프로젝트였습니다.",

    manageLink: "https://herb-blog.vercel.app",
  },

  {
    id: "herb-blog-backend",
    img: "/images/blog_be.png",
    title: "블로그 제작(BE)",
    size: "개인프로젝트 (1명)",
    team: "개인프로젝트 (1명)",
    during: "2025.03 ~ 2025.04",
    github: "https://github.com/LuvHub1001/herb-blog-backend",
    description:
      "프론트엔드 영역에서 다룰 데이터를 관리하는 서버입니다. \n Entity,DTO,Controller,Service,Router 구조이고, API 문서화를 위해 Swagger를 적용했습니다.",
    member: "개인프로젝트",
    projectSkill:
      "→ NodeJS, TypeScript \n → Express \n → MySQL \n → TypeORM \n → JWT \n → Swagger",

    projectMotive:
      "블로그를 제작하기 위해선 필수적으로 DB와 연동을 필요했기에 작업하게 되었습니다. \n" +
      "실무에선 DB에 의존적인 환경으로 업무를 진행하기에 TypeORM을 활용해서 새롭게 적용해보고자 했습니다.\n" +
      "관리자 계정으로 로그인 했을 때에 암호화와 인증 방식은 bcrypt, JWT를 사용했습니다.\n" +
      "해당 토큰의 유효성 체크는 middleware를 통해 검증하였고 작성한 API의 문서화를 위해 Swagger를 적용하였습니다.\n" +
      "배포는 AWS의 EC2 인스턴스를 이용했고, 무중단 배포 및 확장성을 위해 PM2를 활용하였습니다.",

    projectImages: ["/images/블로그_pm2.png", "/images/블로그_swagger.png"],

    projectReview:
      "백엔드 영역을 0부터 직접 구성하는 작업은 처음이었습니다." +
      "\n 어떤 환경이 러닝 커브를 적게 가져가면서 작업할 수 있을까 하는 고민을 거쳐 JS 기반의 개발이 익숙했기에 Node를 선택하였습니다." +
      "\n TypeORM의 장단점과 어떤 이유에서 사용하게 되었는지 알게 되었습니다." +
      "\n 백엔드 영역에서 작업을 하면서 어떤 형태로 데이터를 프론트엔드 영역으로 전달해줘야 작업하기 용이한지에 대해서 직접 체감하였습니다." +
      "\n 배포 과정에서 생긴 트러블슈팅 사항을 따로 정리해두어 다음 배포 시엔 조금 더 원활하게 진행 가능하게 되었습니다.",

    manageLink: "https://herb-blog.vercel.app",
  },

  {
    id: "herb-image-server",
    img: "/images/image-server.png",
    title: "이미지 서버 제작(S3)",
    size: "개인프로젝트 (1명)",
    team: "개인프로젝트 (1명)",
    during: "2025.03",
    github: "https://github.com/LuvHub1001/herb-image-server",

    description:
      "프로젝트를 진행하며, 이미지를 따로 업로드 해놓기 위해 S3를 활용하여 연동하였습니다.",
    member: "개인프로젝트",
    projectSkill: "→ NodeJS,TypeScript \n → Nodemon \n → S3",

    projectMotive:
      "블로그 프로젝트를 진행하며 이미지를 업로드 하는 기능을 구현할 때에 필요성을 느꼈습니다.\n" +
      "단순히 백엔드 서버에 업로드해서 관리하게 된다면 점점 게시글이 많아질 때에 부하가 우려되었기에 제작하게 되었습니다. \n",

    projectImages: ["/images/aws-s3.png", "/images/mysql-s3.png"],

    projectReview:
      "이미지 파일들을 위해 따로 서버를 하나 더 구축해서 관리하는 것이 과하지 않을까 라는 생각이 있었습니다.\n" +
      "꼭 블로그를 위해서만 있어야 할 이유는 없다 싶어서, 추후 다른 프로젝트에서도 사용하기 위해 구축하였습니다.\n" +
      "따로 이미지 서버를 두어서 프로젝트의 메인 백엔드 서버에 부하를 최소화하였고, build 시에도 체감할 수 있었습니다.\n" +
      "AWS의 S3 버킷을 활용해서 이미지 서버를 연동하였고, 현재 블로그 백엔드의 PM2로 등록하여 사용 중 입니다.\n" +
      "배포 환경에서의 2개 이상의 서버를 관리하는 법도 알게된 경험이었습니다.",
    manageLink: "",
  },

  {
    id: "herb-culture",
    img: "/images/herb-culture.png",
    title: "서울시 문화행사 정보(FE)",
    size: "개인프로젝트 (1명)",
    team: "개인프로젝트 (1명)",
    during: "2025.03",
    github: "https://github.com/LuvHub1001/herb-culture",

    description:
      "서울시 공공데이터를 활용하여서 서울시에서 진행하는 문화행사 정보를 안내합니다. \n",

    member: "개인프로젝트",
    projectSkill:
      "→ React,TypeScript \n → react-router-dom \n → Axios \n → tailwind-css \n",

    projectMotive:
      "API로 데이터를 받아와서 리스트업 하기 위해 적당한 컨셉을 찾고 있었습니다. \n" +
      "서울시 공공 데이터포털에서 제공하는 검증된 신뢰성 있는 데이터이고, 평소 문화 행사 및 전시를 자주 참여하기에 알맞은 컨셉이었습니다.\n" +
      "실제로 연인 / 친구와의 약속에서 무엇을 할지 고민이 될 때에 참고할 수 있는 사이트였음 하는 마음으로 제작하게 되었습니다.",

    projectImages: [
      "/images/herb-culture-main.png",
      "/images/herb-culture-search.png",
    ],

    projectReview:
      "API 통신을 위해 axiosInstance를 활용, 서버가 불안정할 때를 대비하여 backoff 전략을 사용했습니다.\n" +
      "직접 커스텀 훅인 useFetch를 작성하여서 Suspense를 활용하였고, fallback으로 Skeleton UI를 구성하였습니다.\n" +
      "geoLocation과 KaKao API를 활용해 현재 위치를 받아올 수 있게하였고, 해당 데이터를 핸들링해서 API의 데이터와 연동했습니다.\n" +
      "API 요청 URL이 http였기에, netlify의 proxy 설정을 수정하여서 https 통신으로 적용하였습니다. \n" +
      "실제로 재밌는 행사가 있나 한 번쯤 참고하는 사이트가 되어서 애착이 가는 프로젝트였습니다.",
    manageLink: "https://herb-culture.netlify.app/",
  },

  {
    id: "algorithm",
    img: "/images/algorithm.png",
    title: "알고리즘 및 자료구조 학습",
    size: "개인 학습 (1명)",
    team: "개인 학습 (1명)",
    during: "2025.01 ~ ",
    github: "https://github.com/LuvHub1001/Data_Algo",
    description: "알고리즘과 자료구조에 대해 학습합니다.",
    member: "개인학습",
    projectSkill: "→ JavaScript",

    projectMotive:
      "실무를 진행하면서 성능이 좋은 알고리즘 혹은 자료구조를 적용하고자 하는 생각으로 학습하였습니다.\n" +
      "인프런 강의를 통해 기본적인 감을 익혔고, 프로그래머스 / 백준과 같은 사이트에서 문제를 풀고 있습니다.\n",

    projectImages: [],

    projectReview:
      "실무에서 더 성능을 좋게 하는 방법이 없을까 하는 고민에서 학습하게 되었습니다. \n" +
      "실제로 Trie 자료 구조를 활용해서 검색 시 자동완성 기능을 적용하였고, 무작정 반복문을 적용하기 전 성능을 고려하게 되었습니다.\n" +
      "업무에서 적용하기 힘든 환경이더라도, 컴퓨팅적 사고를 유지하기 위해 현재에도 꾸준히 학습하고 있습니다.",
    manageLink: "",
  },
];
