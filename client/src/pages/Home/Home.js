import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Home.css';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import * as actionTypes from '../../store/actions';

class Home extends Component {
    state={
        name: '',
        breed: '',
        birthdate: {
            month: '',
            day: '',
            year: '',
        }
    };

    inputHandler = (ev, type) =>{
        const val = ev.target.value;
        console.log('val: ', val);
        console.log('type: ', type);

        if(type === 'name'){
            this.setState({
                name: val,
            });
        }
        else if(type === 'breed'){
            this.setState({
                breed: val,
            });
        }
        else if(type === 'month'){
            const birthdate = {...this.state.birthdate};
            birthdate.month = val;

            this.setState({
                birthdate: birthdate,
            });
        }
        else if(type === 'day'){
            const birthdate = {...this.state.birthdate};
            birthdate.day = val;

            this.setState({
                birthdate: birthdate
            });
        }
        else if(type === 'year'){
            const birthdate = {...this.state.birthdate};
            birthdate.year = val;
            this.setState({
                birthdate: birthdate
            });
        }
        
    }

    render(){
        console.log('=========', this.state);
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#b79593'
                }
            },
            typography: {
                fontFamily: 'Lato, sans-serif'
            }
        });

        return (
            <ThemeProvider theme={theme}>
                <div className='Home'>
                    <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>

                    <section>
                        <div className='disp-flex' style={{paddingTop: '190px'}}>
                            <div className='flex-50'>
                                <h1>Your Doggy Profile</h1>
                                <div style={{paddingTop: '50px'}}>
                                    <TextField
                                        label='NAME'
                                        id='name'
                                        onChange={(ev)=>this.inputHandler(ev, 'name')}
                                        value={this.state.name}
                                        style={{width: '100%', color: 'red'}}
                                    />  
                                </div>

                                <div style={{paddingTop: '55px'}}>
                                    <TextField
                                        label='BREED'
                                        id='breed'
                                        onChange={(ev)=>this.inputHandler(ev, 'breed')}
                                        value={this.state.breed}
                                        style={{width: '100%'}}
                                    />
                                </div>

                                <div style={{paddingTop: '74px', fontSize: '10px', color: '#b79593'}}>BIRTHDATE</div>

                                <div style={{paddingTop: '19px'}} className='disp-flex'>
                                    <div className='flex-33' style={{paddingRight: '10px'}}>
                                        <Select 
                                            onChange={(ev)=>this.inputHandler(ev, 'month')}
                                            value={this.state.birthdate.month}
                                            style={{width: '100%', backgroundColor: '#b39593', color: 'white'}}
                                            variant='filled'
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>
                                        </Select>
                                    </div>
                                    <div className='flex-33' style={{paddingRight: '5px'}}>
                                        <Select 
                                            onChange={(ev)=>this.inputHandler(ev, 'day')}
                                            value={this.state.birthdate.day}
                                            style={{width: '100%', backgroundColor: '#b39593', color: 'white'}}
                                            variant='filled'
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={13}>13</MenuItem>
                                            <MenuItem value={14}>14</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                            <MenuItem value={16}>16</MenuItem>
                                            <MenuItem value={17}>17</MenuItem>
                                            <MenuItem value={18}>18</MenuItem>
                                            <MenuItem value={19}>19</MenuItem>
                                            <MenuItem value={20}>20</MenuItem>
                                            <MenuItem value={21}>21</MenuItem>
                                            <MenuItem value={22}>22</MenuItem>
                                            <MenuItem value={23}>23</MenuItem>
                                            <MenuItem value={24}>24</MenuItem>
                                            <MenuItem value={25}>25</MenuItem>
                                            <MenuItem value={26}>26</MenuItem>
                                            <MenuItem value={27}>27</MenuItem>
                                            <MenuItem value={28}>28</MenuItem>
                                            <MenuItem value={29}>29</MenuItem>
                                            <MenuItem value={30}>30</MenuItem>
                                            <MenuItem value={31}>31</MenuItem>
                                        </Select>
                                    </div>
                                    <div className='flex-33' style={{paddingLeft: '5px'}}>
                                        <Select 
                                            onChange={(ev)=>this.inputHandler(ev, 'year')}
                                            value={this.state.birthdate.year}
                                            style={{width: '100%', backgroundColor: '#b39593', color: 'white'}}
                                            variant='filled'
                                        >
                                            <MenuItem value={1993}>1993</MenuItem>
                                            <MenuItem value={1994}>1994</MenuItem>
                                            <MenuItem value={1995}>1995</MenuItem>
                                            <MenuItem value={1996}>1996</MenuItem>
                                            <MenuItem value={1997}>1997</MenuItem>
                                            <MenuItem value={1998}>1998</MenuItem>
                                            <MenuItem value={1999}>1999</MenuItem>
                                            <MenuItem value={2000}>2000</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                                <div style={{paddingTop: '58px', textAlign: 'right'}}>
                                    <Button 
                                        // href='/start'
                                        variant='contained'
                                        style={{backgroundColor: '#553635', color: 'white', fontSize: '14px'}}
                                        onClick={()=>this.props.onDogAdded(this.state.name, this.state.breed, this.state.birthdate)}
                                    >NEXT
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-50 disp-flex justify-content--end">
                                <div style={{textAlign: 'center'}}>
                                    <div className='dogImgBg'>
                                        <img src={groupLogo} alt="group logo" style={{width: '105px'}}/>
                                    </div>
                                    <div style={{color: '#b79593', fontSize: '24px', fontWeight: 'bold', paddingTop: '49px'}}>FIDO</div>
                                    <div style={{color: '#b79593', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'}}>Golden Lab</div>
                                    <div style={{color: '#b79593', fontSize: '24px', fontWeight: 'bold', paddingTop: '21px'}}>5 Years Old</div>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state =>{
    return {
        // nameMap: state.name,
        // breedMap: state.breed,
        // monthMap: state.month,
        // dayMap: state.day,
        // yearMap: state.year,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        // onInputHandler: (ev, inputType) => dispatch({type: actionTypes.INPUT_HANDLER, ev: ev, inputTtype: inputType}),
        onDogAdded: (name, breed, birthdate) => dispatch({type: actionTypes.ADD_DOG, name: name, breed: breed, birthdate: birthdate}),
        // or
        // onDogAdded: (name, breed, birthdate) => dispatch({type: actionTypes.ADD_DOG, dog: {name: name, breed: breed}, birthdate: birthdate}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);