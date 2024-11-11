type User = {
  id: number;
  name: string;
  url: string;
};

type VideoFiles = {
  id: number;
  quality: 'hd' | 'sd';
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
};

type VideoPictures = {
  id: number;
  picture: string;
  nr: number;
};

export type VideoResponse = {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: User;
  video_files: VideoFiles[];
  video_pictures: VideoPictures[];
};

export type Video = {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: User;
  videoFile?: VideoFiles;
};
