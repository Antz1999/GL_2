import React from 'react';
import { Container } from '../Layout/Container';
import { PageTitle } from '../common/PageTitle';
import { ShowSection } from './ShowSection';
import { UpcomingShows } from './UpcomingShows';
import { AboutText } from './AboutText';

export function HomeHero() {
  return (
    <div className="min-h-[calc(100vh-2.5rem)]">
      <Container className="py-24">
        <div className="max-w-3xl mx-auto">
          <PageTitle 
            title="glimpse.london"
            subtitle="house and techno collective"
            description={`2 hours of house and techno
3pm - 5pm
every 3rd sunday of the month
musicbox radio`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ShowSection />
            <UpcomingShows />
          </div>
          <AboutText />
        </div>
      </Container>
    </div>
  );
}