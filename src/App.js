import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <form
          id="login_form"
          className="form_class"
          action="login/login-access.php"
          method="post"
        >
          <div className="form_div">
            <label>Login:</label>
            <input
              className="field_class"
              name="login_txt"
              type="text"
              placeholder="Insira o seu login"
              autofocus=""
            />
            <label>Password:</label>
            <input
              id="pass"
              className="field_class"
              name="password_txt"
              type="password"
              placeholder="Insira a sua senha"
            />
            <button
              className="submit_class"
              type="submit"
              form="login_form"
              onclick="return validarLogin()"
            >
              Entrar
            </button>
          </div>
          <div className="info_div">
            <p>
              Ainda não é um usuário registrado?{" "}
              <a href="register/reg-form.php">Cadastre-se!</a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
