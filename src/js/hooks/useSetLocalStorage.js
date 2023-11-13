export const useSetLocalStorage = (data, key) =>{
  const dataJson = JSON.stringify(data)
  window.localStorage.setItem(key, dataJson)
}