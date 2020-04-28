import React from 'react';
import classNamees from './Permanent_main.module.css';
import { NavLink } from "react-router-dom";
import KenguruIcons from "../../common/svgImg/kenguruIcons";
import KenguruText from "../../common/svgImg/kenguruText";
import ListMenu from "../../common/svgImg/listMenu";
import BlockMainSelect from "../../common/selectBlock/blockMainSelect";
import ListMenuIn from "../../common/svgImg/listMenuIn";
import ModalMobileMenu from "../../common/modal/modalMobileMenu/modalMobileMenu";

const Permanent_main = (props) => {
    let updateStatus = () => {
        props.newStatus(props.status);
    }
    return <div className={'container-fluid'}>
        <div className={'row' + ' ' + classNamees.mainBlock}>
            <div className={'col-lg-3 col-3 mt-lg-1 mb-1' + ' ' + classNamees.indexHeaderLogo}>
                <NavLink to="/kenguru">
                    <KenguruIcons />
                    <KenguruText />
                </NavLink>
            </div>
            <div className={'col-lg-6 text-center d-lg-inline d-none  col-6 align-self-center'}>
                <NavLink className={classNamees.phoneNumber} to="/transportCompany">Транспортные компании</NavLink>
                <NavLink className={classNamees.phoneNumber} to="/paymentMethod">Способы оплаты</NavLink>
                <NavLink className={classNamees.phoneNumber} to="/websitePlagin">Модуль для сайта</NavLink>
                <NavLink className={classNamees.phoneNumber} to="/contact">Контакты</NavLink>
            </div>
            <div className={'col-6 d-lg-none d-flex'}>

            </div>
            <div className={'col-lg-0 d-lg-none col-3 align-self-center'}>
                <button type="button"
                    className={'btn btn-primary btn-lg open-modal-btn btnStyleModal ' + ' ' + classNamees.buttonMobileMenu}
                    data-toggle="modal"
                    data-target="#gridModal">
                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0H36L35 2H0L1 0Z" fill="white"></path>
                        <path d="M1 7H24L23 9H0L1 7Z" fill="white"></path>
                        <path d="M1 14H14L13 16H0L1 14Z" fill="white"></path>
                    </svg>
                </button>
                <ModalMobileMenu props={props} listCompany={props.DataCompany} />
            </div>
            {props.auth.isAuth
                ? <div className={'col-lg-3 d-lg-block text-right d-none align-self-center'}>
                    <NavLink className={classNamees.phoneNumber} to="tel:+78006004044">8(800)-600-40-44</NavLink>
                    <span onClick={updateStatus} className={classNamees.listHeader}>
                        <img id={props.companyId}
                            src={props.companyLogo}
                            className={classNamees.imgHeader} /><text className={classNamees.listHeader}>{props.companyName}</text>
                        {props.status === "none" ? <ListMenu /> : <ListMenuIn />}
                    </span>
                    <BlockMainSelect props={props} listCompany={props.DataCompany} status={props.status} />
                </div>
                : <div className={'col-lg-3 d-lg-block text-right d-none align-self-center'}>
                    <NavLink className={classNamees.phoneNumber} to="tel:+78006004044">8(800)-600-40-44</NavLink>
                    <NavLink to={'/login'} className={classNamees.phoneNumber}>Личный кабинет</NavLink>
                </div>
            }
        </div>
    </div>
};
export default Permanent_main;