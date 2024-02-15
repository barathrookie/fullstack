
import './teams.css'
// Team member data
const teamMembers = [
  {
    name: 'Thomas shelby',
    role: 'Co-founder / CEO',
    image: 'https://www.xosalonspa.com/wp-content/uploads/2023/07/thomas-shelby-haircut.webp',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus.',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Aurthur shelby',
    role: 'Co-founder / CTO',
    image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Arthur-Shelby-Jr.Peaky-Blinders.webp',
    description: 'Its important to have a good customer service, a customer service provider. Aeneans good fortune needs pain. The living room needs the eros of the vestibulum, the layer before the puller, the sauce of the earth.',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'John shelby',
    role: 'Marketing',
    image: 'https://ichef.bbci.co.uk/images/ic/336xn/p01g678p.jpg',
    description: 'Its important to have a good customer service, a customer service provider. Aeneans good fortune needs pain. The living room needs the eros of the vestibulum, the layer before the puller, the sauce of the earth.',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    }
  },
  {
    name: 'Finn shelby',
    role: 'Product Manager',
    image: 'https://i2-prod.walesonline.co.uk/incoming/article23499865.ece/ALTERNATES/s1200c/0_Peaky-Blinders-SERIES-4.jpg',
    description: 'Its important to have a good customer service, a customer service provider. Aeneans good fortune needs pain. The living room needs the eros of the vestibulum, the layer before the puller, the sauce of the earth.',
    socialLinks: {
      twitter: '#',
    }
  },
];

// Team member component
// eslint-disable-next-line react/prop-types
function TeamMember({ name, role, image, description, socialLinks }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div className="card-body p-4">
                    <div className="member-profile position-absolute w-100 text-center">
                        <img className="rounded-circle mx-auto d-inline-block shadow-sm" src={image} alt={name} />
                    </div>
                    <div className="card-text pt-1">
                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">{name}</h5>
                        <div className="mb-3 text-center">{role}</div>
                        <div>{description}</div>
                    </div>
                </div>
                <div className="card-footer theme-bg-primary border-0 text-center">
                    <ul className="social-list list-inline mb-0 mx-auto">
                        {Object.entries(socialLinks).map(([social, link]) => (
                            <li key={social} className="list-inline-item">
                                <a className="text-dark" href={link}>
                                    {social}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Team component
const Team = () => (
  <section className="team-section py-5">
    <div className="container">
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
