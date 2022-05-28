import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";

const Home = ({userObj}) => {
    //console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

//    const getNweets = async () => {
//        const dbNweets = await dbService.collection("nweets").get();
//        dbNweets.forEach((document) => {
//        const nweetObject = { ...document.data(), id: document.id};
//        setNweets((prev) => [nweetObject, ...prev])
//        });
//    };
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
            });
//        getNweets();
    }, []);

    //console.log(nweets);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target : { value },
        } = event;
        setNweet(value);
    };

    const onFileChange =(event) => {
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget : { result },
            } = finishedEvent;
            setAttachment(result);
        }

        reader.readAsDataIURL(theFile);
        };

    return (
        <>
        <form onSubmit = {onSubmit}>
            <input
            value={nweet}
            onChange = {onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            />
            <input type ="file" accept = "image/*" onChange={onFileChange} />
            <input type="submit" value="Nweet" />
            {attachment && <img src={attachment} width="50px" height="50px" />}
        </form>
        <div>
            {nweets.map((nweet) => (
            <Nweet key={nweet.id}
            nweetObj={nweet}
            isOwner = {nweet.creatorId === userObj.uid}
            />
            ))}
        </div>
        </>
    );
};
//<span>Home</span>;
export default Home;