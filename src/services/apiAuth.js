import axios from "axios";

export async function login(info) {
  const data = await axios.post("https://localhost:7067/api/auth", info);

  return data;
}

export async function signup(info) {
  const { data, error } = await axios.post(
    "https://localhost:7067/api/donors",
    info
  );

  if (error) throw new Error(error.message);
  return data?.data;
}
