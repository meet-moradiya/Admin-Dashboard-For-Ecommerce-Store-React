import React, { useState, useEffect } from "react";
import AdminSidebar from "../Components/AdminSidebar";

function Coupon() {
  const [prefix, setPrefix] = useState("");
  const [size, setSize] = useState(8);
  const [numberInclude, setNumberInclude] = useState(false);
  const [charInclude, setCharInclude] = useState(false);
  const [symbolInclude, setSymbolInclude] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [generateClicked, setGenerateClicked] = useState(false);

  const generateCoupon = (e) => {
    e.preventDefault();
    setGenerateClicked(true);

    if (!numberInclude && !charInclude && !symbolInclude) return alert("Please Select One At Least From (Numbers, Character, Symbol) ");

    let newCoupon = "";
    let str = "";
    if (numberInclude) str += "0123456789";
    if (charInclude) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (symbolInclude) str += "!@#$&_";

    const loopLength = size - prefix.length;

    for (let i = 0; i < loopLength; i++) {
      let char = Math.floor(Math.random() * str.length);
      newCoupon += str.charAt(char);
    }
    setCoupon(prefix + newCoupon);
  };

  const copyText = (coupon) => {
    window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  useEffect(() => {
    setIsCopied(false);
    setGenerateClicked(false);
  }, [prefix, size, numberInclude, charInclude, symbolInclude, generateClicked]);

  return (
    <div className="adminContainer">
      <div className="sideNavBar">
        <AdminSidebar />
      </div>
      <main className="couponContainer">
        <div
          id="mainlogo"
          style={{
            display: "none",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Logo.
        </div>
        <h1>Generate Coupon</h1>
        <section className="couponSection">
          <form onSubmit={generateCoupon} className="couponForm">
            <div className="couponInput">
              <input
                type="text"
                placeholder="Text to include"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                maxLength={size}
                title="Write Prefix for your coupon."
              />
              <input
                type="number"
                placeholder="Coupon length"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                min={8}
                max={49}
                onInput={(e) => {
                  e.target.value = Math.abs(e.target.value);
                }}
                title="Select the size of the coupon."
              />
            </div>
            <fieldset>
              <legend>Include</legend>
              <div>
                <input type="checkbox" value={numberInclude} onChange={() => setNumberInclude((prev) => !prev)} /> <span>Numbers</span>
              </div>
              <div>
                <input type="checkbox" value={charInclude} onChange={() => setCharInclude((prev) => !prev)} /> <span>Characters</span>
              </div>
              <div>
                <input type="checkbox" value={symbolInclude} onChange={() => setSymbolInclude((prev) => !prev)} /> <span>Symbols</span>
              </div>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <p onClick={() => copyText(coupon)}>
                {" "}
                <span> {isCopied ? "Copied" : "Copy"} </span>
              </p>
            </code>
          )}
        </section>
      </main>
    </div>
  );
}

export default Coupon;
