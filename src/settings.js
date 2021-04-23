const USER_BASE =
  "https://osvaldo.dk/tomcat/ca3/api"
const INFO_BASE =
  "https://osvaldo.dk/tomcat/ca3/api/info"

  const QUESTION_BASE =
  "https://osvaldo.dk/tomcat/ca3/api/question"
const USER = {
  LOGIN: `${USER_BASE}/login`,
}

const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
  FETCH_STARWARS: `${INFO_BASE}/starwars`,
  POST_QUESTION:  `${QUESTION_BASE}`,
}

export {USER, INFO}
