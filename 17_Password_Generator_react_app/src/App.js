import { useState } from "react";
import "./App.css";

function App() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(14);
    const [useSymbols, setUseSymbols] = useState(false);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useLowerCase, setUseLowerCase] = useState(false);
    const [useUpperCase, setUseUpperCase] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");

    const generatePassword = () => {
        let charset = "";
        let newPassword = "";
        if (useSymbols) charset += "!@#$%^&*()_-[]";
        if (useNumbers) charset += "0123456789";
        if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // console.log(charset);

        for (let i = 0; i < passwordLength; i++) {
            newPassword += charset.charAt(
                Math.floor(Math.random() * charset.length)
            );
        }
        setPassword(newPassword);
    };

    // // Method:1 to copy to Clipboard

    // const copyToClipboard = () => {
    //     const textElement = document.createElement("textarea");
    //     textElement.value = password;
    //     document.body.appendChild(textElement);
    //     textElement.select();
    //     document.execCommand("copy"); // execCommand - Deprecated: This feature is no longer recommended.
    //     document.body.removeChild(textElement);
    //     setSuccessMessage("Password copied to clipboard!");
    //     setTimeout(() => {
    //         setSuccessMessage("");
    //     }, 2000);
    // };

    // Method: 2 to copy to Clipboard without using document.execCommand, we can use the Clipboard API.
    // navigator.clipboard.writeText used to write the password to the clipboard

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(password)
            .then(() => {
                setSuccessMessage("Password copied to clipboard!");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 2000);
            })
            .catch((error) => {
                console.error("Failed to copy: ", error);
            });
    };

    return (
        <div className="App">
            <h1>Password Generator</h1>
            <div className="input-container">
                <label htmlFor="password">Password Length: </label>
                <input
                    type="number"
                    id="password"
                    name="password"
                    min={8}
                    max={100}
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                />
            </div>
            <div className="checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={useSymbols}
                        onChange={() => setUseSymbols(!useSymbols)}
                    />
                    Symbols
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={useNumbers}
                        onChange={() => setUseNumbers(!useNumbers)}
                    />
                    Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={useLowerCase}
                        onChange={() => setUseLowerCase(!useLowerCase)}
                    />
                    LowerCase
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={useUpperCase}
                        onChange={() => setUseUpperCase(!useUpperCase)}
                    />
                    UpperCase
                </label>
            </div>
            <button className="generate-pwd" onClick={generatePassword}>
                Generate Password
            </button>
            {password && (
                <div className="generated-pwd">
                    <label>Generated Password: </label>
                    <input type="text" value={password} readOnly />
                    <button onClick={copyToClipboard}>COPY</button>
                </div>
            )}
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default App;
