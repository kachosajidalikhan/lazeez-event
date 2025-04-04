import React from 'react';
import VendorHero from './vendorHero';
import WhoCanJoin from './whoCanJoin';
import RegistrationProcess from './registrationProcess';
import ListFoodMenuSection from './listMenuSection';
import MouSigningSection from './MOUsection';
import LazeezVendor from './lazeezVendor';
import VendorPerks from '../Home/components/vendor';

export default function VendorPage() {
    return (
        <>
            <VendorHero />
            <WhoCanJoin />
            <RegistrationProcess />
            <ListFoodMenuSection />
            <MouSigningSection />
            <div className="flex justify-center p-20">
                <button className="bg-[#FF4583E5] text-white PoppinsBold w-[500px] md:h-[130px] h-14 rounded-lg md:text-[40px]">Fill out the form</button>
            </div>
            <LazeezVendor />
            <VendorPerks />
        </>
    )
}