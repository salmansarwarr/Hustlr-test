import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

const Home = () => {
  const { isConnected } = useAccount();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const { signMessageAsync, isPending } = useSignMessage();

  const handleFakeMint = async () => {
    setStatus("waiting");
    setMessage("Please confirm in wallet...");
    try {
      const signature = await signMessageAsync({
        message: "Mint confirmation for new season item",
      });

      // Simulate mint success
      console.log("Signature:", signature);
      setStatus("signed");
      setMessage("✅ Minted successfully!");
    } catch (error) {
      console.error("Signature error:", error);
      setStatus("error");
      setMessage("Signature failed or rejected.");
    }
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Click below to mint (simulated with wallet signature)
              </p>

              {isConnected ? (
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleFakeMint}
                  disabled={isPending || status === "signed"}
                >
                  {isPending || status === "waiting" ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                  ) : null}
                  {status === "waiting"
                    ? "Signing..."
                    : status === "signed"
                    ? "Minted"
                    : "Mint Now"}
                </button>
              ) : (
                <p className="text-warning mt-3">Connect wallet to mint</p>
              )}

              {message && <p className="mt-2">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
