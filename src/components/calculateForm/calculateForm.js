import React from 'react';
import classes from './calculateForm.module.css';
import Select from 'react-select'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import BlockDataCargo from './blockDataCargo/blockDataCargo';

const CalculateForm = (props) => {
    //debugger
    let listCargo = Object.values(props.calculate.listCargo).map(option => (
        <BlockDataCargo
            updateWeight={props.weightData}
            updateHeight={props.heightData}
            updateWidth={props.widthData}
            updateVolume={props.volumeData}
            updateLenght={props.lenghtData}
            updateQuantity={props.quantityData}
            updateStatus={props.updateStatusParameters}
            validVolume={option.validVolume}
            validQuantity={option.validQuantity}
            validWidth={option.validWidth}
            validHeight={option.validHeight}
            validLenght={option.validLenght}
            validWeight={option.validWeight}
            weight={option.weight}
            height={option.height}
            volume={option.volume}
            lenght={option.lenght}
            status={option.status}
            width={option.width}
            quantity={option.quantity}
            id={option.id}
            props={props} />
    ))
    return <div className={'container-fluid' + ' ' + classes.main}>
        <div className={'container'}>
            <div className='row text-center'>
                <div className={'col-12 text-center mt-5 mb-5'}>
                    <h3 className={classes.header}>
                        Лучший способ заказать доставку<br />
                    по самой выгодной цене
                </h3>
                </div>
                <div className={'col-12'}>
                    <div className={classes.blockCalculate}>
                        <div className={'row '}>
                            <div className={'col-lg-5  pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.sendingCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Город отправки груза" variant="outlined" />}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                            <div className={'col-lg-5 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.destinationCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Город доставки груза" variant="outlined" />}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                            <div className={'col-lg-2 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.destinationCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Тип груза" variant="outlined" />}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-12'}>
                    {listCargo}
                </div>
                <div className={'col-12 text-right'}>
                    <button className={classes.buttonAddCargo} onClick={() => (props.addCargo(props.calculate.listCargo.length))}>
                        <svg className={classes.svg} width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0V16M16 8H0" stroke="black"/>
                        </svg>
                         Добавить груз
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default CalculateForm;