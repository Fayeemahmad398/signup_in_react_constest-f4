import { useEffect, useState } from "react";
import fb from "./facebook 1.png";
import google from "./goggle.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cnfpassword, setcnfpassword] = useState("");
  const [error, seterror] = useState({});
  const [visible1, setvisible1] = useState(true);
  const [visible2, setvisible2] = useState(true);
  const [success, setsuccess] = useState(false);
  const [mismatch, setmismatch] = useState(false);

  function successFullySignedin() {
    toast.success("Acount created  successfully!", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setcnfpassword("");
    setemail("");
    setpassword("");
    setfullName("");
  }

  useEffect(() => {
    let allMetas = document.getElementsByTagName("meta");

    for (let i = 0; i < allMetas.length; i++) {
      if (allMetas[i].name === "description") {
        allMetas[
          i
        ].content = `Pioneer in our field ,populated in news over the years`;
      } else if (allMetas[i].name === "keywords") {
        allMetas[
          i
        ].content = `Exceptional products Quality,Immensely minded Engineers,customer Future is our priority
        `;
      } else if (allMetas[i].name === "author") {
        allMetas[i].content = `Fayeem Ahmad `;
      }
    }
    document.title = `Edited Title Updated so far Thank you `;
  }, []);

  const validateForm = () => {
    if (
      fullName.trim() &&
      fullName.trim().includes(" ") &&
      email &&
      password.trim() &&
      cnfpassword.trim()
    ) {
      console.log("one");
      if (password.trim() !== cnfpassword.trim()) {
        setmismatch(true);
        setsuccess(false);
        seterror({});
        console.log("one1");
      } else {
        setmismatch(false);
        console.log("one2");

        seterror({});

        setsuccess(true);
        setTimeout(() => {
          successFullySignedin();
        }, 2000);
      }
    } else {
      if (!fullName.trim() || !fullName.trim().includes(" ")) {
        error.fullname = true;
        error.email = false;
        error.password = false;
        error.cnfpassword = false;
      }
      if (!email) {
        error.email = true;
      }
      if (!password) {
        error.password = true;
      }
      if (!cnfpassword) {
        error.cnfpassword = true;
      }
      seterror({ ...error });
      setsuccess(false);
    }
  };
  console.log(mismatch);
  return (
    <div className="form-container">
      <h1>Create Acount</h1>
      <div className="gogglefb">
        <div>
          <a href="" className="loglobox">
            <img src={google} alt="" id="google" />
            <span>Signup with Google</span>
          </a>
        </div>
        <div>
          <a href="" className="loglobox">
            <img src={fb} alt="" id="fb" />
            <span>Signup with facebook</span>
          </a>
        </div>
      </div>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Enter the Fullname please"
            onChange={(event) => {
              setfullName(event.target.value);
            }}
            value={fullName}
          />
          {error.fullname && <p>*Enter Fullname please</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter the email here"
            onChange={(event) => {
              setemail(event.target.value);
            }}
            value={email}
          />
          {error.email && <p>*Enter email please</p>}
        </div>
        <div className="classBox">
          <input
            type={visible1 ? "password" : "text"}
            placeholder="password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            value={password}
          />
          {error.password && <p>*Enter password please</p>}

          {visible1 ? (
            <FaEyeSlash
              onClick={() => {
                setvisible1(!visible1);
              }}
              className="icons1"
            />
          ) : (
            <FaEye
              onClick={() => {
                setvisible1(!visible1);
              }}
              className="icons2"
            />
          )}
        </div>

        <div className="classBox">
          <input
            type={visible2 ? "password" : "text"}
            placeholder="confirm password"
            onChange={(event) => {
              setcnfpassword(event.target.value);
            }}
            value={cnfpassword}
          />
          {mismatch ? (
            <p id="mismatch">*Password and Confirm Password does not match </p>
          ) : null}
          {console.log(error.cnfpassword)}
          {error.cnfpassword && <p>*Enter confirm password please</p>}

          {visible2 ? (
            <FaEyeSlash
              onClick={() => {
                setvisible2(!visible2);
              }}
              className="icons1"
            />
          ) : (
            <FaEye
              onClick={() => {
                setvisible2(!visible2);
              }}
              className="icons2"
            />
          )}
        </div>
        {console.log(mismatch)}
        <button
          onClick={(event) => {
            console.log("workinf");
            event.preventDefault();
            validateForm();
          }}
        >
          Create Acount
        </button>
        {success && <div id="succesfully">Successfully Created</div>}
      </form>
      <ToastContainer className={{}} />
    </div>
  );
};
export default Form;
