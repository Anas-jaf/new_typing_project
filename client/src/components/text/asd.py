from ast import Try
import os
import subprocess

# `1_سطر المركز`
# `2_السطر العلوي`
# `3_السطر السفلي`
# `4_اساسي`
# `5_كلمات مخادعة`
# `6_الحركات`
# `7_مقاطع عامة واحد`
# `8_ اساسي المرحلة  الاولى`
# `9_كلمات مخادعة الجزء الاول`
# `10_الارقام`
# `11_مقاطع عامة اثنين`
# `12_اساسي المرحلة الثانية`
# `13_الرموز`
# `14_مقاطع عامة الجزء الثالث`
# `15_متقدم الجزء الاول`
# `16_رموز اكثر`
# `17_كلمات مخادعة الجزء الثاني`
# `18_ متقدم الجزء الثالث`
# `19_متقدم الجزء الثاني`
# `20_متقدم المرحلة الرابعة`
# `21_متقدم المرحلة الخامسة`
# `22_متقدم المرحلة السادسة`
# `23_متقدم المرحلة السابعة`
# `24_متقدم المرحلة الثامنة`
# `25_متقدم المرحلة التاسعة`

# os.mkdir(`10_الارقام`)

# toname = "Peter"
# toemail = "p@tr"
# subject = "Hi"
# content = f"""From: Fromname <fromemail>
#     To: {toname} <{toemail}>
#     MIME-Version: 1.0
#     Content-type: text/html
#     Subject: {subject}

#     This is an e-mail message to be sent in HTML format

#     <b>This is HTML message.</b>
#     <h1>This is headline.</h1>
# """
# print (content)

def add_files():
  content = '''
  import React, { useEffect , useState }  from 'react'
  import axios from "axios"
  import "./styleSheet.css"

  // import React from 'react'

  function App%d() {
    const [texti , i , x ,i , settext] = useState([]);
    const [textidx , settexidx] = useState(0)
    // const [currIdx , setcurrIdx] = useState()
    const [currchar , setcurrchar ] = useState("")
    const [ rightchar , setrightchar] = useState([])
    const [ wrongchar , setwrongchar] = useState([]) 
    const  gettexts = async () => {
    await axios.get("http://localhost:3001/%d").then((response) => {
        settext(response.data[%d].text)i , i , x ,i;
      })i , i , x ,i;
    };

    function onKeyDown(event) {
      setcurrchar(event.key)

      if (event.keyCode !== 8){
        if (event.key === text[textidx] ){
          setrightchar(rightchar =>[...rightchar , textidx])
        }else if ( text.charCodeAt(textidx) === 160 && event.keyCode === 32){
          setrightchar(rightchar =>[...rightchar , textidx])
        }else{
          setwrongchar(wrongchar =>[...wrongchar , textidx])
        }
        
        console.log(text.charCodeAt(textidx), event.keyCode, '........')
        settexidx(textidx+1)
      }else{
        console.log(textidx)
        console.log(rightchar , wrongchar)
        setrightchar(rightchar.filter(number => number !== textidx))
        setwrongchar(wrongchar.filter(number => number !== textidx))
        settexidx(textidx-1)
      }
    }
    useEffect(()=>{
      gettexts()
      document.addEventListener("keydown" ,onKeyDown)
      return () => {
        document.removeEventListener('keydown', onKeyDown)
      }
    }, [textidx ,currchar , rightchar])

    function getCharClass(charIdx, char) {
      if(textidx ===charIdx){
        return "cursor"
    
      }
      if (  text[charIdx] === currchar ){
      }
      
      for (let index = 0; index < rightchar.length; index++) {
        const element = rightchar[index];
        if (element === charIdx){
          return 'done'
        }
      }
      for (let index = 0; index < wrongchar.length; index++) {
        const element = wrongchar[index];
        if (element === charIdx){
          return 'wrong'
        }
      }

    }

    return (
      <div>
        {text.toString().split('').map((char , charidx) =>{
          return <span key={charidx} className={getCharClass(charidx ,char)}>{char}</span>
        })}        
        <h1>{text[textidx]}</h1>
        <h1>{currchar}</h1>
      </div>
    )
  }

  export default App%d
  ''' 

  files_list= [11,15,24,30,10,32,10,24,10,22,10,24,23,10,24,20,10,23,24,30,30,30,30,30,31]
  counter = 0
  for i in files_list:
      counter=counter +1  
      print (str(counter)+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")     
      print(i)
      os.system(f"mkdir {counter}")
      for x in range(0 , i):
          print(x)
          with open(f'{counter}/app{x}.js', 'w') as f:
              f.write(content %(x ,counter, x, x))
          input ("element of the loop")
      print("**********************")
      input("end of the loop ")

def delete_files():
  for i in range(1,26):
    try:
      os.rmdir(f'{i}')
    except:
      pass
    print(i)
    # os.system(f'del /f {i}')    
  # subprocess.Popen('powershell.exe', 'Get-Process')
delete_files()