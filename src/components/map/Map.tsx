"use client";

import { useState } from "react";

interface MapProps {
  title: string;
}

const Map: React.FC<MapProps> = ({ title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className="w-full h-[50vh] relative" aria-label="Company locations map">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"
          aria-label="Loading map..."
          role="status"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-400">
              <svg className="w-12 h-12 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Map Iframe */}
      <iframe
        title={title}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5126969003288!2d-0.20440511405466638!3d5.563254068848121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a76309f9c37%3A0xb450873ecf547576!2sGreater%20Accra%20Regional%20Hospital!5e0!3m2!1sen!2sgh!4v1740851645048!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-describedby="map-description"
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Hidden accessibility description */}
      <figcaption id="map-description" className="sr-only">
        Locations of IJ Global Green Technology offices in Accra, Ghana and Prague, Czech Republic
      </figcaption>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "IJ Global Green Technology Limited",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Greater Accra Regional Hospital Area",
              "addressLocality": "Accra",
              "addressRegion": "Greater Accra",
              "postalCode": "GA-",
              "addressCountry": "GH"
            },
            {
              "@type": "PostalAddress",
              "addressLocality": "Prague",
              "addressRegion": "Central Bohemia",
              "addressCountry": "CZ"
            }
          ],
          "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5126969003288!2d-0.20440511405466638!3d5.563254068848121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a76309f9c37%3A0xb450873ecf547576!2sGreater%20Accra%20Regional%20Hospital!5e0!3m2!1sen!2sgh!4v1740851645048!5m2!1sen!2sgh"
        })}
      </script>
      
    </figure>
  );
};

export default Map;

      