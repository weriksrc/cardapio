import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization:
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0Mjc5NTQ0OCwiZXhwIjoxNjQyNzk5MDQ4LCJuYmYiOjE2NDI3OTU0NDgsImp0aSI6IkJaN24zZlZIOEtyT1AxQXMiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.llymJrFmimIoGjLE1qcC2uZoHb6-MZz5W7UiQgO8Jm8",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MjgxNDM0NSwiZXhwIjoxNjQyODE3OTQ1LCJuYmYiOjE2NDI4MTQzNDUsImp0aSI6IjYxaUN4RHc5Q2hSNFg3RGYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.a7WsN5m1eWrbQOc5SnwL99hEYJHLX1xgSL0gwOYnyL4",
  },
});

export default http;
