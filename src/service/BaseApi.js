import axios from "axios";

const API_ROOT = "https://devplus-api.herokuapp.com";

const client = axios.create({
    baseURL: API_ROOT,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  
export const getSidebar = async () => {
    return await client.get("/sidebar");
}

export const getBanner = async () => {
    return await client.get("/banner");
}

export const getAbout = async () => {
  return await client.get("/about");
}

export const getConcern = async () => {
  return await client.get("/concern");
}

export const getTestimonial = async () => {
  return await client.get("/testimonial");
}

export const getAdmission = async () => {
  return await client.get("/admission");
}

export const getCampus = async () => {
  return await client.get("/campus");
}

export const getSkill = async () => {
  return await client.get("/skill");
}

export const getFooter = async () => {
  return await client.get("/footer");
}