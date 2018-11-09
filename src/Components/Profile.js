import React, { Component } from 'react'
import './Profile.css'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from "axios"

class Profile extends Component {

    constructor(props){
        super(props)
    
        this.state={
            name:'',
            last:'',
            gender:'',
            hair:'',
            eye:'',
            hobby:'',
            birthday:'',
            birthmonth:'',
            birthyear:'',
            image:''

        }

        this.handleName=this.handleName.bind(this)
        this.handleLast=this.handleLast.bind(this)
        this.handleGender=this.handleGender.bind(this)
        this.handleHair=this.handleHair.bind(this)
        this.handleEye=this.handleEye.bind(this)
        this.handleHobby=this.handleHobby.bind(this)
        this.handleDay=this.handleDay.bind(this)
        this.handleMonth=this.handleMonth.bind(this)
        this.handleYear=this.handleYear.bind(this)
        this.handleImage=this.handleImage.bind(this)
        this.updateInfo=this.updateInfo.bind(this)
    }
    
    componentDidMount(){
        axios.get('/api/myinfo/')
        .then(res => console.log(res)
            // (res)=>this.setState ({name:res.data[0].firstname, last:res.data[0].lastname, gender: res.data[0].gender, hair: res.data[0].hair_color, eye: res.data[0].eye_color, hobby: res.data[0].hobby, birthday: res.data[0].birthday, birthmonth: res.data[0].birth_month, birthyear: res.data[0].birth_year, image: res.data[0].image})
        )
        console.log('this is state on DIDMOUNT', this.state)
    }

