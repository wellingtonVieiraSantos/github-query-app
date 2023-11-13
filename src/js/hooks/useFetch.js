import { useSetLocalStorage } from "./useSetLocalStorage"
import { key } from '../utils/keys'

export const useFetch = async (user) => {
  const jsonDataUser = await fetch(`https://api.github.com/users/${user}`)
  if(jsonDataUser.status !== 200){
    return jsonDataUser.status
  }else{
    const dataUser = await jsonDataUser.json()
    const jsondDataRepos = await fetch(`https://api.github.com/users/${user}/repos`)
    const dataRepos = await jsondDataRepos.json()
    
    const data = {
      login : dataUser.login,
      name: dataUser.name,
      location: dataUser.location,
      avatar_url : dataUser.avatar_url,
      bio: dataUser.bio,
      public_repos: dataUser.public_repos,
      repos: dataRepos.map(rep => 
        ({
          name: rep.name,
          url: rep.html_url,
          description: rep.description,
          created_at: rep.created_at,
          updated_at: rep.updated_at,
          pushed_at: rep.pushed_at,
          language: rep.language,
          forks_count: rep.forks_count,
          license: rep.license,
          visibility: rep.visibility
        }
    )),
    followers: dataUser.followers,
    following: dataUser.following,
    created_at: dataUser.created_at
    }
  
    useSetLocalStorage(data, key)
  }

}