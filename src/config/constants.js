export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://k-grab-market-server.herokuapp.com"
    : "http://localhost:8080";

// -- process.env.NODE_ENV : 실제로 우리가 테스트할 때 우리 컴퓨터로 돌릴 때 NODE_ENV(devlopment(http://localhost:8080)) 값이 들어간다.
// 실제로 클라우드에서 작동할 때는   NODE_ENV(https://k-grab-market-server.herokuapp.com) 값이 들어간다.
