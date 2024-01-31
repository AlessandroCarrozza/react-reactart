import { useState } from "react";
import { styled } from "styled-components";
import { Button } from "./Button";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p className="paragraph">
          {/* <Label
            $invalid={emailNotValid}
            // className={`label ${emailNotValid ? "invalid" : undefined}`}
          >
            Email
          </Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // className={emailNotValid ? "invalid" : undefined}
            // style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          /> */}
          <CustomInput
            label="Email"
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            invalid={emailNotValid}
          />
        </p>
        <p>
          <CustomInput
            label="Password"
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            invalid={passwordNotValid}
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button
          // className="button"
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// export default function AuthInputs() {
//   const [valids, setValids] = useState({
//     enteredEmail: "",
//     enteredPassword: "",
//     submitted: false,
//   });

//   function handleChange(event) {
//     setValids((prev) => {
//       if (event.target.name === "email") {
//         return { ...prev, enteredEmail: event.target.value };
//       } else {
//         return { ...prev, enteredPassword: event.target.value };
//       }
//     });
//   }

//   function handleLogin() {
//     setValids((prev) => ({ ...prev, submitted: true }));
//   }

//   const emailNotValid = valids.submitted && !valids.enteredEmail.includes("@");
//   const passwordNotValid =
//     valids.submitted && valids.enteredPassword.trim().length < 6;

//   return (
//     <div id="auth-inputs">
//       <div className="controls">
//         <p>
//           <label>Email</label>
//           <input
//             type="email"
//             className={emailNotValid ? "invalid" : undefined}
//             name="email"
//             onChange={handleChange}
//           />
//         </p>
//         <p>
//           <label>Password</label>
//           <input
//             type="password"
//             className={passwordNotValid ? "invalid" : undefined}
//             name="password"
//             onChange={handleChange}
//           />
//         </p>
//       </div>
//       <div className="actions">
//         <button type="button" className="text-button">
//           Create a new account
//         </button>
//         <button className="button" onClick={handleLogin}>
//           Sign In
//         </button>
//       </div>
//     </div>
//   );
// }
