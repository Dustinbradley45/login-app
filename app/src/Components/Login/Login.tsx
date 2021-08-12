import { useState } from "react";
import Email from "./Form/Email";

function Login() {
    const [input, setInput] = useState("");

    const validateEmail = async () => {
        try {
            var headers = new Headers();
            headers.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("email", `${input}`);

            var requestOptions = {
                method: 'POST',
                headers: headers,
                body: urlencoded,
            };

            const response = await fetch('http://localhost:8080/api/login', requestOptions)
            console.log(await response.json())
            // console.log(await response.json(), "here")

            // const data = await response.json();
            // console.log(data)
            // if(!response.ok) {
            //     console.log("Error")
            // } else {
            //     console.log(data, "here")
            // }

        } catch(err) {
            console.log(err);
        }

    }

    const inputHandler = (e:any) => {
        setInput(e.target.value);

    }
    console.log(input)

    return(
        <div className="login-page">
            <h2>Login</h2>
            <Email 
                inputHandler={inputHandler}
                input={input}
                validateEmail={validateEmail}
            />
        </div>
    )
}

export default Login;