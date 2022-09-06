document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price){
  const message =  `Hallo Saya mau beli ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6282211129043?text=${message}`
  open(whatsapp, "_blank")
}

function chat(){
  alert('Hallo min saya mau tanya nihh...')
}

function chat(chatting){
  const message =  `Hallo Min..`
  const whatsapp = `https://wa.me/6282211129043?text=${message}`
  open(whatsapp, "_blank")
}