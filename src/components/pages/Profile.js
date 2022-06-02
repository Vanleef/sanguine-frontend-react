import React, { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import DatePicker from 'react-datepicker';
import "./Profile.css";

const Profile = () => {

    const [userProfile, setUserProfile] = useState({});
    const [donateDate, setDonateDate] = useState(new Date());
    const [disable, setDisable] = useState(true);

    //const {user} = useAuth();
    const user = {
        "nome": "insomnia2",
        "email": "insomnia2@email.com",
        "cidade": "Recife",
        "estado": "PE",
        "tipo_sanguineo": "O+",
        "genero": "Masculino",
        "senha": "p4ssw0rd",
        "token": "eyJhbGciOiJIUzUxMiIsImlhdCI6MTY1NDE3MDQ5MCwiZXhwIjoxNjU0MTcxMDkwfQ.eyJpZCI6NX0.LZn77_mS7FKG6p6Hd4W_xjbcURtS6EIIrfX84Qe_-4YmnG0oWopYOar0nDYIC6gEmGe23QAwlxAHvUTyoheqPQ"
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
        .then(() => {
            getData()
            alert("Alterações salvas com sucesso!")
        })
    }

    const enableButton = (date) => {
        const originalDate = userProfile["data_ultima_doacao"]
        if (originalDate != null) {
            const oldDate = new Date(originalDate).toDateString()
            const newDate = date.toDateString()
            const check = (oldDate === newDate)
            if (!check) {
                setDisable(false)
            }
        }
    }

    return (
        <div className="page">
        <div className="profile-container">
            <div className="title">
                <h1>Perfil</h1>
            </div>
            <div className="user-info">
                <table>
                    <tr>
                        <th className="user-label">Nome:</th>
                        <th></th>
                        <th className="user-data">{userProfile["nome"]}</th>
                    </tr>
                    <tr>
                        <th className="user-label">Email:</th>
                        <th></th>
                        <th className="user-data">{userProfile["email"]}</th>
                    </tr>
                    <tr>
                        <th className="user-label">Data de nascimento:</th>
                        <th></th>
                        <th className="user-data">{userProfile["data_nascimento"]}</th>
                    </tr>
                    <tr>
                        <th className="user-label">Cidade:</th>
                        <th></th>
                        <th className="user-data">{userProfile["cidade"]}</th>
                    </tr>
                    <tr>
                        <th className="user-label">Tipo sanguíneo:</th>
                        <th></th>
                        <th className="user-data">{userProfile["tipo_sanguineo"]}</th>
                    </tr>
                </table>
            </div>
            <div className="date-container">
              <p className="date-title">Data da Última Doação</p>
              <DatePicker className="date-picker"
                selected={donateDate}
                onChange={date => {
                    setDonateDate(date)
                    enableButton(date)
                }}
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
                <div className="cancel">
                <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={cancelar}
                >
                    Cancelar
                </Button>
                </div>
                <div className="salvar">
                <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    disabled={disable}
                    onClick={salvar}
                >
                    Salvar Alterações
                </Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;