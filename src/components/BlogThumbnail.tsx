'use client';

interface BlogThumbnailProps {
  thumbnail: string;
  title: string;
}

export function BlogThumbnail({ thumbnail, title }: BlogThumbnailProps) {
  return (
    <div className="relative w-full h-48 mb-4">
      {/* <Image
        src={`${thumbnail}`}
        alt={title}
        fill
        className="object-cover rounded-lg"
      /> */}
      <img 
        src={`${thumbnail}`} 
        alt={`${title}`}
        className="object-cover rounded-lg"
      />
    </div>
  );
} 