import './testimonials.scss';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: <TwitterIcon/>,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon:  <YouTubeIcon/>,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon:  <LinkedInIcon/>,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

      

    return (
        <div className="testimonials" id='Testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((item)=>(
                <div className={item.featured ? "card featured" : "card"} key={item.id}>
                    <div className="top">
                        <SubdirectoryArrowRightIcon className='left' />
                        <img src={item.img} alt='' className='user'/>
                            <span className='right'>{item.icon}</span>
                    </div>
                    <div className="center">
                        <p>{item.desc}</p>
                    </div>
                    <div className="bottom">
                        <h3>{item.name}</h3>
                        <h4>{item.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}