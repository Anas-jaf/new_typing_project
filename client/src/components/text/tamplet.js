import React  from 'react'
import axios from "axios"
import {useState} from 'react' ;
function tamplet() {
    
      // constructor(props) {
      //     super(props)
      //     this.state = { term: ''}
      //     this.onFormSubmit = this.onFormSubmit.bind(this)
      // }
    
    const [text , settext] = useState([]);
      
      const  gettexts =() => {
        axios.get("http://localhost:3001/1").then((response) => {
          settext(response.data[0]);
        //   // response.preventDefault()
        //   // console.log(response.data[0])
        });
      //  e.preventDefault();
      };
    
      // const handleSubmitAxios = (data, e) => {
      //   // e.preventDefault(); // Actually, you don’t need to call this, Because it’s already called inside react hook form.
      //   e.stopPropagation()
      //   console.log(data)
      // }
      
      // const dontGoToLink= (e) => {
      //   e.preventDefault();
      //  }
      
      
    
    
    
      return (
        <div className="App">
           <div className="texts">
            {/* <h1>hi for everyone</h1> */}
       {/* {handleSubmitAxios()}      */}
            {/* <button onClick={gettexts}>Show text</button> */}
            {gettexts()}
            {/* {dontGoToLink()} */}
            {/* <a href="test.com" onClick={this.dontGoToLink /> */}
            {/* {text.map((val, key) => {
              if (key===0) {
              return (
                <h3 key={key}>{val.text}-{key}</h3>
                ) 
              }
              else{
                return null;
                }
              }
            )} */}
    
            {console.log(text)}
          </div>
    
    
        </div>
     
    // class app extends Component {
    //   constructor(props) {
    //       super(props)
    //       this.state = { term: ''}
    //       this.onFormSubmit = this.onFormSubmit.bind(this)
    //   }
    
    //   onFormSubmit = (event) => {
    //       event.preventDefault(); //What is 'preventDefault'
    //       console.log('onFormSubmit : ', this);
    //   }
    
    //   render() {
    //       console.log('app this.state', this)
    //       return (
    //           <div className="ui segment">
    //           <form onSubmit={this.onFormSubmit} className="ui form">
    //           <div className="field">
    //           <label>Image Search</label>
    //       <input
    //       type="text"
    //       value={this.state.term}
    //       onChange={(e) => this.setState({ term: e.target.value})}
    //       />
    //       </div>
    //       </form>
    //       </div>
    //   )
    //   }
    // }
    
    // export default app
      )}

export default tamplet