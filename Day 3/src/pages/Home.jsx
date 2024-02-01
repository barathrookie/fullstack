import Navbar2 from "../components/navbar";
import { Button, Carousel } from 'rsuite';
import { Panel } from 'rsuite';
import ss from "../assets/images/ss.jpg"
import Footer from "./footer"
const Home = () => {
  return ( 
    <>
    
    <div className="homepage">
      <Navbar2></Navbar2>
      
      <div style={{display:'flex',height: "700px"}}>
        <img
          src={ss}
          alt="Shelby Private Limited"
          style={{ margin: "20px" ,marginLeft:'20px',width:'100%'}}
        />
  
      </div>
      
        
        
         { <div style={{marginTop:'20px'}}>
         <p style={{ fontFamily: 'sans-serif', fontSize: '20px', margin: '20px' }}>
        Welcome to [Shelby Private Limited], where we redefine corporate events with unparalleled expertise and creativity. As industry leaders in event management, we take pride in orchestrating seamless and unforgettable experiences that leave a lasting impression. From meticulously planned conferences to engaging team-building activities, our dedicated team is committed to transforming your vision into a reality. With a focus on precision and innovation, we tailor every detail to reflect your company ethos, ensuring that each event aligns seamlessly with your objectives. Whether you are aiming to inspire, celebrate, or strategize, let [Shelby Private Limited] be your trusted partner in crafting events that go beyond expectations. Welcome to a world where your corporate gatherings are not just events but transformative moments.
      </p>
         </div> }
         <h1 style={{textAlign: "center"}}>UPCOMING EVENT</h1>
         

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="https://history-computer.com/wp-content/uploads/2022/08/shutterstock_719355487-scaled.jpg" height="240" alt="Porsche Car Launching Event" />
          <Panel header="Porsche Car Launching Event">
            <p>
              <small>
                Innovation that moves. Design that captivates. Welcome to the future of driving excellence with the all-new Porsche [Model].
              </small>
            </p>
            <br/>
            <br/>
      <Button  appearance="primary">Get Ticket</Button>
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="https://images.pexels.com/photos/1656564/pexels-photo-1656564.jpeg?cs=srgb&dl=pexels-brett-sayles-1656564.jpg&fm=jpg" height="240" alt="Christmas Celebrations" />
          <Panel header="Christmas Celebrations">
            <p>
              <small>
                Christmas is a day of meaning and traditions, a special day spent in the warm circle of family and friends - Margaret Thatcher
              </small>
            </p>
            <br/>
            <br/>
            <Button  appearance="primary">Get Ticket</Button>
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="https://img.freepik.com/premium-vector/worldwide-multi-sport-events_1454-732.jpg" height="240" alt="Sports Event" />
          <Panel header="Sports Event">
            <p>
              <small>
                Victory is in having done your best. If you done your best, you won - Billy Bowerman
              </small>
            </p>
            <br/>
            <br/>
            <br/>
            <Button  appearance="primary">Get Ticket</Button>
          </Panel>
        </Panel>
      </div>

      <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://img.jagranjosh.com/images/2023/December/31122023/happy-new-year-2024.webp" height="240" />
    <Panel header="New Year">
      <p>
        <small>
        Tomorrow is the first blank page of a 365-page book. Write a good one. - Brad Paisley
        </small>
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
          
      <Button  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://i.pinimg.com/originals/ac/b9/99/acb99937daeb4718532b3028fb734092.jpg" height="240" />
    <Panel header="Shelby Company Success Meet">
      <p>
        <small>
        As the smoke clears, the echoes of victory resonate through the halls of Shelby Company Limited. Our success is a symphony, composed with the notes of resilience and strategy.
        </small>
      </p>
      <br/>
      <br/>
      <Button  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-1048258424.jpg" height="240" />
    <Panel header="Spotify Sponsored Events">
      <p>
        <small>
        At Spotify Sponsored Events, we do not just create events; we compose experiences that resonate. Join us as we hit the perfect note between celebration and innovation
        </small>
      </p>
      <br/>
      <br/>
      <Button  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>
  </div>

  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://cdn.dribbble.com/users/1843676/screenshots/11780162/media/856077eaaf8fd6e19fb62c7baa32cb3d.jpg" height="240" />
    <Panel header="Shelby Company freshers Party">
      <p>
        <small>
        n the dimly lit halls, where secrets are shared and alliances forged, welcome to the Shelby Company Limited. Tonight, we celebrate the beginning of your own saga.
        </small>
      </p>
      <br/>
      <br/>
      <Button  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://i.pinimg.com/originals/be/cb/ca/becbca09cc81c9ecd1ce133c836b3f25.gif" height="240" />
    <Panel header="Apple Iphone15 Pro Max Launch Event">
      <p>
        <small>
        Innovation beyond imagination. Today, we redefine the future with the unveiling of the extraordinary iPhone 15 Pro Max.
        </small>
      </p>
      <br/>
      <br/>
      <Button  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://www.poynter.org/wp-content/uploads/2020/06/shutterstock_1211814685-2048x1365.png" height="240" />
    <Panel header="AWARDS WIN">
      <p>
        <small>
        I am truly honored and humbled to receive this award. Its a testament to the hard work and dedication of an incredible team.
        </small>
      </p>
      <br/>
      <br/>
      <br/>
          
      <Button  appearance="primary">Get Ticket</Button>

    </Panel>
  </Panel>

  
  
  </div>

  <br/>
   <br/>
   <br/>
  <div style={{height:"100%"}}>  
        <Carousel  style={{height:"500px"}}autoplay className="custom-slider" >
    <img src="https://blineevents.com/wp-content/uploads/2021/08/header-event-management.jpg" height="250" />
    <img src="https://eclipse.global/wp-content/uploads/2018/11/So-Sri-Lanka-CS-2.jpg" height="250" />
    <img src="https://corporatemagic.com/wp-content/uploads/2023/05/bhhs_2023-uai-1424x712.jpg" height="250" />
    <img src="https://www.ucb.ac.uk/media/y0ofjdyh/events-hospitality-credit-to-taylor-lynn-corporation-1.jpg?anchor=center&mode=crop&heightratio=0.4285714285714285714285714286&width=1920&rnd=132520653323200000" height="250" />
    <img src="https://images.squarespace-cdn.com/content/v1/545070b7e4b03ea792c15d50/1578530030976-4CLXSVUK3GHRL4HZ4YW1/DSC00771.jpg?format=2500w" height="250" />
  </Carousel>
     
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <Footer></Footer>
    </>
  );
};

export default Home;
