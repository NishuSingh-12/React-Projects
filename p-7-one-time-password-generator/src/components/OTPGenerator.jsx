import { useEffect, useRef, useState } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOTP);
    setTimeLeft(5);
  };
  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft]);
  return (
    <div className="container">
      <h1>OTP Generator</h1>
      <p id="sub-heading">{otp ? otp : "Click 'Generate OTP' to get a code"}</p>
      <p id="timer" aria-live="polite">
        {timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : otp
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>
      <button onClick={generateOTP} disabled={timeLeft > 0}>
        Generate OTP
      </button>
    </div>
  );
}

export default OTPGenerator;
