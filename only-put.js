import http from "k6/http";
import { check } from "k6";

export default function () {
  const payload = JSON.stringify({
    name: "John",
    job: "Software Engineer",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.put("https://reqres.in/api/users/2", payload, params);

  check(res, {
    "response code was 200": (res) => res.status == 200,
  });
}
