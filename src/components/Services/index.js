import React from 'react';
import {
    ServicesContainer, SectionTitle, ServicesWrapper,
    ServicesCard, ServiceIcon, ServiceTitle, 
    ServiceDesc
} from './ServicesElements';
import Icon1 from '../../assets/images/bike3.jpg';
import Icon2 from '../../assets/images/Icon2.jpg';
import Icon3 from '../../assets/images/Icon3.jpg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <SectionTitle>Services</SectionTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <ServiceIcon src={Icon1} />
                    <ServiceTitle>Custom Builds</ServiceTitle>
                    <ServiceDesc>From minor modifications to full on, built from scratch, unique bike builds, we have you covered.</ServiceDesc>
                </ServicesCard>
                <ServicesCard>
                    <ServiceIcon src={Icon2} />
                    <ServiceTitle>Repairs & Tune-Ups</ServiceTitle>
                    <ServiceDesc>Flat tire? Speedometer busted? Needs oil? Yeah, we can do all that too!</ServiceDesc>
                </ServicesCard>
                <ServicesCard>
                    <ServiceIcon src={Icon3} />
                    <ServiceTitle>Rentals & More</ServiceTitle>
                    <ServiceDesc>Want something unique to ride while visiting? Or are you searching for those hard to find, classic bikes? We can help!</ServiceDesc>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
