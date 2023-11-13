export const showError = (msg) => {
  
  document.querySelector('.error').innerHTML = `${msg}`
  document.querySelector('.error').classList.add('show')

  setTimeout(()=>{
    
    document.querySelector('.error').innerHTML = ''
    document.querySelector('.error').classList.remove('show')

  }, 2000)
}