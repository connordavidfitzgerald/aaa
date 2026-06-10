import type { ImageMetadata } from "astro";

import ellipseCover from "../assets/images/ellipse-cover.jpg";
import ellipse2 from "../assets/images/ellipse2.jpg";
import ellipse3 from "../assets/images/ellipse3.jpg";
import ellipse4 from "../assets/images/ellipse4.jpg";
import ellipse5 from "../assets/images/ellipse5.jpg";
import eco1 from "../assets/images/ECO_COVER.jpg";
import eco2 from "../assets/images/ECO_WEB.png";
import eco3 from "../assets/images/ECO_PALETTE.png";
import eco4 from "../assets/images/ECO_TEXT.jpg";
import eco5 from "../assets/images/ECO_STORIES.jpg";
import eco6 from "../assets/images/ECO_PHONE.jpg";
import eco7 from "../assets/images/ECO_STILL.jpg";

import ctrl1 from "../assets/images/ctrl_screenmock.jpg";
import ctrl2 from "../assets/images/ctrl_text.jpg";
import ctrl3 from "../assets/images/ctrl_disk.jpeg";
import ctrl4 from "../assets/images/ctrl_phone2.jpg";
import ctrl5 from "../assets/images/ctrl_phone.jpg";
import ctrl6 from "../assets/images/ctrl_face.jpg";

import bxb1 from "../assets/images/bxb_outdoor.jpg";
import bxb2 from "../assets/images/bxb_type.png";
import bxb3 from "../assets/images/bxb_closeup.jpg";
import bxb4 from "../assets/images/bxb_pamphlet.jpg";
import bxb5 from "../assets/images/bxb_infograph.png";
import bxb6 from "../assets/images/bxb_brickposter.jpg";

import chimieCard from "../assets/images/chimiecard.jpg";
import chimieWall from "../assets/images/chimiewall.jpg";
import chimieWindow from "../assets/images/chimiewindow.jpg";
import chimieCandid from "../assets/images/chimiecandid.jpg";
import chimieCandid2 from "../assets/images/chimie_candid2.jpg";
import chimieCandid3 from "../assets/images/chimie_candid3.jpg";
import chimieCloseup from "../assets/images/chimie_closeup.jpg";
import chimieColourRed from "../assets/images/chimie_colourred.jpg";
import chimieComputer from "../assets/images/chimie_computer.jpg";
import chimieNoseguide from "../assets/images/chimie_noseguide.jpg";
import chimieType from "../assets/images/chimie_type.jpg";
import chimiePalette from "../assets/images/colorpalette.jpg";

export type MediaItem =
  | { kind: "image"; src: ImageMetadata; alt?: string }
  | { kind: "video"; muxPlaybackId: string; thumbnail?: string };

// A row in the media list is either:
//   - a single MediaItem  → renders full width (14 cols)
//   - a [left, right] tuple → renders side-by-side (7 + 7 cols)
export type MediaRow = MediaItem | [MediaItem, MediaItem];

export const img = (src: ImageMetadata, alt?: string): MediaItem => ({
  kind: "image",
  src,
  alt,
});

