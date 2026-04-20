const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// 👇 ADD THIS LINE HERE
console.log("API URL:", import.meta.env.VITE_API_URL);

export const USER_API_END_POINT = `${BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_URL}/api/v1/job`;
export const COMPANY_API_END_POINT = `${BASE_URL}/api/v1/company`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/api/v1/application`;