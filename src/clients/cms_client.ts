import axios from "axios";
import { IAudio } from "../models/IAudio";
import { IComputer } from "../models/IComputer";
import { IMobile } from "../models/IMobile";
import { ITelevision } from "../models/ITelevision";

const client = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const computersClients = {
  getAllComputers: async (): Promise<void> => {
    let response = await client.get("/computers");
    return response.data;
  },
  getComputerById: async (id: number): Promise<void> => {
    let response = await client.get(`/computers/${id}`);
    return response.data;
  },
  deleteComputer: async (id: number): Promise<void> => {
    let response = await client.delete(`computers/${id}`);
    return response.data;
  },
  addComputer: async (computer: IComputer): Promise<any> => {
    let response = await client.post(`/computers`, { data: computer });
    console.log(response);
  },
  updateComputer: async (computer, id: number): Promise<any> => {
    let response = await client.put(`/computers/${id}`, { data: computer });
    return response.data;
  },
};

export const mobilesClients = {
  getAllMobiles: async (): Promise<void> => {
    let response = await client.get("/mobiles");
    return response.data;
  },
  getMobileById: async (id: number): Promise<void> => {
    let response = await client.get(`/mobiles/${id}`);
    return response.data;
  },
  deleteMobile: async (id: number): Promise<void> => {
    let response = await client.delete(`mobiles/${id}`);
    return response.data;
  },
  addMobile: async (mobile: IMobile): Promise<any> => {
    let response = await client.post(`/mobiles`, { data: mobile });
    console.log(response);
  },
  updateMobile: async (mobile, id: number): Promise<any> => {
    let response = await client.put(`/mobiles/${id}`, { data: mobile });
    return response.data;
  },
};

export const televisionsClients = {
  getAllTelevisions: async (): Promise<void> => {
    let response = await client.get("/televisions");
    return response.data;
  },
  getTelevisionById: async (id: number): Promise<void> => {
    let response = await client.get(`/televisions/${id}`);
    return response.data;
  },
  deleteTelevision: async (id: number): Promise<void> => {
    let response = await client.delete(`televisions/${id}`);
    return response.data;
  },
  addTelevision: async (tv: ITelevision): Promise<any> => {
    let response = await client.post(`/televisions`, { data: tv });
    console.log(response);
  },
  updateTelevision: async (tv, id: number): Promise<any> => {
    let response = await client.put(`/televisions/${id}`, { data: tv });
    return response.data;
  },
};

export const audioClients = {
  getAllAudio: async (): Promise<void> => {
    let response = await client.get("/audio-systems");
    return response.data;
  },
  getAudioById: async (id: number): Promise<void> => {
    let response = await client.get(`/audio-systems/${id}`);
    return response.data;
  },
  deleteAudio: async (id: number): Promise<void> => {
    let response = await client.delete(`audio-systems/${id}`);
    return response.data;
  },
  addAudio: async (audio: IAudio): Promise<any> => {
    let response = await client.post(`/audio-systems`, { data: audio });
    console.log(response);
  },
  updateAudio: async (audio, id: number): Promise<any> => {
    let response = await client.put(`/audio-systems/${id}`, { data: audio });
    return response.data;
  },
};
