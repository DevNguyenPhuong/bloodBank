import axios from "axios";

export async function getActivities(startDay, endDay, pageSize, status) {
  const { data, error } = await axios.post(
    `https://localhost:7067/api/activities?from=${startDay}&to=${endDay}&pageSize=${pageSize}&status=${status}`
  );

  if (error) throw new Error(error.message);
  return data?.data;
}

export async function getActivity(id) {
  // id = edf8e49e-2797-4426-e6bd-08dc77c09d16
  const { data, error } = await axios.post(
    `https://localhost:7067/api/sessiondonors/donors/${id}`
  );

  if (error) throw new Error(error.message);
  return data?.data;
}
