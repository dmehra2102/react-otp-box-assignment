import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../App.css";
import PinInput from "./PinInput";

const Pinbox = ({ length }) => {
      var [inputbox] = useState(new Array(length).fill(1));
      var [otpvalue, setOtpvalue] = useState(new Array(length));
      var inputRef = useRef([]);
      const handlechange = (e, index) => {
            if (e.target.value.length > 0 && index < length - 1) {
                  inputRef.current[index + 1].focus();
            }
            otpvalue[index] = e.target.value;
            setOtpvalue(otpvalue);
      };
      const handleBackspace = (e, index) => {
            if (index > 0) {
                  inputRef.current[index - 1].focus();
            }
      };

      const handlePaste = (e, index) => {
            e.preventDefault();
            const data = e.clipboardData
                  .getData("text")
                  .split("")
                  .filter((item, index) => index < length);
            data.forEach((element, index) => {
                  otpvalue[index] = element;
                  inputRef.current[index].value = element;
                  if (index < length - 1) {
                        inputRef.current[index + 1].focus();
                  }
            });
      };

      return (
            <div onPaste={handlePaste} className="main-otp-div">
                  {inputbox.map((item, index) => {
                        return (
                              <PinInput
                                    key={index}
                                    ref={(ele) => {
                                          inputRef.current[index] = ele;
                                    }}
                                    handleChange={(e) => handlechange(e, index)}
                                    handleback={(e) =>
                                          handleBackspace(e, index)
                                    }
                              />
                        );
                  })}
            </div>
      );
};

export default Pinbox;
