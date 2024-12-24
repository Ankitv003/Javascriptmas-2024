import { codedMessage } from './codedMessage.js'

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/ 
let decodedMessage = '';
codedMessage.forEach((item)=>{
let ascii=parseInt(item,2)-10
  if(ascii < 32){
        ascii = 128 - (32 - ascii)
    }
    decodedMessage += String.fromCharCode(ascii);
})

console.log(decodedMessage)