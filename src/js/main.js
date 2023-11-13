import '../css/style.css'
import { key } from './utils/keys';
import { useGetLocalStorage } from './hooks/useGetLocalStorage';
import { showInfo } from './components/showInfo'
import { handleSearch } from './hooks/useHandleSearch';

if(useGetLocalStorage(key)){

  showInfo()
  
}else{

  document.querySelector('#app').innerHTML = `
    <div class="init">
      <h1>Consulta de Perfil</h1>
      <div id="search">
        <div>
          <input type="text" class="nick-name"/>
          <button class="btn">Buscar</button>
        </div>
        <span class="error"></span>
      </div>
    </div>
  `
  
  document.querySelector('.btn').addEventListener('click', handleSearch)
}

    
  




