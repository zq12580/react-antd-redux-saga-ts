// 设置Localstorage
export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
// 获取Localstorage
export const getLocalstorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
// 清除Localstorage
export const delLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};