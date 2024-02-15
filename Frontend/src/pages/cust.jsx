import './cust.css'


const CustomerReview = ({ imageUrl, review, name, occupation }) => (
  <li>
    <img src={imageUrl} className="wpx-100 img-round mgb-20" title="" alt="" />
    <p className="fs-110 font-cond-l">{review}</p>
    <h5 className="font-cond mgb-5 fg-text-d fs-130">{name}</h5>
    <small className="font-cond case-u lts-sm fs-80 fg-text-l">{occupation}</small>
  </li>
);

const CustomerReviews = () => (
  <div className="container">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
      <h4 className="font-cond-l fg-accent lts-md mgb-10">Not Yet Convinced?</h4>
      <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">Read Customer Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
      <CustomerReview
        imageUrl="https://bootdey.com/img/Content/avatar/avatar1.png"
        review='"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."'
        name="Martha Stewart"
        occupation="Business Woman - New York"
      />
      <CustomerReview
        imageUrl="https://bootdey.com/img/Content/avatar/avatar4.png"
        review='"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."'
        name="Ariana Menage"
        occupation="Recording Artist - Los Angeles"
      />
      <CustomerReview
        imageUrl="https://bootdey.com/img/Content/avatar/avatar5.png"
        review='"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."'
        name="Sean Carter"
        occupation="Fund Manager - Chicago"
      />
      < br/>
      < br/>
      < br/>
      < br/>
      < br/>
      < br/>
      < br/>
      < br/>
      < br/>
      
    </ul>
  </div>
);

export default CustomerReviews;
