import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    const user = useSelector((state) => (state.username))
    console.log(user);
    let history = useHistory();

    const onClickAddCV = () => {

        history.push('/addcv');
    }

    const getAllCv = () => {

        if (user === 'admin') {
            history.push(`/user/${user}`);
        } else {
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
            }, 5000);
        }

    }


    return (
        <div className="container-fluid">
            <h2 className="text-center">HOME PAGE</h2>

            {open ? (<div className="alert alert-danger" role="alert">
                Unauthorized (Admin Only)
            </div>) : null}

            <div className="container">
                <div className="row mx-5">
                    <button  onClick={() => onClickAddCV()} className="btn btn-primary  my-5">Add CV</button>
                    <br/><br/><br/>
                    <button onClick={() => getAllCv()} className="btn btn-primary  my-5">Get All CV(Only Admin)</button>
                </div>
             </div>


        </div>
    );
};

export default HomePage;