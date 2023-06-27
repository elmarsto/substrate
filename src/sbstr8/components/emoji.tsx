import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface EmojiProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  big?: boolean;
}

const bigEmojiClasses = 'text-4xl pr-2';
const normalEmojiClasses = 'text-2xl pr-0.5';

export const Emoji = ({ big, className, style, children }: EmojiProps) => (
  <span
    style={style}
    className={ccn(big ? bigEmojiClasses : normalEmojiClasses, className)}
  >
    {children}
  </span>
);

export default Emoji;
