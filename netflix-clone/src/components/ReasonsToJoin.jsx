import React from 'react';
import './ReasonsToJoin.css'; 
import DownloadIcon from './DownloadIcon';
import TelescopeIcon from './TelescopeIcon';
import TelevisionIcon from './TelevisionIcon';
import Profile from './Profile';


const TvIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <g id="television-core-small">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z"
        fill="url(#paint0_radial)"
      />
      {/* ... all other <path> and <defs> same as your SVG ... */}
    </g>
    <defs>
      {/* your gradients definitions here */}
    </defs>
  </svg>
);

const reasons = [
  {
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    icon: <TelevisionIcon />,
  },
{
  title: 'Download your shows to watch offline',
  description: 'Save your favourites easily and always have something to watch.',
  icon: <DownloadIcon />,
},
  {
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    icon: <TelescopeIcon/>, 
  },
  {
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
    icon:<Profile/>, 
  },
];

const ReasonsToJoin = () => {
  return (
    <div className='More-reason-content'>
    <div className="container-sm py-5 reasons-section">
      <h2 className="text-white mb-4 fs-4 ">More reasons to join</h2>
      <div className="row">
        {reasons.map((reason, idx) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-4" key={idx}>
            <div className="reason-card d-flex flex-column  justify-content-between h-100 p-4 rounded-4">
              <div>
                <h5 className="text-white fw-bold">{reason.title}</h5>
                <p className="text-secondary">{reason.description}</p>
              </div>
              <div className="reason-icon mt-3 align-self-end">{reason.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default ReasonsToJoin;
