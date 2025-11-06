import React, { useEffect, useRef, useState } from 'react';

// Diamond sponsors
import lkLogo from "../assets/sponsors/diamond/6.png";

// Platinum sponsors
import somaiyaTrust from "../assets/sponsors/platinum/5.png";
import somaiyaUniversity from "../assets/sponsors/platinum/4.png";
import sonicWall from "../assets/sponsors/platinum/52.png";
import godavari from "../assets/sponsors/platinum/64.png";
import skf from "../assets/sponsors/platinum/54.png";

// Gold sponsors
import goldSponsor1 from "../assets/sponsors/gold/15.png";
import goldSponsor2 from "../assets/sponsors/gold/53.png";
import goldSponsor3 from "../assets/sponsors/gold/a.png";
import goldSponsor4 from "../assets/sponsors/gold/b.png";
// Silver sponsors
import silver9 from "../assets/sponsors/silver/9.png";
import silver21 from "../assets/sponsors/silver/21.png";
import silver32 from "../assets/sponsors/silver/32.png";
import silver36 from "../assets/sponsors/silver/36.png";
import silver42 from "../assets/sponsors/silver/42.png";
import silver51 from "../assets/sponsors/silver/51.png";
import silver55 from "../assets/sponsors/silver/55.png";
import silver56 from "../assets/sponsors/silver/56.png";
import silver62 from "../assets/sponsors/silver/62.png";
import silverD from "../assets/sponsors/silver/d.png";

// Bronze sponsors
import bronze3 from "../assets/sponsors/bronze/3.png";
import bronze7 from "../assets/sponsors/bronze/7.png";
import bronze10 from "../assets/sponsors/bronze/10.png";
import bronze12 from "../assets/sponsors/bronze/12.png";
import bronze13 from "../assets/sponsors/bronze/13.png";
import bronze19 from "../assets/sponsors/bronze/19.png";
import bronze22 from "../assets/sponsors/bronze/22.png";
import bronze23 from "../assets/sponsors/bronze/23.png";
import bronze35 from "../assets/sponsors/bronze/35.png";
import bronze40 from "../assets/sponsors/bronze/40.png";
import bronze41 from "../assets/sponsors/bronze/41.png";
import bronze49 from "../assets/sponsors/bronze/49.png";
import bronze50 from "../assets/sponsors/bronze/50.png";
import bronze61 from "../assets/sponsors/bronze/61.png";
import bronze63 from "../assets/sponsors/bronze/63.png";
import bronze66 from "../assets/sponsors/bronze/66.png";
import bronzeE from "../assets/sponsors/bronze/e.png";
import bronzeF from "../assets/sponsors/bronze/f.png";

// Partners
import partner16 from "../assets/sponsors/partner/16.png";
import partner17 from "../assets/sponsors/partner/17.png";
import partner26 from "../assets/sponsors/partner/26.png";
import partner28 from "../assets/sponsors/partner/28.png";
import partner29 from "../assets/sponsors/partner/29.png";
import partner30 from "../assets/sponsors/partner/30.png";
import partner38 from "../assets/sponsors/partner/38.png";
import partner58 from "../assets/sponsors/partner/58.png";
import partner59 from "../assets/sponsors/partner/59.png";
import partner65 from "../assets/sponsors/partner/65.png";
import partner68 from "../assets/sponsors/partner/68.png";
import partner72 from "../assets/sponsors/partner/72.png";
import partner73 from "../assets/sponsors/partner/73.png";
import partnerFineFinish from "../assets/sponsors/partner/fine finish.png";
import partnerG from "../assets/sponsors/partner/g.png";

