import { useState } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOTP);
    setTimeLeft(5);
  };
  return (
    <div className="container">
      <h1>OTP Generator</h1>
      <p id="sub-heading">{otp ? otp : "Click 'Generate OTP' to get a code"}</p>
      <p id="timer">Expire in:</p>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
}

export default OTPGenerator;
