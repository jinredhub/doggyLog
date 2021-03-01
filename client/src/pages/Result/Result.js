import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Result.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';

import * as actionCreators from '../../store/actions/index';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

class Result extends Component {
    state={
    };

    componentDidMount(){
        // // fetch data
        // const ref = firebase.database().ref();
        // ref.on('value', snap =>{
        //     console.log('snap: ', snap.val().myDogData);
        //     this.setState({
        //         dogData: snap.val().myDogData
        //     })
        // }, err =>{
        //     console.log('err: ', err);
        //     this.setState({error: true});
        // });

        this.props.onGetDogDataFromDb();
    }

    render(){
        console.log('state==========', this.state);
        console.log('this props, reducer page: ', this.props);

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

        let result = this.props.errorLoadingDbGlobal ? <div>Network error</div> : <div style={{fontSize: '24px', textAlign: 'center'}}>loading ...</div>;

        if(this.props.dbLoadedGlobal){
            result = (
                <div>
                    <div style={{textAlign: 'center', paddingBottom: '40px'}}>
                        <h1>Result</h1>
                    </div>
    
                    <div className='disp-flex displayResultDiv' style={{textAlign: 'center'}}>
                        <div className="flex-33">
                            <h2>Basic Info</h2>
                            <div><span>Name:</span> {this.props.dogDataGlobal.name ? this.props.dogDataGlobal.name : 'n/a'}</div>
                            <div><span>Breed:</span> {this.props.dogDataGlobal.breed ? this.props.dogDataGlobal.breed : 'n/a'}</div>
                            <div><span>Birthdate:</span> {this.props.dogDataGlobal.birthdate.month && this.props.dogDataGlobal.birthdate.day && this.props.dogDataGlobal.birthdate.year ? this.props.dogDataGlobal.birthdate.month + '/' + this.props.dogDataGlobal.birthdate.day + '/' + this.props.dogDataGlobal.birthdate.year : 'n/a'}</div>
                            <div><span>Date:</span> {this.props.dogDataGlobal.date.month && this.props.dogDataGlobal.date.day && this.props.dogDataGlobal.date.year ? this.props.dogDataGlobal.date.month + '/' + this.props.dogDataGlobal.date.day + '/' + this.props.dogDataGlobal.date.year : 'n/a'}</div>
                            <div><span>Weight:</span> {this.props.dogDataGlobal.weight ? this.props.dogDataGlobal.weight : 'n/a'}</div>
                        </div>
                        <div className="flex-33">
                            <h2>Behavioral</h2>
                            <div><span>Barking:</span> {this.props.dogDataGlobal.behave.activeBarking ? 'Yes' : 'No'}</div>
                            <div><span>Chwing:</span> {this.props.dogDataGlobal.behave.activeChewing ? 'Yes' : 'No'}</div>
                            <div><span>Aggression:</span> {this.props.dogDataGlobal.behave.activeAggression ? 'Yes' : 'No'}</div>
                            <div><span>Food Guarding:</span> {this.props.dogDataGlobal.behave.activeFood ? 'Yes' : 'No'}</div>
                            <div><span>Howling:</span> {this.props.dogDataGlobal.behave.activeHowling ? 'Yes' : 'No'}</div>
                            <div><span>Nibbling:</span> {this.props.dogDataGlobal.behave.activeNibbling ? 'Yes' : 'No'}</div>
                            <div><span>Separation Anxiety:</span> {this.props.dogDataGlobal.behave.activeSeparation ? 'Yes' : 'No'}</div>
                            <div><span>Whining:</span> {this.props.dogDataGlobal.behave.activeWhining ? 'Yes' : 'No'}</div>
                        </div>
                        <div className="flex-33">
                            <h2>Dietary &amp; Digestional</h2>
                            <div><span>Appetite:</span> {this.props.dogDataGlobal.dietary.appetite}</div>
                            <div><span>Water:</span> {this.props.dogDataGlobal.dietary.water}</div>
                            <div><span>Restroom:</span> {this.props.dogDataGlobal.dietary.restroom}</div>
                        </div>
                    </div>
                </div>
            );
        }
        
        return (
            <ThemeProvider theme={theme}>
                <div className='Result'>
                    <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>
                    <section>
                        <div className='disp-flex flex-dir-col align-items--center' style={{paddingTop: '80px'}}>
                            <div className='dogImgBg'>
                                <img src={groupLogo} alt="group logo" style={{width: '45px'}}/>
                            </div>
                            <div style={{paddingTop: '10px', color: '#b79593', fontSize: '16px'}}>{this.props.dogDataGlobal.name}</div>
                        </div>

                        <div style={{paddingTop: '50px'}}>
                            {result}
                        </div>
                    </section>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state =>{
    return {
        dogDataGlobal: state.addNewDogRedu.dogData,
        errorLoadingDbGlobal: state.addNewDogRedu.errorLoadingDb,
        dbLoadedGlobal: state.addNewDogRedu.dbLoaded,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetDogDataFromDb: () => dispatch(actionCreators.getDogDataFromDb()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);