import axios from "axios";
import { BASE_URL, PAGE_SIZE } from "../utils/constant";

function config() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
  };
  return config;
}

export async function getHospitalById(id) {
  // id = edf8e49e-2797-4426-e6bd-08dc77c09d16
  const data = await axios.get(`${BASE_URL}/api/hospitals/${id}`);

  return data?.data.data;
}

export async function getAcitivitiesByHospitalId(id) {
  const data = await axios.get(
    `${BASE_URL}/api/activities/hospitals/${id}?status=0`
  );

  return data?.data?.data;
}

export async function getDonorsByActivities(id, page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/api/sessiondonors/activities/${id}?Page=${page}&PageSize=${PAGE_SIZE} `
  );
  // console.log(data.data.data);

  // const donor = await axios.get(
  //   `${BASE_URL}/api/donors/${data?.data?.data.donorId}`
  // );
  // console.log(donor);

  return data?.data;
}

export async function getDonorById(id) {
  const { data } = await axios.get(`${BASE_URL}/api/donors/${id}`);
  return data?.data;
}

export async function approveDonor({
  sessionId,
  donorId,
  hospitalId,
  bloodType,
  quantity,
  jwtToken,
  hospitalName,
}) {
  await axios.put(
    `${BASE_URL}/api/sessiondonors/${sessionId}`,
    {
      status: 4,
    },
    { headers: { Authorization: `Bearer ${jwtToken}` } }
  );
  console.log({ hospitalId, bloodType, quantity });
  await axios.post(
    `${BASE_URL}/api/bloods`,
    { hospitalId, bloodType, quantity },
    { headers: { Authorization: `Bearer ${jwtToken}` } }
  );

  await axios.post(
    `${BASE_URL}/api/Historys`,
    { donorId, quantity, hospitalName, hospitalId },
    { headers: { Authorization: `Bearer ${jwtToken}` } }
  );
}

export async function rejectDonor({ sessionId, jwtToken }) {
  await axios.put(
    `${BASE_URL}/api/sessiondonors/${sessionId}`,
    {
      status: 2,
    },
    { headers: { Authorization: `Bearer ${jwtToken}` } }
  );
}

export async function deleteActivity(id) {
  await axios.delete(`${BASE_URL}/api/activities/${id}`);
}

export async function createActivity(data) {
  await axios.post(`${BASE_URL}/api/activities`, data);
}

export async function getBloodsByHospitalId({ id }) {
  const { data } = await axios.get(
    `${BASE_URL}/api/bloods/hospitals/${id}`,
    config()
  );
  return data?.data;
}

export async function requireBlood(data) {
  await axios.post(`${BASE_URL}/api/requestbloods`, data);
}
