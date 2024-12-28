import React from 'react';

export function AboutText() {
  return (
    <div className="mt-12 bg-gray-800/20 rounded-lg p-6 backdrop-blur-sm">
      <div className="prose prose-invert prose-gray max-w-none">
        <p className="text-gray-300/80 font-light text-sm leading-relaxed mb-6">
          Glimpse is a creative collective where like-minded electronic music enthusiasts can collaborate. Whether playing in a club/live environment or as a vehicle to realise solo/collaborative music projects through the Glimpse Recordings label. Glimpse's productions and sets are generally considered 'techno,' but they have never been afraid to venture into the deeper ends of electro, dub techno, and house.
        </p>
        
        <div className="my-8 relative">
          <div className="absolute inset-0 bg-blue-900/20 rounded-lg z-10" />
          <img
            src="https://i.ibb.co/51GrGd3/no-1.png"
            alt="Glimpse London Promo"
            className="w-full rounded-lg shadow-lg opacity-90"
          />
        </div>

        <p className="text-gray-300/80 font-light text-sm leading-relaxed">
          Notable highlights include tracks championed by leading techno exponents such as Richie Hawtin, Magda, and Laurent Garnier, to name a few. This exposure has led to DJ gigs across the UK and Europe, including Stanton Calling Festival (UK), MOS (London), Watergate (Berlin), Harry Klein (Munich), and The Rex Club (Paris). The ethos has always remained the same—make everything about the music and let the music speak for itself. Do not fixate on the individuals behind the sound; that's simply an unwanted distraction.
        </p>
      </div>
    </div>
  );
}