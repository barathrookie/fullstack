import Navbar2 from "../components/navbar";
import { Button, Carousel } from 'rsuite';
import { Panel } from 'rsuite';
import ss from "../assets/images/ss.jpg"
import Footer from "./footer"
import { useNavigate } from "react-router-dom";

const Event = () => {
    const Navigate = new useNavigate();
  const handleChange=()=>{
    Navigate('/getticket');
  }
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
      
        
        
       
         <h1 style={{textAlign:"center"}}>UPCOMING EVENT</h1>
         

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
            <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
            <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
      
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
            <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
      
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
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
      <Button onClick={handleChange}  appearance="primary">Get Ticket</Button>
    </Panel>
  </Panel>


  
  

  
  </div>
  
    </div>
    <br/>
      <br/>
      <br/>
    <Footer></Footer>
    </>
  );
};

export default Event;
