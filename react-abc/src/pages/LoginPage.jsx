import React from "react";
import InputBasic from "../components/ui/inputs/InputBasic";
import ButtonBasic from "../components/ui/buttons/ButtonBasic";

function LoginPage() {
    return <div>
        <h1> Login </h1>

        <form action="">
            <InputBasic type="text" placeholder={'Enter login'}/>
            <InputBasic type="password" placeholder={'Enter password'}/>

            <ButtonBasic>
                Submit
            </ButtonBasic>
        </form>
    </div>
}

export default LoginPage;