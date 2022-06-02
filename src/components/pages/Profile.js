import React, { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import DatePicker from 'react-datepicker';

const Profile = () => {

    const [userProfile, setUserProfile] = useState({});
    const [donateDate, setDonateDate] = useState(new Date());
    
    //const {user} = useAuth();
    const user = {
        "nome": "insomnia2",
        "email": "insomnia2@email.com",
        "cidade": "Recife",
        "estado": "PE",
        "tipo_sanguineo": "O+",
        "genero": "Masculino",
        "senha": "p4ssw0rd",
        "token": "eyJhbGciOiJIUzUxMiIsImlhdCI6MTY1NDE0Mzg2OSwiZXhwIjoxNjU0MTQ0NDY5fQ.eyJpZCI6NX0.koZjpHINCwu7BwFHF01fz94HV-t513vOfpR4HA3bB3zzkI7zENY_lCCGNZLa9a9r7DUBhsRwKhA4vHBW3_o_Fg"
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const date = userProfile["data_ultima_doacao"]
        if(!(date == null)) {
            setDonateDate(new Date(date))
        }
    }, [userProfile])

    const getData = async () => {
        const url = 'http://localhost:8000/user/';
        await fetch(
            url,
            {
                method:'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${user.token}:`)
                }
            }
        )
        .then(response => response.json())
        .then(data => setUserProfile(data.data))
    }

    let navigate = useNavigate();
    const cancelar = () => {
        let path = '/';
        navigate(path);
    }

    const salvar = () => {
        const url = 'http://localhost:8000/user/';
        fetch(
            url,
            {
                method:'PATCH',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${user.token}:`),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data_ultima_doacao: donateDate.toISOString().substring(0, 10)
                })
            }
        )
        .then(() => getData())
    }

    return (
        <div className="profile-container">
            <div className="title">
                <h1>Perfil</h1>
            </div>
            <div className="user-info">
                <h2>{userProfile["nome"]}</h2>
                <h2>{userProfile["email"]}</h2>
                <h2>{userProfile["data_nascimento"]}</h2>
                <h2>{userProfile["cidade"]} - {userProfile["estado"]}</h2>
                <h2>{userProfile["tipo_sanguineo"]}</h2>
            </div>
            <div>
              <h4 className="date-header">Data da Última Doação</h4>
              <DatePicker className="date-picker"
                selected={donateDate}
                onChange={date => setDonateDate(date)}
                dateFormat={'dd/MM/yyyy'}
                dateFormatCalendar="MMMM"
                maxDate={new Date()}
                locale={'ptBR'}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={90}
                dropdownMode="scroll"
                popperClassName="date-popper"
                popperPlacement="auto"
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: '5px, 10px'
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                    boundariesElement: 'viewport'
                  }
                }}
              />
            </div>
            <div className="buttons">
                <Button
                    id='cancel'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={cancelar}
                >
                    Cancelar
                </Button>
                <Button
                    id='save'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={salvar}
                >
                    Salvar Alterações
                </Button>
            </div>
        </div>
    )
}

export default Profile;