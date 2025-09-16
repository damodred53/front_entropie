import { AppButton } from "../AppButton";
import { useState } from "react";
import './form.scss'

import { useNavigate } from "react-router-dom";

const FormAuth = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isErrorDetected, setIsErrorDetected] = useState<boolean>(false);


    const handleAuth = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Authentification en cours ...');
    }

    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <div className="welcome_wrapper">
            <div className="welcome">
                <div className="welcome_left">
                    <h1 className="welcome_left_title">Bienvenue sur Simplis</h1>
                    <p className="welcome_left_text">Veuillez entrer vos identifiants pour vous connecter</p>
                </div>
                <div className="welcome_right">
                    <h2 className="welcome_right_title">Se connecter</h2>
                    <form className="welcome_right_form" onSubmit={handleAuth} action="">
                        <div className="welcome_right_form_group">
                            <label htmlFor="username" className="welcome_right_form_group_label">Utilisateur</label>
                            <input type="text" name="email" onChange={handleUserChange} placeholder="Nom d'utilisateur" className="welcome_right_form_group_input" />
                            {isErrorDetected && <p className="error welcome_right_form_group_error">Erreur lors de l'authentification</p>}
                        </div>
                        <div className="welcome_right_form_group">
                            <label htmlFor="password" className="welcome_right_form_group_label">Mot de passe</label>
                            <input type="password" name="password" onChange={handlePasswordChange} placeholder="Mot de passe" className="welcome_right_form_group_input" />
                            {isErrorDetected && <p className="error welcome_right_form_group_error ">Mot de passe incorrect</p>}
                        </div>
                        <div className="welcome_right_form_button">
                            <AppButton
                            text="Connexion"
                            type="submit"
                            className="button_auth"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormAuth