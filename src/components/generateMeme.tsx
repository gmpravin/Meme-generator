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
    const [width, setwidth] = useState('');
    const [height, setheight] = useState('');

    let { id } = useParams();
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(({ data }) => {
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
        var node = document.getElementById("genImage");

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
    console.log(window.innerWidth);
    return (
        <>
            <Header Name="Meme generator" />
            <div className="text-center">
                <div className="wrapper text-center" id="genImage" style={{ width: `${width ? width + `px` : "300px"}`, height: `${height ? height + `px` : "300px"}`, backgroundImage: `url(${imgData})`, backgroundPosition: 'center', border: `10px ${randomColor} solid ` }}>
                    <p id="t1" style={{ fontSize: getChangedfontSize, color: colors }}><strong>{titleFirst}</strong></p>
                    <p id="t2" style={{ fontSize: getChangedfontSize, color: colors }}><strong>{titleSecond}</strong></p>
                </div>
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
                {
                    window.innerWidth >= 400 &&
                    <>
                        <div className="navItems">
                            <label>Width</label>
                            <input type="text" onChange={(e) => setwidth(e.target.value)} value={width} placeholder="Enter the Width" style={{
                                border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                                borderRadius: 4,
                                padding: "10px",
                            }} />
                        </div>
                        <div className="navItems">
                            <label>Height</label>
                            <input type="text" onChange={(e) => setheight(e.target.value)} value={height} placeholder="Enter the Height" style={{
                                border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                                borderRadius: 4,
                                padding: "10px",
                            }} />
                        </div></>
                }

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
                            sizeForFonts.map((size, i) => (
                                <option value={size} key={i}>{size}</option>
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
                            getColors.map((color, i) => (
                                <option value={color} key={i} style={{ background: color, width: "100px" }}></option>
                            ))
                        }
                    </select>
                </div>
                <Footer />
            </div>

        </>
    )
};
