import { AppButton } from "../AppButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import './form.scss';

type FormValues = {
  email: string;
  password: string;
};

const FormAuth = () => {
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Authentification en cours ...", data);


    if (data.email === "test@test.com" && data.password === "1234") {
      alert("Connexion réussie !");
      navigate("/dashboard"); 
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="welcome_wrapper">
      <div className="welcome">
        <div className="welcome_left">
          <h1 className="welcome_left_title">Bienvenue sur votre site</h1>
          <p className="welcome_left_text">
            Veuillez entrer vos identifiants pour vous inscrire
          </p>
        </div>
        <div className="welcome_right">
          <h2 className="welcome_right_title">Inscription</h2>
          <form className="welcome_right_form" onSubmit={handleSubmit(onSubmit)} noValidate>
            
            {/* Champ Email */}
            <div className="welcome_right_form_group">
              <label htmlFor="email" className="welcome_right_form_group_label">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="welcome_right_form_group_input"
                {...register("email", { required: "L'email est requis" })}
              />
              {errors.email && (
                <p className="error welcome_right_form_group_error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Champ Mot de passe */}
            <div className="welcome_right_form_group">
              <label htmlFor="password" className="welcome_right_form_group_label">Mot de passe</label>
              <input
                type="password"
                placeholder="Mot de passe"
                className="welcome_right_form_group_input"
                {...register("password", { required: "Le mot de passe est requis" })}
              />
              {errors.password && (
                <p className="error welcome_right_form_group_error">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Bouton de soumission */}
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
  );
};

export default FormAuth;
