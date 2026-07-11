// ─────────────────────────────────────────────────────────────────────────────
// 사이트 콘텐츠 데이터 (2026-07 업데이트: 실제 포트폴리오 PDF + PD님 확인 내용 반영)
//
// ✅ 확인 완료
//   1) 이메일: jjungpd@gmail.com 이 맞는 것으로 확인됨 (조재영 대표는 Jojaeyoung.pd@gmail.com)
//   2) "이웃집 찰스" 실제 진행 작품 맞음 → w28 로 다시 추가
//   3) w22~w27 연도·담당·카테고리 확인 완료 (아래 반영)
//
// 사진 교체: public/images/ 폴더의 같은 파일명으로 사진을 덮어쓰면 자동 반영됩니다.
// 새 작품 추가: 아래 WORKS 배열에 항목 하나를 복사해서 붙여넣고 내용만 바꾸세요.
// ─────────────────────────────────────────────────────────────────────────────

export interface WorkItem {
  id: string;
  title: string;
  network: string;
  year: string;
  category: string;
  imageUrl: string;
  description: string;
  producer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  imageUrl: string;
  highlights: string[];
}

// 히어로(맨 위 배경) 사진 — public/images/hero/hero.jpg 를 교체하세요.
export const HERO_IMAGE = "/images/hero/hero.jpg";

export const TEAM: TeamMember[] = [
  {
    id: "jy1",
    name: "정지윤",
    role: "공동대표 Producer",
    email: "jjungpd@gmail.com",
    bio: "영상 콘텐츠 기획·제작 20년차. PLANET350 출신으로 JTBC, OCN, 삼성뮤직, 플래닛TV, CJ오쇼핑 등 방송·유튜브·라이브 커머스 전반을 아우르는 폭넓은 제작 경력을 보유하고 있습니다.",
    imageUrl: "/images/team/jungjiyoon.jpg",
    highlights: [
      "2024~2025 EBS1&E채널 <서장훈의 이웃집 백만장자>",
      "2024~2025 OBS 신년특집 다큐 <미래를 짓는 집>",
      "OBS <찾아라 마이홈> 시즌 1, 2",
      "2018.3~2022.7 PLANET350 · JTBC <K-스타일링 배틀 마법옷장> 시즌 1,2",
      "JTBC PLAY <마.옷.장> 라이브 커머스",
      "JTBC 스튜디오 룰루랄라 <렛츠 트라이비>",
      "OCN 디지털 스튜디오 <개감독>",
      "삼성뮤직 백스테이지 <소리바다 어워즈>",
      "플래닛TV 유튜브 <쏘리맘>, <목욕탕 라이브>",
      "시니어 전용 홈트레이닝 APP <메모핏>",
      "딩고 <라이프 채널> · CJ오쇼핑 <TV 올리브영>",
      "2023 ㈜에이투지엔터테인먼트 KBS2 <개는 훌륭하다> (KBS 우수프로그램상 수상)",
      "2022 빅웨이브미디어 LG U+ <디저트 먹어볼래>",
      "2020 미스틱스토리 KBS2 <TV는 사랑을 싣고>",
    ],
  },
  {
    id: "jy2",
    name: "조재영",
    role: "공동대표 Producer",
    email: "jojaeyoung.pd@gmail.com",
    bio: "영상 콘텐츠 기획·제작 20년차. KBS, MBC, SBS, JTBC, Mnet, tvN 등 주요 방송사와 넷플릭스·쿠팡플레이·YOUKU 등 국내외 OTT 플랫폼에서 다양한 장르의 프로그램을 기획·제작한 검증된 프로듀서입니다.",
    imageUrl: "/images/team/jojaeyoung.jpg",
    highlights: [
      "쿠팡플레이 <대학전쟁 2023&2024>",
      "넷플릭스 <피지컬:100>",
      "KBS <슈퍼맨이 돌아왔다>, <위기탈출 넘버원>, <엄마아빠는 외계인>, <KBS JOY 썰바이벌>",
      "MBC <아이돌 매니저>, <위대한 유산>, <기분좋은날>, <시사매거진2580>",
      "SBS <기적의 오디션>",
      "JTBC <신의 한 수>, <남자의 그 물건>, <내집이 나타났다>",
      "채널A <우리 집에 왜 왔니>, <오늘부터 대학생>",
      "MBN <뜨겁게 안녕>, <신과 한판>",
      "Mnet <2020 K-concert>, <슈퍼인턴>, <시그널B>, <ONE DREAM.TXT>",
      "tvN <어쩌다 어른>, <더 폰: 코리아>",
      "XTM <주먹이 운다> 시즌 1,2, <절대남자> 시즌 2,3",
      "해외: YOUKU <멍냐이야기>, PANDA TV <KING OF PANDA>, 절강위성 <라이바슝디>, CCTV <딩거룽둥창>",
    ],
  },
];

