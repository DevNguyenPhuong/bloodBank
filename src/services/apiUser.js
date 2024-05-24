import axios from "axios";
import { PAGE_SIZE } from "../utils/constant";
import { BASE_URL } from "../utils/constant";

export async function getActivities({ startDay, endDay, status }) {
  // from=2024-06-01&to=2024-06-30
  const data = await axios.get(
    `${BASE_URL}/api/activities?from=${startDay}&to=${endDay}&pageSize=${PAGE_SIZE}&status=${status}`
  );

  return data?.data;
}

export async function getActivitiesByUser(id) {
  const data = await axios.get(`${BASE_URL}/api/sessiondonors/donors/${id}`);

  return data?.data;
}

export async function getActivitiesById(id) {
  const data = await axios.get(`${BASE_URL}/api/activities/${id}`);
  const hospitalId = data?.data?.data?.hospitalId;

  const hospitalData = await axios.get(
    `${BASE_URL}/api/hospitals/${hospitalId}`
  );

  return { ...data?.data?.data, ...hospitalData.data };
}

export async function bookingActivity(info) {
  const data = await axios.post(`${BASE_URL}/api/sessiondonors`, info);

  return data?.data;
}
