// ------------------------------------------------------------유저 정보
export const User_Data = [
  {
    id: 1,
    name: "이승윤",
    email: "lsy3864@naver.com",
    age: 25,
    phone: "(010)8339-3863",
    access: "User",
    dept : "마케팅 1팀",
    joinCompany : "2022-03-22",
    worklate : 3,
    useVacation : 3,
    userType : "True",
    workingSystem : "일반근로제"
  },
  {
    id: 2,
    name: "유재석",
    email: "you@gmail.com",
    age: 41,
    phone: "(010)5322-1672",
    access: "User",
    dept : "경리 1팀",
    joinCompany : "2012-12-11",
    worklate : 0,
    useVacation : 5,
    user : "True",
    workingSystem : "유연근로제"
  },
  {
    id: 3,
    name: "박병철",
    email: "wussi@naver.com",
    age: 22,
    phone: "(010)1552-1675",
    access: "User",
    dept : "경리 1팀",
    joinCompany : "2021-05-17",
    worklate : 1,
    useVacation : 12,
    user : "False",
    workingSystem : "유연근로제"
  }
];

// ************************************************차트 데이터
export const mockBarData = [
  {
    Day : "월",
    "기본 근무 시간": 8,
    "점심 시간" : 1,
    "초과 근무 시간": 0,
    "외근" : 1
  },

  {
    Day: "화",
    "기본 근무 시간": 8,
    "점심 시간" : 1,
    "초과 근무 시간": 0,
    "외근" : 0
  },
  {
    Day: "수",
    "기본 근무 시간": 8,
    "점심 시간" : 1,
    "초과 근무 시간": 3,
    "외근" : 0
  },
  {
    Day: "목",
    "기본 근무 시간": 8,
    "점심 시간" : 1,
    "초과 근무 시간": 0,
    "외근" : 1
  },
  {
    Day: "금",
    "기본 근무 시간": 8,
    "점심 시간" : 1,
    "초과 근무 시간": 2,
    "외근" : 1
  },
  {
    Day: "토",
    "기본 근무 시간": 4,
    "점심 시간" : 0,
    "초과 근무 시간": 0,
    "외근" : 0
  },
  {
    Day: "일",
    "기본 근무 시간": 0,
    "점심 시간" : 0,
    "초과 근무 시간": 0,
    "외근" : 0
  },
];


// ************************************************출퇴근 기록
export const Time = [
  {
    Time : "2023.07.01",
    Schedule : "오전 미팅",
    State : "완료"
  },
  {
    Time : "2023.07.02",
    Schedule : "오전 미팅",
    State : "완료"
  },
  {
    Time : "2023.07.03",
    Schedule : "오전 미팅",
    State : "완료"
  },
  {
    Time : "2023.07.04",
    Schedule : "점심 시간",
    State : "완료"
  },
  {
    Time : "2023.07.05",
    Schedule : "오후 거래처 미팅",
    State : "완료"
  },
  {
    Time : "2023.07.06",
    Schedule : "",
    State : ""
  },
  {
    Time : "2023.07.07",
    Schedule : "결산 관리",
    State : "예정"
  },

  {
    Time : "2023.07.08",
    Schedule : "휴가 신청",
    State : "예정"
  },

  {
    Time : "2023.07.09",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.10",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.11",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.12",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.13",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.14",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.15",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.16",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.17",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.18",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.19",
    Schedule : "퇴근",
    State : "예정"
  },
  {
    Time : "2023.07.20",
    Schedule : "퇴근",
    State : "예정"
  },
];










// ------------------------------------------------------------휴가 날짜
// export const mockTransactions = [
//   {
//     user: "Lee Seung Yun",
//     Start_date: "09-01",
//     End_date : "09-03",
//     Vacation_Type: "연차",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "04-01",
//     End_date : "04-02",
//     Vacation_Type: "연차",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "12-01",
//     End_date : "12-03",
//     Vacation_Type: "병가",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "11-05",
//     End_date : "11-03",
//     Vacation_Type: "특별휴가",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "11-02",
//     End_date : "11-03",
//     Vacation_Type: "연차+병가",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "09-01",
//     End_date : "09-03",
//     Vacation_Type: "연차",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "04-15",
//     End_date : "04-20",
//     Vacation_Type: "병가",
//     State : "승인"
//   },
//   {
//     user: "Lee Seung Yun",
//     Start_date: "04-01",
//     End_date : "09-03",
//     Vacation_Type: "연차",
//     State : "승인"
//   },
// ];