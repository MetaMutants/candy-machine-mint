import mainBanner from '../images/main_banner_place_holder.png';
import secondaryBanner from '../images/secondry_banner_place_holder.png';
import logo from '../images/nft/nft_sample_1.png';
import nft1 from '../images/nft/nft_sample_1.png';
import teamMember1 from '../images/team/team_member_1.png';
import teamMember2 from '../images/team/team_member_2.png';
import twitterLogo from '../images/twitter/Logo white.svg';
import discordLogo from '../images/discord/icon_clyde_white_RGB.svg';

const Config = {
  navbar: {
    logo: logo
  },
  showcaseMain: {
    backGroundImage: mainBanner,
  },
  showcaseSecondary: {
    backGroundImage: secondaryBanner,
  },
  about: {
    name: 'MetaMutants',
    image: nft1,
    text: 'MetaMutants once lived in harmony, but this changed when they disagreed on which blockchain they supported. This split the civilization into two different groups, a group of MetaMutants that supported Solana, and a group of MetaMutants that supported Ethereum. After a devastating civil war, the two groups agreed for their civilization to coexist on both blockchains. This evenly split the civilians between the Solana blockchain and the Ethereum blockchain. This allowed supporters to live in harmony with each other. The only rule was that MetaMutants were not allowed to cross into the other blockchain. Which blockchain do you support?'
  },
  story: {
    title: 'About',
    text: 'MetaMutants was created by two brothers named Zach and Jordan'
  },
  roadMap: [
    {
      textLeft: '10%',
      textRight: 'At 1000 MetaMutants sold will giveaway a 1/1 MetaMutant'
    },
    {
      textLeft: '30%',
      textRight: 'At 3000 sold we will giveaway a 1/1 MetaMutant and 10 SOL to the community'
    },
    {
      textLeft: '100%',
      textRight: 'When sold out, we will give away 25 SOL, a 1/1 MetaMutant, and release our tutorial allowing anyone to create their own NFT collection on Solana'
    }
  ],
  teamMembers: [
    {
      teamMemberImage: teamMember1,
      teamMemberName: "Jordan",
      teamMemberLink: "https://www.instagram.com/jrdn.hu/",
      teamMemberTitle: "Developer",
      teamMemberDescription: "16 year old aspiring full stack developer"
    },
    {
      teamMemberImage: teamMember2,
      teamMemberName: "Zach",
      teamMemberLink: "https://www.instagram.com/zachattack_88/",
      teamMemberTitle: "Artist and Creative Director",
      teamMemberDescription: "14 year old aspiring entrepreneur and artist"
    }
  ],
  footerLinks: [
    {
      image: twitterLogo,
      link: 'https://twitter.com/MetaMutants'
    },
    {
      image: discordLogo,
      link: 'https://discord.gg/u3c9Kf3Xmz'
    }
  ],
  footerText: "All rights reserved",
};

export default Config;