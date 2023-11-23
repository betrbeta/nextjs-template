import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 500, // Number of virtual users (simulated users)
  duration: "30s", // Duration of the test
};

export default function () {
  let url = "http://localhost:3002";
  let response = http.get(url);

  check(response, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1);
}
