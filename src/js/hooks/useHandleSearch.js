import { showInfo } from "../components/showInfo"
import { useFetch } from "./useFetch"
import { showError } from "../components/showError"

export const handleSearch = async () => {

  const nickName = document.querySelector('.nick-name')
  if(!nickName.value){
    showError('Por favor, digite um nick.')
    return
  } 
  const fetch = await useFetch(nickName.value)

  if(fetch == 404){
    showError('Perfil não encontrado!')
    nickName.value = ''
    return
  }

  showInfo()
  
}