import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { sizeForFonts, colors as getColors } from './constant';
import { Footer } from './Footer';
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";

export const OwnGenearteMeme: React.FC = () => {
    const [imgData, setImageData] = useState<any>(null);
    const [fontSizes, setFontSize] = useState<string>('19');
    const [colors, setcolor] = useState<string>('#ffffff');
    const [titleFirst, setTitleFirst] = useState('CREATE YOUR OWN MEME');
    const [titleSecond, setTitleSecond] = useState('UPLOAD IMAGE NOW');
    const [randomColor, setRandColor] = useState('#212121');
    const [width, setwidth] = useState('');
    const [height, setheight] = useState('');

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

    const uploadImage = (image) => {
        if (!image) { alert("We accepting jpeg , jpg , png , webp , bmp files only"); }
        if (!image.name.match(/\.(jpg|jpeg|png|webp|bmp)$/)) { alert('Please select valid image.'); };
        if (image) { setImageData(URL.createObjectURL(image)); }
    }

    const getChangedfontSize = parseInt(fontSizes);
    return (
        <>
            <Header Name="Meme generator" />
            <div className="text-center">
                <div className="wrapper-gen text-center" id="genImage" style={{ width: `${width ? width + `px` : "300px"}`, height: `${height ? height + `px` : "300px"}`, backgroundImage: `url(${imgData})`, backgroundPosition: 'center', border: `10px ${randomColor} solid ` }}>
                    <p id="t1" style={{ fontSize: getChangedfontSize, color: colors }}><strong>{titleFirst}</strong></p>
                    <p id="t2" style={{ fontSize: getChangedfontSize, color: colors }}><strong>{titleSecond}</strong></p>
                </div>
            </div>
            <p style={{ color: "white" }} className="text-center"><input type="file" onChange={(e) => {
                //@ts-ignore
                uploadImage(e.target.files[0])
            }} /></p>
            <div className="Sidebar" style={{ background: "none", paddingBottom: "20px" }}>
                <button style={{
                    border: `5px solid ${getColors[Math.floor(Math.random() * getColors.length)]}`,
                    borderRadius: 4,
                    padding: "10px",
                    marginRight: "5px",
                    background: `${getColors[Math.floor(Math.random() * getColors.length)]}`
                }} onClick={() => generateMeme()}><strong>Genearte Meme PNG</strong></button>
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
                </div>

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
