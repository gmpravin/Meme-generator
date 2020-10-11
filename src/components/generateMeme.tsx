import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Header } from './Header';
import { sizeForFonts, colors as getColors } from './constant';
import { Footer } from './Footer';

import domtoimage from "dom-to-image";
import FileSaver from "file-saver";

export const GenearteMeme: React.FC = () => {
    const [gifData, setGifData] = useState<string>('');
    const [videoData, setVideoData] = useState<string>('');
    const [imgData, setImageData] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [fontSizes, setFontSize] = useState<string>('19');
    const [colors, setcolor] = useState<string>('#ffffff');
    const [titleFirst, setTitleFirst] = useState('');
    const [titleSecond, setTitleSecond] = useState('');
    const [randomColor, setRandColor] = useState('#212121');

    let { id } = useParams();
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=1a2hhrZGwUNa6v04OSbxT39KWOHj5Jo8`).then(res => res.json()).then(({ data }) => {
            const { images, title } = data;
            setImageData(images.downsized_still.url);
            setGifData(images.original.url);
            setVideoData(images.original.mp4);
            setTitle(title);
        })
    }, [id]);

    useEffect(() => {
        setInterval(() => {
            setRandColor(getColors[Math.floor(Math.random() * getColors.length)]);
        }, 1500);
    }, [])
    const generateMeme = () => {
        var node = document.getElementById("GenImaCap");

        domtoimage.toBlob(node).then(function (dataUrl) {
            FileSaver.saveAs(dataUrl);
        }).catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

    }

    const generateGif = async (url) => {
        await FileSaver.saveAs(url, "gen.gif");
    }
    const generateVideoLink = async (url) => {
        await FileSaver.saveAs(url, "gen.mp4");
    }


    const getChangedfontSize = parseInt(fontSizes);
    console.log(colors);
    return (
        <>
            <Header Name="Meme generator" />
            <div className="text-center" id="GenImaCap" style={{ textAlign: "center" }}>
                <img id="genImage" src={imgData} width="300px" height="300px" style={{ backgroundPosition: 'cover', border: `10px ${randomColor} solid ` }} />
                <p style={{ position: "relative", top: "-330px", width: "300px", fontSize: getChangedfontSize, color: colors, wordWrap: "break-word" }}><strong>{titleFirst}</strong></p>
                <p style={{ position: "relative", top: "-160px", width: "300px", fontSize: getChangedfontSize, color: colors, wordWrap: "break-word" }}><strong>{titleSecond}</strong></p>
            </div>
            <p style={{ color: "white" }} className="text-center">{title}</p>
            <div className="Sidebar" style={{ background: "none", paddingBottom: "20px" }}>
                <button style={{
                    border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                    borderRadius: 4,
                    padding: "10px",
                    marginRight: "5px",
                    background: `${getColors[Math.floor(Math.random() * getColors.length)]}`
                }} onClick={() => generateGif(gifData)}><strong>Download GIF</strong></button>
                <button style={{
                    border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                    borderRadius: 4,
                    padding: "10px",
                    marginRight: "5px",
                    background: `${getColors[Math.floor(Math.random() * getColors.length)]}`
                }} onClick={() => generateMeme()}><strong>Genearte Meme PNG</strong></button>
                <button style={{
                    border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                    borderRadius: 4,
                    padding: "10px",
                    marginRight: "5px",
                    background: `${getColors[Math.floor(Math.random() * getColors.length)]}`
                }} onClick={() => generateVideoLink(videoData)}><strong>Original Quality Video</strong></button>
            </div>

            <div className="Sidebar" style={{ background: "none" }}>

                <div className="navItems">
                    <label>First title</label>
                    <input type="text" onChange={(e) => setTitleFirst(e.target.value)} placeholder="Enter the Top text" style={{
                        border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                        borderRadius: 4,
                        padding: "10px",
                    }} />
                </div>
                <div className="navItems">
                    <label>second title</label>
                    <input type="text" onChange={(e) => setTitleSecond(e.target.value)} placeholder="Enter the Bottom text" style={{
                        border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                        borderRadius: 4,
                        padding: "10px",
                    }} />
                </div>
                <div className="navItems">
                    <label>Font size</label>
                    <select onChange={(e) => setFontSize(e.target.value)} value={fontSizes} style={{
                        border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                        borderRadius: 4,
                        padding: "10px",
                    }}>
                        {
                            sizeForFonts.map(val => (
                                <option value={val}>{val}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="navItems">
                    <label>Choose color</label>
                    <select onChange={(e) => setcolor(e.target.value)} value={colors} style={{
                        border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                        borderRadius: 4,
                        padding: "10px",
                    }}>
                        {
                            getColors.map(val => (
                                <option value={val} style={{ background: val, width: "100px" }}></option>
                            ))
                        }
                    </select>
                </div>
                <Footer />
            </div>

        </>
    )
};
