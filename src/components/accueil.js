import HotelIcon from '@mui/icons-material/Hotel';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MosqueIcon from '@mui/icons-material/Mosque';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PatternIcon from '@mui/icons-material/Pattern';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import res from './database'

import Container from '@mui/material/Container';
import { padding } from '@mui/system';
const Accuiel = ({ routemanger }) => {
    const [open, setOpen] = useState(false);
    const [Designation, setDesignation] = useState("")
    const [Typededecharge, setTypededecharge] = useState("")
    const [Moy_Paiement, setMoy_Paiement] = useState("")
  
    const [Montant, setMontant] = useState("")
    const [Remarque, setRemarque] = useState("")

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const decharge = () => {
        if (Designation != "" && Typededecharge != "" && Moy_Paiement != "" &&  Montant != "" && Remarque != "") {
            res.post('/caisse.json', { Num_cli: Math.round(Math.random() * 100) * 1985, date: (new Date()).toLocaleDateString('en-GB'), agent: localStorage.getItem('agent'), Des: Designation, Moy_Paiement, Montant, Remarque, type: Typededecharge })
            setOpen(false);
        }
        else {
            alert('verifier les champs')
        }
    }


    return (
        <div className="parthome2">
            <div className="intro"><h1 className="welcome"><span className='lineRef'>Contente  </span> de vous revoir  😊<br /> {localStorage.getItem('agent')}</h1>
                <div className="btns">
                    <Button variant="contained" color="error" onClick={handleToggle}>Nouvelle décharge</Button>
                </div>
            </div>

            <div className="menu-links">
                <div onClick={() => { routemanger(2) }} className="menu-item reser">
                    <BookmarkAddedIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">Reservation</p>
                </div>
                <div onClick={() => { routemanger(1) }} className="menu-item menybg">
                    <PointOfSaleIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">Caisse</p>
                </div>
                <div onClick={() => { routemanger(3) }} className="menu-item omrabg">
                    <MosqueIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">Omraa</p>
                </div>
                <div onClick={() => { routemanger(4) }} className="menu-item Hotbg">
                    <HotelIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">Hotellerie</p>
                </div>
                <div onClick={() => { routemanger(5) }} className="menu-item voyorgbg">
                    <DateRangeIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">voyage organisé</p>
                </div>
                {/* <div onClick={() => { routemanger(5) }} className="menu-item clibg">
                    <GroupIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text " >Clients</p>
                </div> */}
                <div onClick={() => { routemanger(6) }} className="menu-item logbg">
                    <PatternIcon fontSize="large" className='menu-item-icon' />
                    <p className="menu-item-text">Logs</p>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <Container maxWidth="md">
                    <Box sx={{ bgcolor: '#4c5caf', height: '60vh', padding: '10px' }} >
                        <Icon onClick={handleClose} className="closedesign" title="close" fontSize="large">close</Icon>
                        <h1 className="center">Creation de nouvelle de décharge</h1>
                        <div className="decharge-form-floor">
                            <div className='decharge-form-floor-part'>
                                <label htmlFor="" className="form-label-decharge">Type de decharge</label>
                                <input type="text" className="type-decharge" onChange={(e)=>setTypededecharge(e.target.value)}/>
                            </div>
                            <div className='decharge-form-floor-part'>
                                <label htmlFor="" className="form-label-decharge">Designation</label>
                                <input type="text" className="type-decharge" onChange={(e)=>setDesignation(e.target.value)}/>
                            </div>
                        </div>
                        <div className="decharge-form-floor">
                            <div className="decharge-form-floor-part">
                                <label htmlFor="" className="form-label-decharge">Moyen de Paiement</label>
                                <select name="" id="" className="type-decharge" onChange={(e)=>setMoy_Paiement(e.target.value)}>
                                    <option disabled selected className="type-decharge"  value="">Choisir un type de paiement</option>
                                    <option className="type-decharge" value="Espace">Espace</option>
                                    <option className="type-decharge" value="Cheque">Cheque</option>
                                </select>
                            </div>
                            <div className="decharge-form-floor-part">
                                <label htmlFor="" className="form-label-decharge">Montant</label>
                                <input type="number" className="type-decharge" onChange={(e)=>setMontant(e.target.value)}/>
                            </div>
                        </div>
                        <label htmlFor="" className="form-label-decharge">Remarque</label>
                        <textarea className="type-decharge" onChange={(e)=>setRemarque(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                        <div className="dsflex">
                            <Button variant="contained" color="error" className='confirm-btn' onClick={handleClose}>
                                Annuler
                            </Button>
                            <Button variant="contained" onClick={decharge} className='confirm-btn'>
                                Confirmer
                            </Button>


                        </div>
                    </Box>

                </Container>
            </Backdrop>
        </div>
    );
}

export default Accuiel;