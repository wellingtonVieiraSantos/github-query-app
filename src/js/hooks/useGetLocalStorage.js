export const useGetLocalStorage = (key) => {
  const dataJson = window.localStorage.getItem(key)
  const data = JSON.parse(dataJson)
  return data
}