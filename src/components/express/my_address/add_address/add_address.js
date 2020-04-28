import React from 'react';
import classNamees from './css/add_address.module.css';
import TextLvl1 from "../../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import Button_return from "../../../common/standarts_elements/button/button_return/button_return";
import TextLvl3 from "../../../common/style_text/header_text/text_lvl_3/text_lvl_3";
import Autocomplite from "../../../common/autocomplite/autocomlite";

const AddAddress = (props) => {
    let updateCountry = () => {
        props.updateTextCountry();
    }
    let updateCite = () => {
        props.updateTextCity();
    }
    let updateStreet = () => {
        props.updateTextStreet();
    }
    let updateHouse = () => {
        props.updateTextHouse();
    }
    let updateFlat = () => {
        props.updateTextFlat();
    }
    let updateIndex = () => {
        props.updateTextIndex();
    }
    return <div className={'container'}>
        <div className={'row'}>
            <div className={'col-12'}>
                <div className={'row mt-5'}>
                    <div className={'col-6'}>
                        <input type="text" onChange={updateCountry} value={props.addressPage.country}
                               className={classNamees.input} data-provide="typeahead"/>
                        <label className={classNamees.label_text}>Страна</label>
                        <Autocomplite nameInput={'city'} value={props.addressPage.country}/>
                    </div>
                    <div className={'col-6'}>
                        <input type="text" onChange={updateCountry} value={props.addressPage.country}
                               className={classNamees.input} data-provide="typeahead"/>
                        <label className={classNamees.label_text}>Город</label>
                        <Autocomplite/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/*<div className={classNamees.main_block}>*/
    }
    {/*    <div>*/
    }
    {/*        <Button_return/>*/
    }
    {/*        <TextLvl1 text={'Добавить адрес'}/>*/
    }
    {/*    </div>*/
    }
    {/*    <div className={classNamees.block}>*/
    }
    {/*            <TextLvl3 text={'Заполните адрес'}/>*/
    }
    {/*    <div className={classNamees.all_wrapper}>*/
    }
    {/*        <div className={classNamees.wrapper}>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_left}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input type="text"  onChange={updateCountry} value={props.addressPage.country} className={classNamees.input} data-provide="typeahead"/>*/
    }
    {/*                        /!*<input placeholder={'Россия'}  onChange={updateCountry} type='text'  className={classNamees.input}/>*!/*/
    }
    {/*                        <label className={classNamees.label_text}>Страна</label>*/
    }
    {/*                        <Autocomplite/>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_right}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input onChange={updateCite} value={props.addressPage.city} type='text'  className={classNamees.input}/>*/
    }
    {/*                        <label className={classNamees.label_text}>Город</label>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*        <div className={classNamees.wrapper}>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_left}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input onChange={updateStreet}  value={props.addressPage.street} type='text'  className={classNamees.input}/>*/
    }
    {/*                        <label className={classNamees.label_text}>Улица</label>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_right}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input onChange={updateHouse} value={props.addressPage.house} type='text'  className={classNamees.input}/>*/
    }
    {/*                        <label className={classNamees.label_text}>Дом/Корпус</label>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*        <div className={classNamees.wrapper}>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_left}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input onChange={updateFlat}  value={props.addressPage.flat} type='text'  className={classNamees.input}/>*/
    }
    {/*                        <label className={classNamees.label_text}>Квартира/Офис</label>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*            <div className={classNamees.nesting}>*/
    }
    {/*                <div className={classNamees.nesting_right}>*/
    }
    {/*                    <div className={classNamees.block_input}>*/
    }
    {/*                        <input onChange={updateIndex} value={props.addressPage.index} type='text'  className={classNamees.input}/>*/
    }
    {/*                        <label className={classNamees.label_text}>Индекс</label>*/
    }
    {/*                    </div>*/
    }
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*        <div>*/
    }

    {/*        </div>*/
    }
    {/*        <div>*/
    }

    {/*        </div>*/
    }
    {/*        <div>*/
    }

    {/*        </div>*/
    }
    {/*        <div>*/
    }

    {/*        </div>*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }
    {/*</div>*/
    }
};
export default AddAddress;