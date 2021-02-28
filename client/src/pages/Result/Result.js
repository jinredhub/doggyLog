import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';

import './Result.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
// import Button from '@material-ui/core/Button';
// import Slider from '@material-ui/core/Slider';

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

        let result = null;
        if(this.props.loadingGlobal){
            result = <div>loading icon</div>;
        }
        else{
            result = (
                <div>result here</div>
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

                        {result}
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
        loadingGlobal: state.addNewDogRedu.loading,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetDogDataFromDb: () => dispatch(actionCreators.getDogDataFromDb()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);