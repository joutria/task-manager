import axios from "axios";

export async function read() {
  const url = "https://todos-go.herokuapp.com/api/todos";
  const request = await axios({ method: "GET", url: url });
  return request.data;
}

export async function create(dt) {
  const url = "https://todos-go.herokuapp.com/api/todos";
  const request = await axios({
    method: "POST",
    url: url,
    data: dt,
  });

  return request.data;
}

export async function remove(id) {
  const url = `https://todos-go.herokuapp.com/api/todos/${id}`;
  const request = await axios({ method: "DELETE", url: url });
  return request.data;
}

export async function update(dt, id) {
  const url = `https://todos-go.herokuapp.com/api/todos/${id}`;
  const request = await axios({ method: "PUT", url: url, data: dt });
  return request.data;
}
