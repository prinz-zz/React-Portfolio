import './works.scss';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from 'react';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: <LanguageIcon/>,
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: <DeveloperModeIcon/>,
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: <NoteAltIcon/>,
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];
    
    const handleSlide = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      }
    
    return (
        <div className="works" id="Works">               
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map((item)=> (<div className="container" key={item.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {item.icon}
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <img
                  src={item.img}
                  alt=""
                />
                        </div>
                    </div>
                </div>))}
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={()=>handleSlide('left')}/>
            <ArrowForwardIosIcon className="arrow right" onClick={()=>handleSlide()}/>
        </div>
    )
}