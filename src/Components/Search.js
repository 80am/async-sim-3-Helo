import React, { Component } from 'react'
import './Search.css'
import { withRouter } from 'react-router'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Search extends Component {

    constructor(props) {
        super(props)
            this.state = {
                count: ''
        }
    }


    componentDidMount(){
        axios.get('/api/numberofpeople').then( res => this.setState({count:res.data}))
    }

    render() {

        var numberofPages = (this.state.count / 4)
        var actualCount = Math.ceil(numberofPages)
        

        // function(num){
        //     if( this.state.count%3!=0){
        //         (this.state.count++ )
        //     }
        // }
        return (
            <mainbody>
                <header>
                    <div className="headerleft">
                    <Link to="/">
                        <button className="headerhelo">Helo</button>
                        </Link>
                        <Link to='/dashboard'>
                            <img src={home} alt="" />
                        </Link>
                        <Link to='/Search'>
                            <img src={search} alt="" />
                        </Link>
                    </div>

                    <div className="headercenter">
                        <div>Search</div>
                    </div>

                    <div className="headerright">
                        <div>Logout</div>
                    </div>
                </header>
                <div className="the61"></div>
                <div className="lowerhalf3">
                    <div className="middlewhitebox3">
                        <lowertop3>
                            {/* filter part at the top     */}
                            <select className="selectbox">
                                <option value=""></option>
                                <option value="firstname">First Name</option>
                                <option value="lastname">Last Name</option>
                            </select>
                            <input type="text" />
                            <button className="searchbutton">Search</button>
                            <button className="resetbutton">Reset</button>

                        </lowertop3>
                        <midbottom3>
                            {/* where friends load in     */}


                        </midbottom3>
                        <lowerbottom3>
                            {/* bottom where page bar is     */}


                            <div className="pagebar">
                                <a href="#">1</a>
                                <a class="active" href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">7</a>
                                <a href="#">8</a>
                                <a href="#">9</a>
                                <a href="#">10</a>
                                <a href="#">11</a>
                                <a href="#">12</a>

                            </div>
                        </lowerbottom3>
                    </div>
                </div>
            </mainbody>

        )
    }
}
export default Search