const sponsorData = {
  diamond: [
    { name: "Diamond Sponsor 1", logo: lkLogo }
  ],
  platinum: [
    { name: "Somaiya Trust", logo: somaiyaTrust },
    { name: "Somaiya Vidyavihar University", logo: somaiyaUniversity },
    { name: "SonicWall", logo: sonicWall },
    { name: "Godavari", logo: godavari },
    { name: "SKF", logo: skf }
  ],
  gold: [
    { name: "Gold Sponsor 1", logo: goldSponsor1 },
    { name: "Gold Sponsor 2", logo: goldSponsor2 },
    { name: "Gold Sponsor 3", logo: goldSponsor3 },
    { name: "Gold Sponsor 4", logo: goldSponsor4 }
  ],
  silver: [
    { name: "Sponsor 1", logo: silver9 },
    { name: "Sponsor 2", logo: silver21 },
    { name: "Sponsor 3", logo: silver32 },
    { name: "Sponsor 4", logo: silver36 },
    { name: "Sponsor 5", logo: silver42 },
    { name: "Sponsor 6", logo: silver51 },
    { name: "Sponsor 7", logo: silver55 },
    { name: "Sponsor 8", logo: silver56 },
    { name: "Sponsor 9", logo: silver62 },
    { name: "Sponsor 10", logo: silverD }
  ],
  bronze: [
    { name: "Sponsor 1", logo: bronze3 },
    { name: "Sponsor 2", logo: bronze7 },
    { name: "Sponsor 3", logo: bronze10 },
    { name: "Sponsor 4", logo: bronze12 },
    { name: "Sponsor 5", logo: bronze13 },
    { name: "Sponsor 6", logo: bronze19 },
    { name: "Sponsor 7", logo: bronze22 },
    { name: "Sponsor 8", logo: bronze23 },
    { name: "Sponsor 9", logo: bronze35 },
    { name: "Sponsor 10", logo: bronze40 },
    { name: "Sponsor 11", logo: bronze41 },
    { name: "Sponsor 12", logo: bronze49 },
    { name: "Sponsor 13", logo: bronze50 },
    { name: "Sponsor 14", logo: bronze61 },
    { name: "Sponsor 15", logo: bronze63 },
    { name: "Sponsor 16", logo: bronze66 },
    { name: "Sponsor 17", logo: bronzeE },
    { name: "Sponsor 18", logo: bronzeF }
  ],
  partner: [
    { name: "Partner 1", logo: partner16 },
    { name: "Partner 2", logo: partner17 },
    { name: "Partner 3", logo: partner26 },
    { name: "Partner 4", logo: partner28 },
    { name: "Partner 5", logo: partner29 },
    { name: "Partner 6", logo: partner30 },
    { name: "Partner 7", logo: partner38 },
    { name: "Partner 8", logo: partner58 },
    { name: "Partner 9", logo: partner59 },
    { name: "Partner 10", logo: partner65 },
    { name: "Partner 11", logo: partner68 },
    { name: "Partner 12", logo: partner72 },
    { name: "Partner 13", logo: partner73 },
    { name: "Partner 14", logo: partnerFineFinish },
    { name: "Partner 15", logo: partnerG }
  ]
};
const tierConfig = {
  diamond: {
    title: "Diamond sponsors",
    imageSize: "w-96 h-96",
    borderColor: "border-cyan-400",
    glowColor: "shadow-cyan-400/50"
  },
  platinum: {
    title: "Platinum sponsors",
    imageSize: "w-84 h-80",
    borderColor: "border-gray-300",
    glowColor: "shadow-gray-300/50"
  },
  gold: {
    title: "Gold sponsors",
    imageSize: "w-70 h-64",
    borderColor: "border-yellow-400",
    glowColor: "shadow-yellow-400/50"
  },
  silver: {
    title: "Silver sponsors",
    imageSize: "w-60 h-52",
    borderColor: "border-gray-400",
    glowColor: "shadow-gray-400/50"
  },
  bronze: {
    title: "Bronze sponsors",
    imageSize: "w-50 h-40",
    borderColor: "border-orange-600",
    glowColor: "shadow-orange-600/50"
  },
  partner: {
    title: "Partners",
    imageSize: "w-40 h-32",
    borderColor: "border-blue-400",
    glowColor: "shadow-blue-400/50"
  }
};

const SponsorTier = ({ tier, sponsors, config }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tierRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (tierRef.current) {
      observer.observe(tierRef.current);
    }

    return () => {
      if (tierRef.current) {
        observer.unobserve(tierRef.current);
      }
    };
  }, []);

  return (
    <div 
        ref={tierRef}
        className={`mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
    >
        {/* Top border line with glow */}
        <div className={`w-4/5 mx-auto border-t-2 ${config.borderColor} ${config.glowColor} shadow-lg mb-12`}></div>
        
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
        {config.title}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
        {sponsors.map((sponsor, index) => (
            <div
            key={index}
            style={{
                transitionDelay: `${index * 100}ms`
            }}
            className={`${config.imageSize} flex items-center justify-center p-4 rounded-lg hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            >
            <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23ddd"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%23999" text-anchor="middle" dy=".3em">Image Not Found</text></svg>';
                }}
            />
            </div>
        ))}
        </div>
        
        {/* Bottom border line with glow */}
        <div className={`w-4/5 mx-auto border-t-2 ${config.borderColor} ${config.glowColor} shadow-lg`}></div>
    </div>
    );
};

const sponsors = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-16 text-white">
          Our sponsors
        </h1>
        
        {Object.entries(sponsorData).map(([tier, sponsors]) => (
          <SponsorTier
            key={tier}
            tier={tier}
            sponsors={sponsors}
            config={tierConfig[tier]}
          />
        ))}
      </div>
    </div>
  );
};

export default sponsors;