    handleName(e) {
        // console.log(this.props.addfirstName)
        this.props.addfirstName(e.target.value)
        this.props.addimage(`https://robohash.org/${e.target.value}.png?bgset=bg1`)
    }
    handleLast(e) {
        // console.log(this.props.addlastName)
        this.props.addlastName(e.target.value)
    }
    handleGender(e) {
        // console.log(this.props.addgender)
        this.props.addgender(e.target.value)
    }
    handleHair(e) {
        // console.log(this.props.addhairColor)
        this.props.addhairColor(e.target.value)
    }
    handleEye(e) {
        // console.log(this.props.addeyeColor)
        this.props.addeyeColor(e.target.value)
    }
    handleHobby(e) {
        // console.log(this.props.addhobby)
        this.props.addhobby(e.target.value)
    }
    handleDay(e) {
        // console.log(this.props.addbirthDay)
        this.props.addbirthDay(e.target.value)
    }
    handleMonth(e) {
        // console.log(this.props.addbirthMonth)
        this.props.addbirthMonth(e.target.value)
    }
    handleYear(e) {
        // console.log(this.props.addbirthYear)
        this.props.addbirthYear(e.target.value)
    }
    handleImage(e) {
        // console.log(this.props.addimage)
        this.props.addimage(`https://robohash.org/${e.target.value}.png?bgset=bg1`)
    }
    updateInfo(){
        axios.put('/api/updateInfo/', this.props.persons).then((res) => {
            // if(res.message)alert(res.message)
            // else{
            this.props.history.push('/Dashboard')
        // }
        }).catch((err)=>{alert("fill in everything")})
    }
  
    
    render(){
        console.log('this is state on render', this.state)
        var image = this.state.image ? this.state.image : `https://robohash.org/${this.props.firstname}.png?bgset=bg1`
        // var select = document.getElementById("example-select");
        // select.options[select.options.length] = new Option('Text 1', 'Value1');
        // console.log(this.props.addbirthYear)
        var uppername = (`${this.props.firstname}`)
        var name = uppername.toUpperCase();
        
        var upperlast = (`${this.props.lastname}`)
        var last = upperlast.toUpperCase();
        
        return(
            <mainbody>
                <header>
                    <div className="headerleft2">
                    <Link to="/">
                        <button className="headerhelo">Helo</button>
                        </Link>
                        <Link to='/dashboard'>
                        <img src={home} alt=""/>
                        </Link>
                        <Link to='/Search'>
                        <img src={search} alt=""/>
                        </Link>
                    </div>
                    
                    <div className="headercenter2">
                    <div>Profile</div>
                    </div>
                    
                    <div className="headerright2">
                    <a href="http://localhost:5001/logout">
                        <button>Logout</button>
                        </a>
                    </div>
                </header>
                <div className="the6"></div>
                <div className="lowerhalf2">
                <div className="middlewhitebox2">
                <lowertop className="twobox2">
                    <div className="boxleft2">                  
                        <div onChange={this.handleImage} className="userpic">
                        <img 
                        src={image} height="100%" width="100%"/>
                        
                        </div>                  
                        <div>
                        <p><b>{name}</b></p>
                        <p><b>{last}</b></p>
                        {/* <button>add picture</button> */}
                        </div>
                    </div>
                    <div className="boxright2">
                        <button onClick={this.updateInfo} className="update">Update</button>
                       <Link to="/Dashboard">
                        <button className="cancelbutton">Cancel</button>
                        </Link>
                    
                    </div>
                </lowertop>

                <lowerbottom2>
                    <p>First Name</p>
                    <input type="text" onChange={this.handleName} value={this.props.firstname} placeholder="Enter Firstname"/>
                    <p>Last Name</p>
                    <input type="text" onChange={this.handleLast} value={this.props.lastname} placeholder="Enter Lastname"/>
                    <p>Gender</p>
                    <select onChange={this.handleGender} value={this.props.gender}> 
                        <option name="" value=""></option>
                        <option name="" value="Male">Male</option>
                        <option name="" value="Female">Female</option>
                        <option name="" value="Robot">Robot</option>
                    </select>
                    <p>Hair Color</p>
                    <select onChange={this.handleHair} value={this.props.haircolor}>
                        <option name="" value=""></option>
                        <option name="" value="Blonde">Blonde</option>
                        <option name="" value="Steel">Sleel</option>
                        <option name="" value="Black">Black</option>
                        <option name="" value="None">None</option>
                    </select>
                    <p>Eye Color</p>
                    <select onChange={this.handleEye} value={this.props.eyecolor}>
                        <option name="" value=""></option>
                        <option name="" value="Blue">Blue</option>
                        <option name="" value="Green">Green</option>
                        <option name="" value="Black">Black</option>
                    </select>
                    <p>Hobby</p>
                    <select onChange={this.handleHobby} value={this.props.hobby}>
                        <option name="" value=""></option>
                        <option name="" value="Complaining">Complaining</option>
                        <option name="" value="Robot">Being a Robot</option>
                        <option name="" value="FallingDown">Falling Down</option>
                    </select>
                    <p>Birthday Day</p>
                    <select onChange={this.handleDay} value={this.props.birthday}>
                        <option name="" value=""></option>
                        <option name="" value="1">1</option>
                        <option name="" value="2">2</option>
                        <option name="" value="3">3</option>
                    </select>
                    <p>Birthday Month</p>
                    <select onChange={this.handleMonth} value={this.props.birthmonth}>
                        <option name="" value=""></option>
                        <option name="" value="1">January</option>
                        <option name="" value="4">April</option>
                        <option name="" value="7">July</option>
                    </select>
                    <p>Birthday Year</p>
                    <select onChange={this.handleYear} value={this.props.birthyear}>
                        <option name="" value=""></option>
                        <option name="" value="1946">1946</option>
                        <option name="" value="2001">2001</option>
                    </select>
                   {/* <p>{this.props.firstname}</p> */}
                   {/* <p>{this.props.lastname}</p> */}
                   {/* <p>{this.props.gender}</p> */}
                   {/* <p>{this.props.haircolor}</p> */}
                   {/* <p>{this.props.eyecolor}</p> */}
                   {/* <p>{this.props.hobby}</p> */}
                   {/* <p>{this.props.birthday}</p> */}
                   {/* <p>{this.props.birthmonth}</p> */}
                   {/* <p>{this.props.birthyear}</p> */}
                   {/* <p>{this.props.image}</p> */}

                </lowerbottom2>
                </div>
                </div>
            </mainbody>
        )
    }
}

function mapStateToProps(state) {
    return{
    persons: state.person,
    firstname: state.person.firstname,
    lastname: state.person.lastname,
    gender: state.person.gender,
    haircolor: state.person.haircolor,
    eyecolor: state.person.eyecolor,
    hobby: state.person.hobby,
    birthday: state.person.birthday,
    birthmonth: state.person.birthmonth,
    birthyear: state.person.birthyear,
    image: state.person.image   
    }
}
  
const mapDispatchToProps = dispatch => ({
    // values going out to state
    addfirstName: value => dispatch({type: "ADD_FIRSTNAME", value: value}),
    addlastName: value => dispatch({type: "ADD_LASTNAME", value: value}),
    addgender: value => dispatch({type: "ADD_GENDER", value: value}),
    addhairColor: value => dispatch({type: "ADD_HAIRCOLOR", value: value}),
    addeyeColor: value => dispatch({type: "ADD_EYECOLOR", value: value}),
    addhobby: value => dispatch({type: "ADD_HOBBY", value: value}),
    addbirthDay: value => dispatch({type: "ADD_BIRTHDAY", value: value}),
    addbirthMonth: value => dispatch({type: "ADD_BIRTHMONTH", value: value}),
    addbirthYear: value => dispatch({type: "ADD_BIRTHYEAR", value: value}),
    addimage: value => dispatch({type: "ADD_IMAGE", value: value}),
   
})  

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
