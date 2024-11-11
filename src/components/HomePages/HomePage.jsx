'use client';

import React from 'react';
import AboutUsSection from '@/components/HomePages/AboutUsSection';
import WelcomeSection from '@/components/HomePages/WelcomeSection';
import MeetPrincipalSection from '@/components/HomePages/MeetPrincipalSection';
import ConnectWithUsSection from './ConnectWithUs';
import ThrivingCommunity from './ThrivingCommunity';
import UnlockingTheFuture from './UnlockingTheFuture';
import CommunitySection from './Community';
import PrimaryEducationSection from './PrimaryEducationSection';
import SecondaryEducationSection from './SecondaryEducationSection';
import ImageSlider from './ImageSlider';

const HomePage = () => (
  <>
    <ImageSlider /> {/* First comes the ImageSlider */}
    <WelcomeSection /> {/* Welcome Section */}
    <AboutUsSection /> {/* About Us Section */}
    <MeetPrincipalSection /> {/* Meet the Principal Section */}
    <ThrivingCommunity /> {/* Thriving Community Section */}
    <UnlockingTheFuture /> {/* Unlocking the Future Section */}
    <PrimaryEducationSection /> {/* Primary Education Section */}
    <SecondaryEducationSection /> {/* Secondary Education Section */}
    <ConnectWithUsSection /> {/* Connect With Us Section */}
    <CommunitySection /> {/* Community Section */}
  </>
);

export default HomePage;
