import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function PageTitle({ title, subtitle, description }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-thin tracking-[0.25em] text-gray-300/80">
        {title}
      </h1>
      <p className="text-xs md:text-sm text-gray-400/70 font-extralight tracking-widest uppercase">
        {subtitle}
      </p>
      {description && (
        <p className="text-xs md:text-sm text-gray-300/80 font-extralight whitespace-pre-line mt-4 [line-height:2]">
          {description}
        </p>
      )}
    </div>
  );
}