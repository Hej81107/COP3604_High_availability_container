import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 150, // virtual users
  duration: '3m',
};

export default function () {
  http.get('http://localhost:85/explore');
  sleep(1);
}