export const video = (
  muxPlaybackId: string,
  thumbnail?: string,
): MediaItem => ({
  kind: "video",
  muxPlaybackId,
  thumbnail,
});

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string;
  client: string;
  description: string;
  services: string;
  team: string;
  date: string;
  image?: ImageMetadata;
  imageAlt?: string;
  muxPlaybackId?: string;
  thumbnail?: string;
  media: MediaRow[];
  credits?: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "ellipse",
    index: "001",
    client: "ELLIPSE MAGAZINE",
    description:
      "Established in 1969, ellipse is a magazine published twice yearly and presents the work of writers in English and French translation. After a brief hiatus, they contacted us to work on a redesign for the 90th issue.",
    services: "Editorial Design",
    team: "Luckensy Odigé",
    date: "2024",
    image: ellipseCover,
    imageAlt: "Ellipse cover",
    media: [
      img(ellipseCover, "Ellipse cover"),
      img(ellipse2),
      img(ellipse3),
      img(ellipse4),
      img(ellipse5),
    ],
    credits: ["Luckensy Odigé"],
    links: [
      { label: "Website", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    id: "ecozoic",
    index: "002",
    client: "LEADERSHIP FOR THE ECOZOIC",
    description: "Project description.",
    services: "Services",
    team: "Team member",
    date: "2024",
    image: eco1,
    imageAlt: "Ecozoic",
    media: [
      img(eco1, "Ecozoic"),
      video("Q3T81EFbujaCk3diwagRcviKFeYGFfYiYTY00VW01qJhQ"),

      [img(eco3, "Ecozoic"), img(eco4, "Ecozoic")],
      video("Tyn8xBzIFmBpgADOMhUMtpiXEet4eks9H4l02O98yMkA"),
      img(eco5, "Ecozoic"),
      [img(eco6, "Ecozoic"), img(eco7, "Ecozoic")],
      video("N00I4BmynmbwdiAgM9CMT2ytS01iZrMnBp6qqy112RZFM"),
    ],
  },
  {
    id: "bxb",
    index: "003",
    client: "BRIQUE PAR BRIQUE",
    description: "Project description.",
    services: "Services",
    team: "Team member",
    date: "2024",
    muxPlaybackId: "00f02eD6Vs5T023j702VlB02uJls43i94H166Gdjb02gSPlPs",
    thumbnail:
      "https://image.mux.com/00f02eD6Vs5T023j702VlB02uJls43i94H166Gdjb02gSPlPs/thumbnail.jpg",
    media: [
      video(
        "00f02eD6Vs5T023j702VlB02uJls43i94H166Gdjb02gSPlPs",
        "https://image.mux.com/00f02eD6Vs5T023j702VlB02uJls43i94H166Gdjb02gSPlPs/thumbnail.jpg",
      ),
      img(bxb1, "Brique par brique"),
      [img(bxb2, "Brique par brique"), img(bxb3, "Brique par brique")],
      img(bxb4, "Brique par brique"),
      img(bxb5, "Brique par brique"),
      img(bxb6, "Brique par brique"),
    ],
  },
  {
    id: "ctrl",
    index: "004",
    client: "CTRL+ALT",
    description: "Project description.",
    services: "Services",
    team: "Team member",
    date: "2024",
    image: ctrl1,
    imageAlt: "CTRL+ALT thumbnail",
    media: [
      img(ctrl1, "CTRL+ALT"),
      [img(ctrl2, "CTRL+ALT"), img(ctrl3, "CTRL+ALT")],
      video(
        "QXAEfL5C1kCOERFnAJ3uuV9icuXqMuAsGoeocmZJrP00",
        "https://image.mux.com/QXAEfL5C1kCOERFnAJ3uuV9icuXqMuAsGoeocmZJrP00/thumbnail.jpg",
      ),
      [video("xlzsPwce01N00jVN998LnEtznrJLhfDc02GO01uPZc8TI9w"), img(ctrl4)],
      video(
        "SghV94zlZPzg01NIOw7P6hZU1r1Fi00AqxEuS3WwjSnqQ",
        "https://image.mux.com/SghV94zlZPzg01NIOw7P6hZU1r1Fi00AqxEuS3WwjSnqQ/thumbnail.jpg",
      ),
      video(
        "iBsrb101fH02BqhfO01e1qeMcOO9NOT6v1wX02v0201gXAxgk",
        "https://image.mux.com/iBsrb101fH02BqhfO01e1qeMcOO9NOT6v1wX02v0201gXAxgk/thumbnail.jpg",
      ),
      [img(ctrl5, "CTRL+ALT"), img(ctrl6, "CTRL+ALT")],
    ],
  },
  {
    id: "chimie",
    index: "005",
    client: "CHIMIE",
    description: "Project description.",
    services: "Services",
    team: "Team member",
    date: "2024",
    image: chimieWall,
    imageAlt: "CHIMIE thumbnail",
    media: [
      img(chimieWall),
      video(
        "9tk02Yy8QotdvvWcCfsqubod4Oal3ENViC01qO00J6YO6o",
        "https://image.mux.com/9tk02Yy8QotdvvWcCfsqubod4Oal3ENViC01qO00J6YO6o/thumbnail.jpg",
      ),
      [img(chimieType), img(chimieCard)],
      img(chimieWindow),
      img(chimiePalette),
      video(
        "37WQk2HUGJ3GW6hO2X1lRjYXTh8ZFHk7TaaylptVXuQ",
        "https://image.mux.com/37WQk2HUGJ3GW6hO2X1lRjYXTh8ZFHk7TaaylptVXuQ/thumbnail.jpg",
      ),
      [img(chimieCloseup), img(chimieColourRed)],
      img(chimieNoseguide),
      [img(chimieComputer), img(chimieCandid)],
      video(
        "IsJ00mXNIJkrA00uPN2xTvQMC00mTpiF6kNLZVmEDBMe9M",
        "https://image.mux.com/IsJ00mXNIJkrA00uPN2xTvQMC00mTpiF6kNLZVmEDBMe9M/thumbnail.jpg",
      ),
      [img(chimieCandid2), img(chimieCandid3)],
    ],
  },
];
