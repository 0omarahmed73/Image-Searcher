import axiosAPI from './axiosApi';

export const getImages = async (img) => {
  const {data} = await axiosAPI.get(`search?api_key=1593E771DCB74E5BB28D705B10F81A12&search_type=images&location=Egypt&google_domain=google.com.eg&gl=eg&hl=ar&q=${img}`);
  return data
}