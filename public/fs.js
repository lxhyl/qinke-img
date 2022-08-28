const fs = require('fs')
const path = require('path')

const dir = `/Users/lxhyl/Documents/code/qinke-img/public/韩语图片`
const imgsRoot = fs.readdirSync(dir)
imgsRoot.shift()

const imgsNames = {}
imgsRoot.forEach(f => {
   const imgs = fs.readdirSync(`${dir}/${f}`)
   imgsNames[f] = imgs
});
console.log("imgs", imgsNames)