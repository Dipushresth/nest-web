import { cn } from "@/lib/utils";
import WhatsAppIcon from "./svgIcons/WhatsAppIcon";
import GmailIcon from "./svgIcons/GmailIcon";
import CalendarIcon from "./svgIcons/CalenderIcon";
import GoogleDriveIcon from "./svgIcons/GoogleDriveIcon";
import GoogleMeetIcon from "./svgIcons/GoogleMeetIcon";
import GoogleChatIcon from "./svgIcons/GoogleChatIcon";
import PlayIcon from "./svgIcons/PlayIcon";
import GossipIcon from "./svgIcons/GossipIcon";
import GetQuotation from "./svgIcons/GetQuotation";
import WhatsAppRedIcon from "./svgIcons/WhatsAppRedIcon";

export const iconList = {
  whatsApp: WhatsAppIcon,
  whatsAppRed: WhatsAppRedIcon,
  gmail: GmailIcon,
  calendar: CalendarIcon,
  gdrive: GoogleDriveIcon,
  gchat: GoogleChatIcon,
  gmeet: GoogleMeetIcon,
  play: PlayIcon,
  gossip: GossipIcon,
  quotation: GetQuotation,
};

export type IconNameType = keyof typeof iconList;

interface IconProps {
  name: IconNameType;
  className?: string;
  size?: string;
}

export const Icon = ({ name, className, size }: IconProps) => {
  const Svg = iconList[name];
  // const sizeClasses: Record<NonNullable<variantInterface['size']>, string> = {
  //   sm: 'h-(--input-sm-height) px-3 !text-xs rounded-[4px]',
  //   md: 'xl:h-(--input-md-height) h-(--input-sm-height) px-4 !text-sm rounded-[6px]',
  //   lg: 'xl:h-(--input-lg-height) h-(--input-md-height) px-4 !text-base rounded-[8px]',
  // };
  if (!Svg) return null;
  return <Svg className={cn("hover:cursor-pointer", className, size)} />;
};
