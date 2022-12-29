
import React from "react"
import bear from '../images/logo192.png';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

function Generator() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }

    function downloadImg() {
        htmlToImage.toPng(document.getElementById('meme'))
            .then(function (dataUrl) {
                download(dataUrl, 'meme.png');
            });

    }


    return (
        <main className="Generator-container">
            <header className='Generator-header'>
                <div className="gen-logo">
                    <img src={bear} className="gen-logo" alt="logo" />
                </div>
                <div className="gen-text">
                    <h1>Meme Generator</h1>
                    <h4>A simple React app</h4>
                </div>
            </header>
            <section className='Generator-body'>
                <div className='inputs-container'>
                    <input
                        className='input-up'
                        type="text"
                        placeholder='Enter upper text'
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}

                    />
                    <input
                        className='input-down'
                        type="text"
                        placeholder='Enter bottom text'
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}

                    />
                </div>
                <div className="buttons-container">
                    <div className='gen-button'>
                        <button className="genBtn" onClick={getMemeImage}>Get new meme image</button>
                    </div>
                    <div className='gen-button'>
                        <button className="downloadBtn" onClick={downloadImg}>Download your meme</button>
                    </div>
                </div>
                <div id="meme" className="meme-container">
                    <img src={meme.randomImage} className="meme-img" alt="meme img" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </section>
        </main>
    );

}

export default Generator;