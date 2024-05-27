import axios from "axios";
import { PAGE_SIZE } from "../utils/constant";
import { BASE_URL } from "../utils/constant";
import { format } from "date-fns";

function config() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
  };
  return config;
}

// không gửi token
export async function getActivities({
  startDay = format(new Date(), "yyyy-MM-dd"),
  endDay = format(new Date(Date.now() + 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
  status = 0,
} = {}) {
  const data = await axios.get(
    `${BASE_URL}/api/activities?from=${startDay}&to=${endDay}&pageSize=${PAGE_SIZE}&status=${status}`
  );

  return data?.data?.data;
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

export async function cancelActivity(id) {
  await axios.delete(`${BASE_URL}/api/sessiondonors/${id}`);
}
