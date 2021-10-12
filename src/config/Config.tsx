import mainBanner from '../images/main_banner_place_holder.png';
import secondaryBanner from '../images/secondry_banner_place_holder.gif';
import logo from '../images/nft/logo.gif';
import nft1 from '../images/nft/nft_sample_1.gif';
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
    text: 'MetaMutants once lived in harmony in Web2, but this harmony was short-lived. Everything changed when deciding to move to Web3 for a better future. The disagreement began on the superior blockchain to move to. The conflict split the MetaMutants into two groups: 5,000  that supported Solana and 5,000 that supported Ethereum. After a terrible civil war, half the population was eradicated. The two groups agreed for their civilization to coexist on both blockchains. This evenly split the Mutants 2,500 and 2,500 between Solana and Ethereum. By buying a MetaMutant on the Solana blockchain, you will be whitelisted to get a MetaMutant on the Ethereum blockchain in the future. Which blockchain do you support?'
  },
  story: {
    title: 'About',
    text: 'MetaMutants was created by two brothers named Zach (14) and Jordan (16). At 12, Jordan first became interested in learing about blockchain technology. During this time he used his desktop to mine Bitcoin. Zach became interested in digital art and cryptocurrency at 13, launching his brand ArtByAHuman. The 5,000 MetaMutants will be divided into 2 drops. The first 2,500 on Solana and the remaining 2,500 on Ethereum. All Solana MetaMutants holders will be whitelisted for the Ethereum drop. MetaMutants goal is the inspire younger teens to get into blockchain technology, and to show anyone can create a NFT project. 10% of all sales will go towards Save the Children Charity.'
  },
  roadMap: [
    {
      textLeft: '10%',
      textRight: 'At 500 MetaMutants sold we will giveaway a 1/1 MetaMutant'
    },
    {
      textLeft: '50%',
      textRight: 'At 1250 sold we will giveaway 10 SOL to a lucky MetaMutant Holder'
    },
    {
      textLeft: '100%',
      textRight: 'When sold out, we will give away 25 SOL and release our tutorial allowing anyone to create their own NFT collection on Solana. We will also release 2,500 MetaMutants on Ethereum at a later specified date'
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