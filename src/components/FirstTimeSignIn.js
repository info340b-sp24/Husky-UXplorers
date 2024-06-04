import React, {useState} from 'react';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set as dbSet } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

export default function FirstTimeSignIn (props) {
    const navigateTo = useNavigate();

    const currentUser = props.currentUser;
    const [userInfo, setUserInfo] = useState({
        userId: currentUser.uid,
        username: currentUser.displayName,
        usertag: '',
        userImg: currentUser.photoURL || "/img/null.png",
        major: ''
    });

    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            username: value,
        }));
    };

    const handleUsertagChange = (event) => {
        const { value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            usertag: value,
        }));
    };

    const handleImageChange = async (event) => {
        let { files } = event.target;
        if (files.length > 0) {
            const imageFile = files[0];
            const storage = getStorage();
            const imageRef = storageRef(storage, "profileImages/" + currentUser.userId + ".png");

            try {
                await uploadBytes(imageRef, imageFile);
                const downloadURL = await getDownloadURL(imageRef);
                setUserInfo((prevUserInfo) => ({
                    ...prevUserInfo,
                    userImg: downloadURL
                }));
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleMajorChange = (event) => {
        const { value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            major: value,
        }));
    };

    const handleGraduatingYearChange = (event) => {
        const { value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            graduatingYear: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUserDatabase(userInfo);
        console.log(userInfo);
        navigateTo("/profile");
    };

    const updateUserDatabase = (userInfo) => {
        const db = getDatabase();
        const userRef = dbRef(db, 'users/' + currentUser.uid);
        dbSet(userRef, userInfo)
            .then(() => {
                console.log("User info updated.");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    console.log(currentUser);

    const yearRange = ['2024','2025','2026','2027'];

    return (
        <main className="d-flex justify-content-center">
            <div className="card m-5 p-5 w-50 text-center">
                <div className="mb-3">
                    <h2 className="text-justify">Welcome to Husky UXplorers!</h2>
                    <hr />
                </div>

                <p><b>Account Information</b></p>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="user-usertag"
                        placeholder="ex: @johnthedesigner"
                        name="user-usertag"
                        onChange={handleUsertagChange}
                        value={userInfo.usertag}/>
                        <label htmlFor="user-usertag">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="user-username"
                        placeholder="Your name here"
                        name="user-username"
                        onChange={handleUsernameChange}
                        value={userInfo.username}/>
                        <label htmlFor="user-username">Display Name (Full name)</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user-image" className="form-label small-text">Upload profile picture</label>
                        <input className="form-control" type="file" id="user-image"
                        name={currentUser.uid + "-profile-picture"}
                        onChange={handleImageChange} />
                    </div>

                    <p className="mt-5"><b>UW Information</b></p>
                    <div className=" mb-3">
                        <p className="small-text text-left">Select your major</p>
                        <div className="cardform-check form-check-inline">
                            <input className="form-check-input" type="radio" id="major-design" name="major" value="Design" onChange={handleMajorChange} checked={userInfo.major === 'Design'} />
                            <label className="form-check-label" htmlFor="major-design">Design</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="major-HCDE" name="major" value="HCDE" onChange={handleMajorChange} checked={userInfo.major === 'HCDE'} />
                            <label className="form-check-label" htmlFor="major-HCDE">Human-Centered Design & Engineering</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="major-INFO" name="major" value="INFO" onChange={handleMajorChange} checked={userInfo.major === 'INFO'} />
                            <label className="form-check-label" htmlFor="major-INFO">Informatics</label>
                        </div>
                    </div>
                    <div className="mt-5 mb-3">
                        <p className="small-text text-left">Select your graduating year</p>
                        <select className="form-select" onChange={handleGraduatingYearChange} value={userInfo.graduatingYear}>
                            <option value="">Select Year</option>
                            {yearRange.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn purple-btn text-white mt-5">Submit</button>
                </form>
            </div>

        </main>
    )

}