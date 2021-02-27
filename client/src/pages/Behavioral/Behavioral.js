import React, { Component } from 'react';
import './Behavioral.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

class Behavioral extends Component {
    state={
        appetite: 3,
        water: 4,
        restroom: 1,
        activeBarking: false,
        activeChewing: false,
        activeAggression: false,
        activeFood: false,
        activeHowling: false,
        activeNibbling: false,
        activeSeparation: false,
        activeWhining: false,
    };

    inputHandler = (ev, type) =>{
        const val = ev.target.value;
        console.log('val: ', val);
        console.log('ev: ', ev);
        console.log('type: ', type);

        // if(type === 'name'){
        //     this.setState({
        //         name: val,
        //     });
        // }
        // else if(type === 'breed'){
        //     this.setState({
        //         breed: val,
        //     });
        // }
        // else if(type === 'month'){
        //     this.setState({
        //         month: val,
        //     });
        // }
    }

    sliderHandler = (type, ev, val) =>{
        console.log('ev', ev);
        console.log('type: ', type);
        console.log('val: ', val);

        if(type === 'appetite'){
            this.setState({
                appetite: val
            });
        }
        else if(type === 'water'){
            this.setState({
                water: val
            });
        }
        else if(type === 'restroom'){
            this.setState({
                restroom: val
            });
        }

    }

    behavioralButtonHandler = (type) =>{
        console.log('type', type);

        if(type === 'barking'){
            this.setState({
                activeBarking: !this.state.activeBarking
            });
        }
        else if(type === 'chewing'){
            this.setState({
                activeChewing: !this.state.activeChewing
            });
        }
        else if(type === 'aggression'){
            this.setState({
                activeAggression: !this.state.activeAggression
            });
        }
        else if(type === 'food'){
            this.setState({
                activeFood: !this.state.activeFood
            });
        }
        else if(type === 'howling'){
            this.setState({
                activeHowling: !this.state.activeHowling
            });
        }
        else if(type === 'nibbling'){
            this.setState({
                activeNibbling: !this.state.activeNibbling
            });
        }
        else if(type === 'separation'){
            this.setState({
                activeSeparation: !this.state.activeSeparation
            });
        }
        else if(type === 'whining'){
            this.setState({
                activeWhining: !this.state.activeWhining
            });
        }
    }

    render(){
        console.log('==================', this.state);
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
                <div className='Behavioral'>
                    <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>
                    <section>
                        <div className='disp-flex flex-dir-col align-items--center' style={{paddingTop: '80px'}}>
                            <div className='dogImgBg'>
                                <img src={groupLogo} alt="group logo" style={{width: '45px'}}/>
                            </div>
                            <div style={{paddingTop: '10px', color: '#b79593', fontSize: '16px'}}>NAME</div>
                        </div>

                        <div className='disp-flex' style={{paddingTop: '53px'}}>
                            <div className="flex-50" style={{paddingRight: '100px'}}>
                                <h1>Behaviral</h1>
                                <div className='disp-flex' style={{paddingTop: '46px'}}>
                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeBarking ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'barking')}>
                                            <span>Barking</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeChewing ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'chewing')}>
                                            <span>Chewing</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeAggression ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'aggression')}>
                                            <span>Aggression</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeFood ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'food')}>
                                            <span>Food Guarding</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='disp-flex' style={{paddingTop: '8px'}}>
                                    <div className="flex-25">
                                    <   div className={`squareButton ${this.state.activeHowling ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'howling')}>
                                            <span>Howling</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeNibbling ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'nibbling')}>
                                            <span>Nibbling</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeSeparation ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'separation')}>
                                            <span>Separation Anxiety</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.activeWhining ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'whining')}>
                                            <span>Whining</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-50" style={{paddingLeft: '10px'}}>
                                <h1>Dietary &amp; Digestional</h1>

                                <div style={{paddingTop: '54px', paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>APPETITE</div>
                                
                                <div className='disp-flex align-items--center'>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.appetite} 
                                            min={0}
                                            max={6}
                                            onChange={this.sliderHandler.bind(this, 'appetite')}
                                            step={1}
                                        />
                                        <div className='disp-flex justify-content--space-between' style={{position: 'absolute', width: '100%', height: '100%', top: '35%', left: 0, zIndex: -1}}>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                        </div>
                                    </div>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>

                                <div style={{paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>WATER</div>
                                
                                <div className='disp-flex align-items--center'>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.water} 
                                            min={0}
                                            max={6}
                                            onChange={this.sliderHandler.bind(this, 'water')}
                                            step={1}
                                        />
                                        <div className='disp-flex justify-content--space-between' style={{position: 'absolute', width: '100%', height: '100%', top: '35%', left: 0, zIndex: -1}}>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                        </div>
                                    </div>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>

                                <div style={{paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>RESTROOM</div>
                                
                                <div className='disp-flex align-items--center'>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.restroom} 
                                            min={0}
                                            max={6}
                                            onChange={this.sliderHandler.bind(this, 'restroom')}
                                            step={1}
                                        />
                                        <div className='disp-flex justify-content--space-between' style={{position: 'absolute', width: '100%', height: '100%', top: '35%', left: 0, zIndex: -1}}>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                            <div className='sliderScale'></div>
                                        </div>
                                    </div>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', backgroundColor: 'red', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>
                                
                            </div>
                        </div>

                        <div style={{paddingTop: '139px', textAlign: 'center'}}>
                            <Button 
                                href='/result'
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

export default Behavioral;