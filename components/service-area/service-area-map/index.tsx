'use client';

import { states } from '@/configs/navigation.config';
import Link from 'next/link';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useRef, useState } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const servedStates = states;

/**
 * States shown in the darker gold colour.
 * Update this list as Top Goat expands.
 */
const expandingSoonStates = [
  // 'Washington',
  // 'Oregon',
  // 'Idaho',
  // 'Montana',
  // 'Wyoming',
  // 'Utah',
  // 'Arizona',
  // 'New Mexico',
  // 'North Dakota',
  // 'South Dakota',
  // 'Minnesota',
  // 'Wisconsin',
  // 'Maine',
  // 'New Hampshire',
  // 'Vermont',
  // 'Alaska',
  // 'Hawaii',
  // 'Nevada',
  // 'Arizona',
  // 'Alaska',
  // 'Vermont',
  // 'Utah',
  '',
];

function createStateSlug(stateName: string) {
  return stateName.toLowerCase().replace(/\s+/g, '-');
}

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const updateTooltipPosition = (event: React.MouseEvent<SVGPathElement>) => {
    if (!mapRef.current) return;

    const mapBounds = mapRef.current.getBoundingClientRect();

    setTooltipPosition({
      x: event.clientX - mapBounds.left,
      y: event.clientY - mapBounds.top,
    });
  };

  return (
    <section id="service-area-map" className="overflow-hidden bg-[#151517] pb-10 text-white">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div ref={mapRef} className="relative mx-auto w-full max-w-[1000px]">
          {hoveredState && tooltipPosition && (
            <div
              className="font-oswald pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-full rounded-[8px] border border-[#e7b53c]/25 bg-[#0b0b0d] px-3 py-2 text-xs font-semibold tracking-[0.04em] text-[#f4f1ea] uppercase shadow-[0_14px_35px_-15px_rgba(0,0,0,0.9)]"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y - 10,
                whiteSpace: 'nowrap',
              }}
            >
              {hoveredState}
            </div>
          )}

          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{
              scale: 1020,
            }}
            className="h-auto w-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name as string;

                  const isServed = servedStates.includes(stateName);
                  const isExpandingSoon = expandingSoonStates.includes(stateName);

                  const isClickable = isServed;

                  let fill = '#4a4438';

                  if (isServed) {
                    fill = '#f2c84b';
                  } else if (isExpandingSoon) {
                    fill = '#ad7a13';
                  }

                  const geography = (
                    <Geography
                      geography={geo}
                      tabIndex={isClickable ? 0 : -1}
                      role={isClickable ? 'link' : undefined}
                      aria-label={
                        isClickable
                          ? `View Top Goat service area for ${stateName}`
                          : `${stateName} service status`
                      }
                      onMouseEnter={(event) => {
                        setHoveredState(stateName);
                        updateTooltipPosition(event);
                      }}
                      onMouseMove={updateTooltipPosition}
                      onMouseLeave={() => {
                        setHoveredState(null);
                        setTooltipPosition(null);
                      }}
                      style={{
                        default: {
                          fill,
                          outline: 'none',
                          stroke: '#76601e',
                          strokeWidth: 0.55,
                          cursor: isClickable ? 'pointer' : 'default',
                          transition: 'fill 220ms ease, opacity 220ms ease',
                        },
                        hover: {
                          fill: isServed ? '#f6d467' : isExpandingSoon ? '#c89120' : '#5b5446',
                          outline: 'none',
                          stroke: '#8e7222',
                          strokeWidth: 0.65,
                          cursor: isClickable ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: isServed ? '#d9a225' : fill,
                          outline: 'none',
                          stroke: '#8e7222',
                          strokeWidth: 0.65,
                        },
                      }}
                    />
                  );

                  if (!isClickable) {
                    return <g key={geo.rsmKey}>{geography}</g>;
                  }

                  return (
                    <Link key={geo.rsmKey} href={`/service-area/${createStateSlug(stateName)}`}>
                      {geography}
                    </Link>
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2.5">
              <span className="h-4 w-4 rounded-[5px] bg-[#f2c84b]" />

              <span className="font-oswald text-xs font-semibold tracking-[0.04em] text-[#f4f1ea] uppercase sm:text-sm">
                States we serve
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="h-4 w-4 rounded-[5px] bg-[#ad7a13]" />

              <span className="font-oswald text-xs font-semibold tracking-[0.04em] text-[#d5cfbf] uppercase sm:text-sm">
                Expanding soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
