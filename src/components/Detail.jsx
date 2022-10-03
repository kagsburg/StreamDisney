import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../fire";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName } from "../features/user/userSlice";

const Detail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    //check if user is logged in stored in redux store
    const user = useSelector(selectUserName);
    if (!user) {
       //if user is not logged in then redirect to home page
       navigate("/");
    
    } 
    useEffect(() => {
        // Grab the movie info from DB
        db.collection("movies").doc(id).get().then((doc) => {
            if (doc.exists) {
                console.log("Movie is", doc.data());
                // Save the movie data
                setMovie(doc.data());
            } else {
                // Redirect to home page
                console.log("No such document in Firebase!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:",error);
        });
    }, [id])
    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt={movie.title} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} />
            </ImageTitle>
            <ContentMeta>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            </ContentMeta>
           
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: block;
    top: 70px;
    overflow-x: hidden;
`;
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        @media (max-width: 768px) {
            width: initial;
        }
    }
`;
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
const ContentMeta = styled.div`
    max-width: 874px;
`;
const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;

`;
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin: 0px 22px 0px 0px;
    height: 56px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    line-height: 1.8px;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    align-items: center;
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }

    
    `;
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;


`
const AddButton = styled.div`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        
        display: inline-block;
        font-size: 35px;
        color: white;
    }

    `;
const GroupWatchButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    img {
        width: 100%;
    }

`;
const SubTitle = styled.div`
        color : rgb(249, 249, 249);
        font-size: 15px;
        min-height: 20px;
        @media (max-width: 768px) {
            font-size: 12px;
        }
`;
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding : 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;



//export 
export default Detail;