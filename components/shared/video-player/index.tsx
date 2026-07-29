'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export interface VideoPlayProps {
  id: number;
  name: string;
  imgUrl: string;
  videoId: string;
}

export default function VideoPlayer({
  activeVideoItem,
  initialVideoItem,
  setIsPlaying,
  isPlaying,
}: Readonly<{
  activeVideoItem?: VideoPlayProps;
  initialVideoItem: VideoPlayProps;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  isPlaying: boolean;
}>) {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  useEffect(() => {
    if (playerRef.current && activeVideoItem) {
      playerRef.current.playVideo();
    }
  }, [activeVideoItem?.id]);

  const handlePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: activeVideoItem ? 1 : 0,
      controls: 0,
      loop: 0,
      modestbranding: 1,
      rel: 0,
      wmode: 'transparent',
      showinfo: 0,
      disablekb: 1,
      iv_load_policy: 3,
      playsinline: 1,
    },
  };

  return (
    <div className="relative aspect-[1420/595] h-[212px] w-full overflow-hidden rounded-l-4xl rounded-tr-4xl sm:h-full">
      {/* YouTube Video */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 ${isPlaying ? 'visible' : 'invisible'}`}
      >
        <YouTube
          videoId={activeVideoItem?.videoId || initialVideoItem?.videoId}
          opts={opts}
          onReady={onPlayerReady}
          className="h-full w-full"
          onEnd={() => {
            setIsPlaying(false);
          }}
          onPlay={() => {
            setIsPlaying(true);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
        />
      </div>

      {/* Poster Overlay with Fade Animation */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={activeVideoItem?.imgUrl || initialVideoItem?.imgUrl}
              alt="Video thumbnail"
              fill
              className="z-[-1] object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Masked Button Area */}
      <div
        className="absolute right-0 bottom-[-4px] z-30 h-[48px] w-[108px] border-none bg-[#FCF8F8] sm:h-[108px] sm:w-[280px]"
        style={{
          WebkitMaskImage: `url(/images/mask-right.png)`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          WebkitMaskPosition: 'bottom',
          maskImage: `url(/images/mask-right.png)`,
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          maskPosition: 'bottom',
          transform: 'scaleY(-1)',
        }}
      >
        <motion.div
          className="flex h-full w-full justify-center pt-2 pl-2 sm:pl-4"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            style={{ transform: 'scaleY(-1)' }}
            onClick={handlePlay}
            className="z-50 h-[55%] w-[85%] cursor-pointer rounded-full bg-black text-center text-xs text-white hover:bg-red-700 sm:h-[55%] sm:w-[85%] sm:text-lg"
          >
            {isPlaying ? <span>⏸</span> : <span>▶</span>}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
