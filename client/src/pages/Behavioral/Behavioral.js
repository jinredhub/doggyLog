import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Behavioral.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import * as actionCreators from '../../store/actions/index';

class Behavioral extends Component {
    state={
        behave: {
            activeBarking: false,
            activeChewing: false,
            activeAggression: false,
            activeFood: false,
            activeHowling: false,
            activeNibbling: false,
            activeSeparation: false,
            activeWhining: false,
        },
        dietary: {
            appetite: 3,
            water: 4,
            restroom: 1,
        },
    };

    sliderHandler = (type, ev, val) =>{
        console.log('ev', ev);
        console.log('type: ', type);
        console.log('val: ', val);

        if(type === 'appetite'){
            const dietary = {...this.state.dietary};
            dietary.appetite = val;

            this.setState({
                dietary: dietary
            });
        }
        else if(type === 'water'){
            const dietary = {...this.state.dietary};
            dietary.water = val;

            this.setState({
                dietary: dietary
            });
        }
        else if(type === 'restroom'){
            const dietary = {...this.state.dietary};
            dietary.restroom = val;

            this.setState({
                dietary: dietary
            });
        }
    }

    behavioralButtonHandler = (type) =>{
        console.log('type', type);

        if(type === 'barking'){
            const behave = {...this.state.behave};
            behave.activeBarking = !this.state.behave.activeBarking;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'chewing'){
            const behave = {...this.state.behave};
            behave.activeChewing = !this.state.behave.activeChewing;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'aggression'){
            const behave = {...this.state.behave};
            behave.activeAggression = !this.state.behave.activeAggression;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'food'){
            const behave = {...this.state.behave};
            behave.activeFood = !this.state.behave.activeFood;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'howling'){
            const behave = {...this.state.behave};
            behave.activeHowling = !this.state.behave.activeHowling;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'nibbling'){
            const behave = {...this.state.behave};
            behave.activeNibbling = !this.state.behave.activeNibbling;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'separation'){
            const behave = {...this.state.behave};
            behave.activeSeparation = !this.state.behave.activeSeparation;

            this.setState({
                behave: behave
            });
        }
        else if(type === 'whining'){
            const behave = {...this.state.behave};
            behave.activeWhining = !this.state.behave.activeWhining;

            this.setState({
                behave: behave
            });
        }
    }

    render(){
        console.log('=========', this.state);
        console.log('this props, Behavioral page: ', this.props);
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
                            <div style={{paddingTop: '10px', color: '#b79593', fontSize: '16px'}}>{this.props.newDogGlobal.name}</div>
                        </div>

                        <div className='disp-flex' style={{paddingTop: '53px'}}>
                            <div className="flex-50 leftDiv" style={{paddingRight: '100px'}}>
                                <h1>Behaviral</h1>
                                <div className='disp-flex' style={{paddingTop: '46px', flexWrap: 'nowrap'}}>
                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeBarking ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'barking')}>
                                            <span>Barking</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeChewing ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'chewing')}>
                                            <span>Chewing</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeAggression ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'aggression')}>
                                            <span>Aggression</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeFood ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'food')}>
                                            <span>Food Guarding</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='disp-flex' style={{paddingTop: '8px', flexWrap: 'nowrap'}}>
                                    <div className="flex-25">
                                    <   div className={`squareButton ${this.state.behave.activeHowling ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'howling')}>
                                            <span>Howling</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeNibbling ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'nibbling')}>
                                            <span>Nibbling</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeSeparation ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'separation')}>
                                            <span>Separation Anxiety</span>
                                        </div>
                                    </div>

                                    <div style={{width: '8px'}}></div>

                                    <div className="flex-25">
                                        <div className={`squareButton ${this.state.behave.activeWhining ? "active" : null}`} onClick={this.behavioralButtonHandler.bind(this, 'whining')}>
                                            <span>Whining</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-50" style={{paddingLeft: '10px'}}>
                                <h1>Dietary &amp; Digestional</h1>

                                <div style={{paddingTop: '54px', paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>APPETITE</div>
                                
                                <div className='disp-flex align-items--center' style={{flexWrap: 'nowrap'}}>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.dietary.appetite} 
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
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>

                                <div style={{paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>WATER</div>
                                
                                <div className='disp-flex align-items--center' style={{flexWrap: 'nowrap'}}>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.dietary.water} 
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
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>

                                <div style={{paddingLeft: '33px', color: '#b69593', fontSize: '10px'}}>RESTROOM</div>
                                
                                <div className='disp-flex align-items--center' style={{flexWrap: 'nowrap'}}>
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginRight: '11px', backgroundColor: '#b69593'}}></div>
                                    <div className='flex-50' style={{position: 'relative'}}>
                                        <Slider 
                                            value={this.state.dietary.restroom} 
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
                                    <div style={{opacity: '0.2', width: '22px', height: '22px', borderRadius: '100px', marginLeft: '11px', backgroundColor: '#b69593'}}></div>
                                </div>
                                
                            </div>
                        </div>

                        <div style={{paddingTop: '139px', paddingBottom: '60px' ,textAlign: 'center'}}>
                            <Link to='/result'>
                                <Button 
                                    variant='contained'
                                    style={{backgroundColor: '#553635', color: 'white', fontSize: '14px', padding: '18px 23px', 'borderRadius': '10px'}}
                                    onClick={()=>this.props.onDogBehavioralAdded(this.state.behave, this.state.dietary, this.props.newDogGlobal)}
                                >NEXT
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </ThemeProvider>
        )
    }
}

// access state in reducer
const mapStateToProps = state =>{
    return {
        newDogGlobal: state.addNewDogRedu.newDog,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onDogBehavioralAdded: (behave, dietary, newDogObj) => dispatch(actionCreators.addDogBehavioralThenPost(behave, dietary, newDogObj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Behavioral);