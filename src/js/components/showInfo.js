import { key } from '../utils/keys';
import { useGetLocalStorage } from '../hooks/useGetLocalStorage';
import { handleSearch } from '../hooks/useHandleSearch';
import { colors } from '../utils/colorLanguage';

export const showInfo = () => {

  const data = useGetLocalStorage(key)
  
  document.querySelector('#app').innerHTML = `
    <nav>
      <div id="search">
        <div class="search">
          <input type="text" class="nick-name"/>
          <button class="btn"><img src="../../public/lupa.svg" class="btn-img"/></button>
        </div>
        <span class="error"></span>
      </div>
    </nav>
    <main>
      <div class="info-profile">
        <img src="${data.avatar_url}" alt="avatar" />
        <div class="info">
          <div class="name-info">
            <span class="name">${data.name || 'Não informado.'}</span>
            <span class="login">${data.login}</span>
          </div>
          <div class="location">
            <img src="../../../public/location.svg" alt="" />
            <span>${data.location || 'Não informado.'}</span>
          </div>
        </div>
      </div>
      <div class="title-repos">
        <p>Repositórios</p>
        <span class="num-rep">${data.public_repos}</span>
      </div>
      <div class="repos"></div>
    </main>
  `
  data.repos.map( d => 
    document.querySelector('.repos').innerHTML += `
    <div class="repo">
      <div>
        <a href="${d.url}" target="_blanck" rel="external">${d.name}</a>
        <p>${d.description || 'Nenhuma descrição.'}</p>
        <div class="lang">
          <div class="circle" style="background-color: ${colors[d.language]}"></div>
          <p>${d.language || 'Outra'}</p>
        </div>
        <p>${d.license ? d.license.name : ''}</p>
      </div>
      <div>
        <span class="visibility">${d.visibility}</span>
      </div>
    </div>
  `)
    document.querySelector('.btn').addEventListener('click', handleSearch)
}