function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  /*da pra resumir tudo isso, no que esta la embaixo:
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
//pegar a imagem:
const img = document.querySelector("#profile img")

//substituir a imagem 
if (html.classList.contains("light")) {
  //se tiver light mode, adicionar a imagem light mode
  img.setAttribute("src", "./avatar_eu_light.png")
}else{
  //se não tiver light mode, manter a imagem
  img.setAttribute("src", "./avatar_eu_dark.png")
}
  
}