export const WORKS: WorkItem[] = [
  {
    id: "w1",
    title: "대학전쟁 2023&2024",
    network: "쿠팡플레이",
    year: "2023–2024",
    category: "리얼리티·서바이벌",
    imageUrl: "/images/works/w1.jpg",
    description: "대한민국 최고 명문대생들이 두뇌만으로 맞붙는 순도 100% 서바이벌",
    producer: "조재영",
  },
  {
    id: "w2",
    title: "피지컬:100",
    network: "넷플릭스",
    year: "2023",
    category: "서바이벌",
    imageUrl: "/images/works/w2.jpg",
    description: "전세계 38개국 1위, 누적 시청시간 2억 3,500만 시간을 기록한 예능",
    producer: "조재영",
  },
  {
    id: "w3",
    title: "슈퍼맨이 돌아왔다",
    network: "KBS2",
    year: "2018–",
    category: "리얼리티",
    imageUrl: "/images/works/w3.jpg",
    description: "유명인 아빠들의 육아 도전기 — 송일국 삼둥이네 편 담당 연출, 최고 시청률 35.9%",
    producer: "조재영",
  },
  {
    id: "w4",
    title: "K-스타일링 배틀 마법옷장 시즌1,2",
    network: "JTBC",
    year: "2018–2022",
    category: "패션 리얼리티",
    imageUrl: "/images/works/w4.jpg",
    description: "한국콘텐츠진흥원 x JTBC 패션 예능, 24명의 K-디자이너 스타일링 배틀",
    producer: "정지윤",
  },
  {
    id: "w5",
    title: "마.옷.장 (마법옷장 장바구니)",
    network: "JTBC PLAY",
    year: "2018–2022",
    category: "라이브 커머스",
    imageUrl: "/images/works/w5.jpg",
    description: "마법옷장 소개 K-디자이너 브랜드를 라이브 커머스로 제작, 24개 브랜드·6주간 진행",
    producer: "정지윤",
  },
  {
    id: "w6",
    title: "개는 훌륭하다",
    network: "KBS2",
    year: "2023",
    category: "반려동물 예능",
    imageUrl: "/images/works/w6.jpg",
    description: "성숙한 반려동물 문화 조성 예능, 2023 마을특집(176회 제주도) KBS 우수프로그램상 수상",
    producer: "조재영",
  },
  {
    id: "w7",
    title: "서장훈의 이웃집 백만장자",
    network: "EBS1 · E채널",
    year: "2024–2025",
    category: "토크·다큐",
    imageUrl: "/images/works/w7.jpg",
    description: "서장훈과 콩고 왕자 조나단이 전국의 숨은 부자를 찾아 부의 가치관을 들여다보는 프로그램",
    producer: "정지윤",
  },
  {
    id: "w8",
    title: "미래를 짓는 집",
    network: "OBS",
    year: "2024–2025",
    category: "다큐멘터리",
    imageUrl: "/images/works/w8.jpg",
    description: "신년특집 다큐 2부작, 현대인의 주거 패러다임 변화를 조명",
    producer: "정지윤",
  },
  {
    id: "w9",
    title: "찾아라 마이홈 시즌1,2",
    network: "OBS",
    year: "2023–2025",
    category: "예능·정보",
    imageUrl: "/images/works/w9.jpg",
    description: "지상파 최초 생애주기별(life cycle) 보금자리 발굴 프로그램, 17부작",
    producer: "정지윤",
  },
  {
    id: "w10",
    title: "디저트 먹어볼래",
    network: "LG U+ 모바일tv",
    year: "2022",
    category: "웹 예능",
    imageUrl: "/images/works/w10.jpg",
    description: "악역 전문 배우들의 달콤살벌한 디저트 입문기",
    producer: "정지윤",
  },
  {
    id: "w11",
    title: "주먹이 운다 시즌1,2",
    network: "XTM",
    year: "-",
    category: "격투 리얼리티",
    imageUrl: "/images/works/w11.jpg",
    description: "전직 조폭 vs 의사 vs 북파공작원, 격투기 예능의 시초 — 기획부터 구성까지 담당",
    producer: "조재영",
  },
  {
    id: "w12",
    title: "Get it beauty",
    network: "CJ E&M Onstyle",
    year: "2013–2014",
    category: "뷰티",
    imageUrl: "/images/works/w12.jpg",
    description: "그 시절 2030 여성들의 뷰티 라이프를 이끈 No.1 뷰티쇼",
    producer: "조재영",
  },
  {
    id: "w13",
    title: "beauty BIBLE",
    network: "KBSN",
    year: "2016",
    category: "뷰티",
    imageUrl: "/images/works/w13.jpg",
    description: "뷰티 정보 큐레이팅과 패널 배틀로 K-Beauty 위상을 알린 신개념 뷰티 프로그램",
    producer: "조재영",
  },
  {
    id: "w14",
    title: "렛츠 트라이비 (Let's Try! Be)",
    network: "스튜디오 룰루랄라 · 유튜브",
    year: "2018–2022",
    category: "유튜브·아이돌 리얼리티",
    imageUrl: "/images/works/w14.jpg",
    description: "신인 아이돌 트라이비의 데뷔 리얼리티, 유튜브 누적 조회수 198만 회 돌파",
    producer: "정지윤",
  },
  {
    id: "w15",
    title: "삼성뮤직 백스테이지 — 2018 소리바다 어워즈",
    network: "삼성뮤직",
    year: "2018",
    category: "시상식·백스테이지",
    imageUrl: "/images/works/w15.jpg",
    description: "2018 소리바다 어워즈 아티스트들의 백스테이지 콘텐츠",
    producer: "정지윤",
  },
  {
    id: "w16",
    title: "개감독",
    network: "OCN 디지털 스튜디오 뭅뭅 · 유튜브",
    year: "2018–2022",
    category: "유튜브·리뷰",
    imageUrl: "/images/works/w16.jpg",
    description: "개그맨 박성광이 매주 극장 개봉 신작을 영상통화로 리뷰하는 콘텐츠",
    producer: "정지윤",
  },
  {
    id: "w17",
    title: "위기탈출 넘버원",
    network: "KBS",
    year: "2014–",
    category: "생활정보",
    imageUrl: "/images/works/w17.jpg",
    description: "실제 사건 사고로 배우는 생활 안전 정보 프로그램",
    producer: "조재영",
  },
  {
    id: "w18",
    title: "2020 K-concert",
    network: "Mnet",
    year: "2020",
    category: "음악",
    imageUrl: "/images/works/w18.jpg",
    description: "K-POP 아티스트들의 특별 콘서트 무대",
    producer: "조재영",
  },
  {
    id: "w19",
    title: "어쩌다 어른",
    network: "tvN",
    year: "2019–",
    category: "강연·토크",
    imageUrl: "/images/works/w19.jpg",
    description: "인생 선배들이 전하는 솔직한 이야기와 깊은 지혜",
    producer: "조재영",
  },
  {
    id: "w20",
    title: "더 폰: 코리아",
    network: "tvN",
    year: "-",
    category: "다큐·여행",
    imageUrl: "/images/works/w20.jpg",
    description: "한국의 본질을 찾아 떠나는 감성 다큐멘터리",
    producer: "조재영",
  },
  {
    id: "w21",
    title: "쏘리맘",
    network: "플래닛TV · 유튜브",
    year: "2018–2022",
    category: "유튜브·퀴즈쇼",
    imageUrl: "/images/works/w21.jpg",
    description: "다국적 엄마들이 출연하는 대국민 엄마 퀴즈쇼",
    producer: "정지윤",
  },
  // ── PD님 확인 완료 (정지윤·조재영 공동 참여 작품) ──
  {
    id: "w22",
    title: "2025 미스코리아 쇼",
    network: "미스코리아",
    year: "2025",
    category: "무대 쇼",
    imageUrl: "/images/works/w22.jpg",
    description: "미스코리아 본선 무대 쇼 연출",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w23",
    title: "문보나 프로젝트",
    network: "유튜브",
    year: "2025",
    category: "버추얼 아이돌 쇼",
    imageUrl: "/images/works/w23.jpg",
    description: "유튜브 기반 버추얼 아이돌 쇼 프로젝트",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w24",
    title: "트라이앵글",
    network: "MBN",
    year: "2026",
    category: "교양",
    imageUrl: "/images/works/w24.jpg",
    description: "확인 필요",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w25",
    title: "무명전설 디너쇼",
    network: "MBN",
    year: "2026",
    category: "무대·트로트쇼",
    imageUrl: "/images/works/w25.jpg",
    description: "확인 필요",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w26",
    title: "쏠 트레블J카드 광고",
    network: "신한은행",
    year: "2025",
    category: "광고",
    imageUrl: "/images/works/w26.jpg",
    description: "확인 필요",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w27",
    title: "교환왔수다",
    network: "TV조선",
    year: "2025",
    category: "예능",
    imageUrl: "/images/works/w27.jpg",
    description: "확인 필요",
    producer: "정지윤 · 조재영",
  },
  {
    id: "w28",
    title: "이웃집 찰스",
    network: "KBS",
    year: "2015–",
    category: "다큐·휴먼",
    imageUrl: "/images/works/w28.jpg",
    description: "대한민국에서 살아가는 외국인들의 생생한 이야기",
    producer: "조재영",
  },
];
