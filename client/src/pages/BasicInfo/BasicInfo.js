import React, { Component } from 'react';
import './BasicInfo.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

class BasicInfo extends Component {
    state={
        month: '',
        day: '',
        year: '',
        weight: '',
    };

    inputHandler = (ev, type) =>{
        const val = ev.target.value;
        console.log('val: ', val);
        console.log('ev: ', ev);

        if(type === 'month'){
            this.setState({
                month: val,
            });
        }
        else if(type === 'day'){
            this.setState({
                day: val,
            });
        }
        else if(type === 'year'){
            this.setState({
                year: val,
            });
        }
        else if(type === 'weight'){
            this.setState({
                weight: val
            });
        }
    }

    render(){
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
                <div className='BasicInfo'>
                    <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>
                    <section>
                        <div className='disp-flex flex-dir-col align-items--center' style={{paddingTop: '80px'}}>
                            <div className='dogImgBg'>
                                <img src={groupLogo} alt="group logo" style={{width: '45px'}}/>
                            </div>
                            <div style={{paddingTop: '10px', color: '#b79593', fontSize: '16px'}}>NAME</div>
                        </div>

                        <h1 style={{paddingTop: '53px'}}>Basic Info</h1>

                        <div style={{paddingTop: '45px', fontSize: '10px', color: '#b79593'}}>DATE</div>

                        <div style={{paddingTop: '19px'}} className='disp-flex'>
                            <div className='flex-33' style={{paddingRight: '10px'}}>
                                <Select 
                                    onChange={(ev)=>this.inputHandler(ev, 'month')}
                                    value={this.state.month}
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
                                    value={this.state.day}
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
                                    value={this.state.year}
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

                        <div style={{paddingTop: '50px'}}>
                            <TextField
                                label='WEIGHT'
                                id='WEIGHT'
                                onChange={(ev)=>this.inputHandler(ev, 'weight')}
                                value={this.state.weight}
                                style={{width: '100%'}}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </div>

                        <div style={{paddingTop: '139px', textAlign: 'center'}}>
                            <Button 
                                href='/behavioral'
                                variant='contained'
                                style={{backgroundColor: '#553635', color: 'white', fontSize: '14px', padding: '18px 23px', 'borderRadius': '10px'}}
                            >NEXT
                            </Button>
                        </div>
                    </section>
                </div>
            </ThemeProvider>
        )
    }
}

export default BasicInfo;