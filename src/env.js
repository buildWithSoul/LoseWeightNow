const URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://young-tor-15701.herokuapp.com";

export default URI;
