import axiosInstance from "./axios";

// GET all appointments
export const getAppointments = async () => {
  const response = await axiosInstance.get("/appointments");

  return response.data;
};

// GET single appointment
export const getAppointmentById = async (id) => {
  const response = await axiosInstance.get(`/appointments/${id}`);

  return response.data;
};

// CREATE appointment
export const createAppointment = async (appointmentData) => {
  const response = await axiosInstance.post(
    "/appointments",
    appointmentData
  );

  return response.data;
};

// UPDATE appointment
export const updateAppointment = async (id, updatedData) => {
  const response = await axiosInstance.put(
    `/appointments/${id}`,
    updatedData
  );

  return response.data;
};

// DELETE appointment
export const deleteAppointment = async (id) => {
  const response = await axiosInstance.delete(`/appointments/${id}`);

  return response.data;
};