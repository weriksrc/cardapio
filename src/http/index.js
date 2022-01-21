import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0Mjc3NzEzMywiZXhwIjoxNjQyNzgwNzMzLCJuYmYiOjE2NDI3NzcxMzMsImp0aSI6InR1VnNDUzF5NTB2bHM2RlIiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.CD-TzWm_BitZwPwZ7EShWiBPFT9Xd3mU6K9Csvu6JLU",
  },
});

export default http;
