'use client';
import { useRef, useState, useEffect } from 'react';
import Hls from 'hls.js';
import { CircleIcon, PlayIcon } from 'lucide-react';
import clsx from 'clsx';

export const VideoPlayer = ({
  autoPlay = true,
  scrollToPlay = false,
  controls = true,
  muted = true,
  maxWidth = '700px',
  poster,
  src,
  width,
  height,
  loop,
  preload = 'metadata',
  variant = 'primary',
  className,
}: {
  autoPlay?: boolean;
  scrollToPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  maxWidth?: string;
  poster?: string;
  src: string;
  width?: string;
  height?: string;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  variant?: 'primary' | 'secondary';
  className?: string;
}) => {
  const isIframe = src.includes('/iframe');
  const isHls = src.includes('.m3u8');

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay && !scrollToPlay);

  useEffect(() => {
    if (!videoRef.current) return;

    // Set up intersection observer for scroll-to-play functionality
    if (scrollToPlay) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isPlaying) {
              setIsPlaying(true);
              videoRef.current?.play();
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the video is visible
      );

      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, [scrollToPlay, isPlaying]);

  useEffect(() => {
    if (!videoRef.current || !isHls) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          videoRef.current?.play();
        }
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari, which has native HLS support
      videoRef.current.src = src;
      if (autoPlay) {
        videoRef.current.play();
      }
    }
  }, [src, autoPlay, isHls]);

  const togglePlay = () => {
    if (!videoRef.current) {
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current.play();

      const shouldLoop = typeof loop === 'boolean' ? loop : true;

      if (shouldLoop) {
        videoRef.current.setAttribute('loop', '');
      }
    }
  };

  return (
    <div
      style={{ maxWidth }}
      className={clsx(className, 'rounded-lg overflow-hidden shadow-md')}
    >
      <div className="relative bg-white dark:bg-black rounded-md">
        {!isPlaying ? (
          <button
            onClick={togglePlay}
            className={clsx(
              'w-full h-full flex items-center justify-center absolute inset-0 bg-gradient-to-r group',
              variant === 'primary'
                ? 'from-primary-900/30 to-black/70'
                : 'from-secondary-900/40 to-black/70',
            )}
          >
            <div className="relative w-28 h-28">
              <PlayIcon
                className={clsx(
                  'absolute top-0 left-0 z-10 inset-0 w-28 h-28 group-hover:scale-95 transition-transform',
                  variant === 'primary'
                    ? 'stroke-primary-200/50 fill-primary-200'
                    : 'stroke-secondary-200/50 fill-secondary-200',
                )}
              />

              <CircleIcon
                className={clsx(
                  'stroke-[1px] absolute top-0 left-0 z-0 w-28 h-28 scale-150 origin-center',
                  variant === 'primary'
                    ? 'stroke-primary-200/50 group-hover:stroke-primary-200/90'
                    : 'stroke-secondary-200/50 group-hover:stroke-secondary-200/90',
                )}
              />
            </div>
          </button>
        ) : null}

        {isIframe ? (
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src={`${src}${src.includes('?') ? '&' : '?'}autoplay=${autoPlay}&muted=${muted}&loop=${loop}&controls=${controls}`}
              style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            src={src}
            width={width}
            height={height}
            controls={autoPlay || isPlaying || controls}
            autoPlay={autoPlay}
            loop={loop}
            className={className}
            poster={poster}
            muted={muted}
            onClick={togglePlay}
            playsInline
            preload={preload}
          />
        )}
      </div>
    </div>
  );
};
