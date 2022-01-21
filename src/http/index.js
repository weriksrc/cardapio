import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MjcyNDYyOSwiZXhwIjoxNjQyNzI4MjI5LCJuYmYiOjE2NDI3MjQ2MjksImp0aSI6IlFkaEtFSlByUHhLR1pIT0wiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ns2ZUxo67UOmcKUr3B8gpDWuF073bD-SlY34fo410ZA",
  },
});

export default http;
